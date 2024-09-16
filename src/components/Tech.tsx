import React from 'react';
import { portfolioSEProjects } from '../content/portfolioSE';
import PortfolioCard from './PortfolioProjectCard';
import Youtube from './Youtube';
import { useNavigate } from 'react-router-dom';
import { ContainerSize } from '../colors/Colors';
import TechItems from './TechItems';
import { techData } from '../content/techData';


const Tech: React.FC = () => {
  const navigate = useNavigate();
  const commonBtn = 'text-lg inline-block px-4 py-2 rounded transition duration-300'
 

  return (
    <div className="mx-auto   text-xl container flex justify-center">
      <div className={`bg-black/0 w-full  text-white px-10 mt-32 gap-4 ${ContainerSize.containerWidth} `}>
      <div className="mb-16 text-6xl md:text-7xl lg:text-8xl ">Technologies</div>
        
        {/* Work projects */}
        <div className="mb-12 flex text-4xl md:text-4xl lg:text-5xl">Programming Languages & Frameworks</div>
        <TechItems techData={techData} />
      </div>
    </div>
  );
};

export default Tech;
