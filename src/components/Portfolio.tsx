import React from 'react';
import { portfolioSEProjects } from '../content/portfolioSE';
import PortfolioCard from './PortfolioProjectCard';
import Youtube from './Youtube';
import { useNavigate } from 'react-router-dom';
import { ContainerSize } from '../colors/Colors';

const Portfolio: React.FC = () => {
  const displayedProjects = portfolioSEProjects.slice(0, 6);
  const navigate = useNavigate();
  const commonBtn = 'text-lg inline-block px-4 py-2 rounded transition duration-300'
  const paraContent = `Explore a diverse collection of projects that demonstrate my expertise in web development, design, and creative problem-solving. Each project reflects my ability to build functional and visually engaging applications, with a focus on user experience and innovative solutions. From interactive web apps to DIY electronics and creative builds, these projects highlight my technical skills and passion for creating meaningful experiences. Dive in to see how I bring ideas to life through code and design.`

  return (
    <div className="mx-auto  text-xl container flex justify-center">
      <div className={` text-white px-10 mt-32 gap-4 ${ContainerSize.containerWidth} `}>
      <div className="mb-16 text-6xl md:text-7xl lg:text-8xl ">Portfolio</div>
        
        {/* Work projects */}
        <div className="mb-12 flex text-4xl md:text-4xl lg:text-5xl">Coding Projects</div>
        <p className='text-justify mb-24'>{paraContent}</p>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {displayedProjects.map(({ startDate, endDate, name, img, projectLink, tech, smallDes }) =>
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
        <div className='flex justify-center mt-16'>
          <div className={`flex justify-center bg-gray-500 ${commonBtn} `} onClick={()=> navigate('/portfolio')}>
            Show More
          </div>
        </div>

        {/* Youtube projects */}
        <div className='mt-10'>
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
