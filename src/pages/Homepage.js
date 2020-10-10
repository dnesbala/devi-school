import React from "react";

import { InfoSection, Programmes, Notices } from "../components";

import { schoolInfoSection, admissionInfoSection } from "../data/homepageData";

const Homepage = () => {
  return (
    <>
      <InfoSection {...schoolInfoSection} />
      <Programmes />
      <InfoSection {...admissionInfoSection} reverse />
      <Notices />
    </>
  );
};

export default Homepage;
