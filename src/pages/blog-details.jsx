import React from "react";
import SEO from "../common/seo";
import BlogDetails from "../components/blog-pages/blog-details";

const index = () => {
  return (
    <>
      <SEO pageTitle={"TJProduction | Blog Details"} />
      <BlogDetails />
    </>
  );
};

export default index;
