import React from "react";
import { portfolioSEProjects } from "../content/portfolioSE";
import PortfolioCard from "./PortfolioProjectCard";
import { useNavigate } from "react-router-dom";
import { youtubeProjects } from "../content/youtubeProjects";
import YoutubeCard from "./youtubeCard";

const Youtube = () => {
  const paraContent = `As a software engineer, I love to code and create amazing digital experiences. But wait, there's more! When I'm not in front of my computer, I channel my creativity into building stuff in the real world. Check out my YouTube channel where I dive into DIY projects—everything from electronics and electrical work to woodworking. Come see me build stuff!`;
  const displayedProjects = portfolioSEProjects.slice(0, 6);
  const navigate = useNavigate();
  const commonBtn =
    "text-lg inline-block px-4 py-2 rounded-md transition duration-300";

  return (
    <div>
      <div className="mb-12 mt-44  text-4xl md:text-4xl lg:text-5xl">Other Projects</div>
      <p className="text-justify mb-24">{paraContent}</p>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {youtubeProjects.map((video, index) => (
          <YoutubeCard
            link={video.link}
            title={video.title}
            desc={video.desc}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <div
          className={`flex justify-center mt-16 bg-gray-500 ${commonBtn}`}
          onClick={() => navigate("/youtube")}
        >
          Show More
        </div>
      </div>
    </div>
  );
};

export default Youtube;
