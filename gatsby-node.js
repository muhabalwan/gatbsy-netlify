const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const AboutUsTemplate = path.resolve("./src/templates/AboutUsTemplate.js");
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.error) {
      return Promise.reject(`ERROR IN PROMISE -=-> ${result.error}`);
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: AboutUsTemplate,
        context: {}
      });
    });
  });
};
