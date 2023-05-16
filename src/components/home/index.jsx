import LineWrap from "@/src/common/line-wrap";
import Footer from "@/src/layout/footer/footer";
import Header from "@/src/layout/header/header";
import React from "react";
import About from "./about";
// import BlogArea from "./blog-area";
import CtaArea from "./cta-area";
import FeatureLists from "./feature-lists";
import HeroBanner from "./hero-banner";
import OurTeam from "./our-team";
import PricePlan from "./price-plan";
import ProjectArea from "./project-area";
import ServiceArea from "./service-area";
import Testimonial from "./testimonial";

const HomeThree = () => {
  return (
    <>
    <LineWrap />
      <Header />
      <HeroBanner />
      <FeatureLists />
      <About />
      <ServiceArea />
      <CtaArea />
      <ProjectArea />
      <PricePlan />
      <OurTeam />
      <Testimonial />
      <Footer />
    </>
  );
};

export default HomeThree;
