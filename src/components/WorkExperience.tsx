import React from "react";
import { workXP } from "../content/workXp";
import { ContainerSize } from "../colors/Colors";

function WorkExperienceCard(
  start: string,
  end: string,
  title: string,
  company: string,
  desc?: string,
  bullets? : string[]
) {
  return (
    <div className="bg-gradient-to-r from-teal-800/50 to-stone-900/80 sm:to-black p-12 py-20 sm:rounded-2xl ">
      <div className="mb-4 ">
        {start} - {end}
      </div>
      <div className="mb-4 text-red-600">{title}</div>
      <div className="mb-8 font-bold">{company}</div>
      <div className="text-justify">{desc}</div>
      <div className="text-justify">
        
      <ul className="list-disc list-outside pl-5">
        {bullets?.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
      
      </div>
    </div>
  );
}

const WorkExperienceCards: React.FC = () => {
  return (
    <div className="mx-auto text-xl container flex justify-center">
      <div className={`bg-black text-white bg-black/0 sm:px-10 px-0 gap-4 flex flex-col ${ContainerSize.containerWidth} `}>
        <div className="text-6xl md:text-7xl lg:text-8xl mt-32 mb-12 sm:px-0 px-10">Work Experience</div>
        {workXP.map(({ startDate, endDate, title, company, desc, bullets }) =>
          WorkExperienceCard(startDate, endDate, title, company, desc, bullets)
        )}
      </div>
    </div>
  );
};

export default WorkExperienceCards;
