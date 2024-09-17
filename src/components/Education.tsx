import React from "react";
import { educationData } from "../content/education";
import { ContainerSize } from "../colors/Colors";

function educationCard(
  start: string,
  end: string,
  title: string,
  company: string,
  desc: string
) {
  return (    
    <div className="backdrop-blur-sm  bg-gradient-to-r from-yellow-800/50 to-stone-900/0 sm:to-black p-12 sm:rounded-2xl rounsded py-20">

      <div className="mb-4">
        {start} - {end}
      </div>
      <div className="mb-4 text-xl font-bold text-red-600">{title}</div>
      <div className="mb-10 font-bold">{company}</div>
      <div className="text-justify">{desc}</div>
    </div>
  );
}

const EducationCards: React.FC = () => {
  return (
    <div className="mx-auto text-xl container flex justify-center">
      <div className={`bg-black text-white bg-black/0 sm:px-10 px-0 gap-4 flex flex-col ${ContainerSize.containerWidth}`}>

        <div className="text-6xl md:text-7xl lg:text-7xl sm:px-0 px-10 mb-4 mt-32">Education</div>
        {educationData.map(({ startDate, endDate, title, company, desc }) =>
          educationCard(startDate, endDate, title, company, desc)
        )}
      </div>
    </div>
  );
};

export default EducationCards;
