import React from "react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";

interface PortfolioProject {
  startDate?: string;
  endDate?: string;
  name?: string;
  smallDes?: string;
  img?: string;
  projectLink?: string[];
  repoLink?: string[];
  tech?: string[];
}

const commonBtn =
  "text-lg inline-block px-4 py-2 rounded-md transition duration-300";

const PortfolioCard: React.FC<PortfolioProject> = ({
  // @ts-ignore
  startDate,
  // @ts-ignore
  endDate,
  name,
  smallDes,
  // @ts-ignore
  img,
  // @ts-ignore
  projectLink,
  repoLink,
  tech,
}) => {
  return (
    // <div className="bg-stone-800 rounded-2xl flex flex-col h-full">
    <div className="bg-gradient-to-b from-indigo-900/80 backdrop-blur-sm to-gray-800/60 rounded-2xl flex flex-col h-full">
      <div>
        {/* <img src={img} className="w-full min-h-48 p-4 rounded" alt="Project Image" /> */}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4 text-white text-xl font-semibold">{name}</div>
        <div className="mb-4 text-gray-300 text-justify">{smallDes}</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech?.map((item, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white text-xs font-medium px-2.5 py-1.5 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex-grow"></div> {/* This takes up available space */}
        <div className="mt-auto mt-4 flex justify-end">
          {" "}
          {/* Pushes button to the bottom */}
          <a
            href={repoLink?.[0]}
            target="_blank"
            rel="noopener noreferrer"
            className={`border border-indigo-600 flex items-center rounded-lg gap-2 text-indigo-500 hover:text-white hover:bg-indigo-500 active:bg-indigo-600 active:border-indigo-600 hover:border-indigo-500 text-white px-4 py-2 ${commonBtn}`}
          >
            GitHub
            <UseAnimations
              loop={true}
              autoplay={true}
              speed={2}
              strokeColor={"white"}
              animation={github}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
