import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footer/footer";
import Header from "@/src/layout/header/header";
import React from "react";
import BusinessJourney from "@/src/components/about/cta-are";
import ServiceArea from "./service-area";

const ServiceThree = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Service"  title="What We Do" />
      <ServiceArea />
      <BusinessJourney style_service={true}/>
      <Footer />
    </>
  );
};

export default ServiceThree;
