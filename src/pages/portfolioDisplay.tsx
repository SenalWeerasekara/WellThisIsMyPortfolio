import React from "react";
import { portfolioSEProjects } from "../content/portfolioSE";
import PortfolioCard from "../components/PortfolioProjectCard";


const PortfolioDisplay = () => {
  return (
    <div className="mx-auto text-xl container flex justify-center">
    <div className="bg-black text-white p-10 gap-4 max-w-[1000px]">
      <div className="mb-6 text-xl font-bold">Work Experience</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioSEProjects.map(({ startDate, endDate, name, img, projectLink, tech, smallDes }) =>
          <PortfolioCard
            key={name}
            startDate={startDate}
            endDate={endDate}
            name={name}
            img={img}
            projectLink={projectLink}
            tech={tech}
            smallDes={smallDes}
          />
        )}
      </div>
    </div>
  </div>
  );
};

export default PortfolioDisplay;
