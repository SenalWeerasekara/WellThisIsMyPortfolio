import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import GetToKnow from "../components/GetToKnow";
import EducationCards from "../components/Education";
import WorkExperienceCards from "../components/WorkExperience";
import Portfolio from "../components/Portfolio";
import Tech from "../components/Tech";

const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <GetToKnow />
      <EducationCards />
      <WorkExperienceCards />
      <Portfolio />
      <Tech/>
    </div>
  );
};

export default HomePage;
