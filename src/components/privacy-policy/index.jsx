import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footer/footer";
import Header from "@/src/layout/header/header";
import React from "react";
import PrivacyPolicyArea from "./privacy-policy-area";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <BreadcrumbArea acive_menu="Privacy Policy" title="Privacy Policy" />
      <PrivacyPolicyArea />
      <Footer  tp_border={true}/>
    </>
  );
};

export default PrivacyPolicy;
