import React from "react";
import SEO from "../common/seo";
import Homepage from "../components/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"TJ Production"} />
       <Homepage />
      </Wrapper>
  );
};

export default Home;
