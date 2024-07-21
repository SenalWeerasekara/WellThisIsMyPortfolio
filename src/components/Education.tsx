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
    <div className="bg-stone-800 p-12 rounded-2xl m-2">
      <div className="mb-4 ">
        {start} - {end}
      </div>
      <div className="mb-4 text-red-600">{title}</div>
      <div className="mb-8 font-bold">{company}</div>
      <div className="text-justify">{desc}</div>
    </div>
  );
}

const EducationCards: React.FC = () => {
  return (
    <div className="mx-auto text-xl container flex justify-center">
      <div className={`bg-black text-white px-10 gap-4 flex flex-col ${ContainerSize.containerWidth} `}>
        <div>Education</div>
        {educationData.map(({ startDate, endDate, title, company, desc }) =>
          educationCard(startDate, endDate, title, company, desc)
        )}
      </div>
    </div>
  );
};

export default EducationCards;
