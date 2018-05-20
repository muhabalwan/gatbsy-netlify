import React from "react";
import PropTypes from "prop-types";
import AboutUsTemplate from "../../templates/AboutUsTemplate";

const AboutUsPreview = ({ entry, widgetFor }) => {
  console.log("entry ", entry);
  return <AboutUsTemplate title={entry.getIn[("data", "title")]} />;
};

AboutUsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutUsPreview;
