import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footer/footer";
import Header from "@/src/layout/header/header";
import React from "react";
import PortfolioDetailsArea from "./portfolio-details-area";

const PortfolioDetails = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Portfolio Details" title="Helixon Product Branding" />
      <PortfolioDetailsArea />
      <Footer tp_border={true} />
    </>
  );
};

export default PortfolioDetails;
