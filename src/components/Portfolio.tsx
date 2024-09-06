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

  return (
    <div className="mx-auto text-xl container flex justify-center">
      <div className={`bg-black text-white p-10 gap-4 ${ContainerSize.containerWidth} `}>
      <div className="mb-6 text-2xl font-bold">Portfolio</div>
        
        {/* Work projects */}
        <div className="mb-6 text-xl font-bold">Work Experience</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className='flex justify-center'>
          <div className={`flex justify-center mt-6 bg-gray-500 ${commonBtn} `} onClick={()=> navigate('/portfolio')}>
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
