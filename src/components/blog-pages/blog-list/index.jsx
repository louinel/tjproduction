import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footer/footer";
import Header from "@/src/layout/header/header";
import React from "react";
import BlogListArea from "./blog-list-area";

const BlogList = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Blog list"  title="Blog list"/>
      <BlogListArea  />
      <Footer />
    </>
  );
};

export default BlogList;
