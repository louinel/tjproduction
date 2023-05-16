import React from "react";
import SEO from "../common/seo";
import PortfolioFoure from "../components/portfolios";

const index = () => {
  return (
    <>
      <SEO pageTitle={"TJProduction | Portfolio "} />
      <PortfolioFoure />
    </>
  );
};

export default index;
