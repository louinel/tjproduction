import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Header from "@/src/layout/header/header";
import React from "react";
import PortfolioArea from "./portfolio-area";
import Footer from "@/src/layout/footer/footer";


const Portfolio = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Portfolio" title="Case Study" />
      <PortfolioArea />
      <Footer tp_border={true} />
    </>
  );
};

export default Portfolio;
