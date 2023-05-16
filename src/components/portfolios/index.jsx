import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footer/footer";
import Header from "@/src/layout/header/header";
import React from "react";
import PortfolioItemsArea from "./portfolio-items-area";

const PortfolioFoure = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Portfolio" title="Case Study" />
      <PortfolioItemsArea />
      <Footer tp_border={true} />
      
    </>
  );
};

export default PortfolioFoure;
