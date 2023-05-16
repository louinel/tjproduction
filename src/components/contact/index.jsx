import BreadcrumbArea from "@/src/common/breadcrumb-area";
import MapArea from "@/src/common/map-area";
import Footer from "@/src/layout/footer/footer";
import Header from "@/src/layout/header/header";
import React from "react";
import ContactArea from "./contact-area";
import ContactHome from "@/src/components/price/contact-home";

const Contact = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Contact" title="Get In Touch" />
      <ContactArea />
      <ContactHome />
      <MapArea />
      <Footer />
    </>
  );
};

export default Contact;
