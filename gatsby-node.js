const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const aboutUsTemplate = path.resolve("src/templates/aboutUsTemplate.js");
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.error) {
      return Promise.reject(`ERROR IN PROMISE -=-> ${result.error}`);
    }
    console.log("result IIIIS ", result);
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: aboutUsTemplate,
        context: {}
      });
    });
    // result.data.allMarkdownRemark.edges.forEach(edge => {
    //   createPage({
    //     path: edge.node.fields.slug, // required
    //     component: aboutUsTemplate,
    //     context: {}
    //   });
    // });
  });
};
