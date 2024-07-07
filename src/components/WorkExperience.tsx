import React from "react";
import { workXP } from "../content/workXp";

function WorkExperienceCard(
  start: string,
  end: string,
  title: string,
  company: string,
  desc?: string,
  bullets? : string[]
) {
  return (
    <div className="bg-stone-800 p-12 rounded-2xl m-2">
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
    <div className="bg-gray-700 mx-auto text-xl container flex justify-center">
      <div className="bg-black text-white p-10 gap-4 flex flex-col max-w-[1000px]">
        <div>Work Experience</div>
        {workXP.map(({ startDate, endDate, title, company, desc, bullets }) =>
          WorkExperienceCard(startDate, endDate, title, company, desc, bullets)
        )}
      </div>
    </div>
  );
};

export default WorkExperienceCards;
