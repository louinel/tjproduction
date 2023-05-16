import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footer/footer";
import Header from "@/src/layout/header/header";
import React from "react";
import AboutArea from "../home/about-area";
import AbFactArea from "./ab-fact-area";
import AboutDeatialsArea from "./about-deatials-area";
import CtaAre from "./cta-are";
// import TeamArea from "./team-area";
import TeamArea from '@/src/components/home/our-team'

const About = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea />
      <AboutArea style_about={true} />
      <AbFactArea />
      <TeamArea />
      {/* <AboutDeatialsArea /> */}
      <CtaAre />
      <Footer />
    </>
  );
};

export default About;
