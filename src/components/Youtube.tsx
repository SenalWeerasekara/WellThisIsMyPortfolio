import React from 'react';
import { portfolioSEProjects } from '../content/portfolioSE';
import PortfolioCard from './PortfolioProjectCard';
import { useNavigate } from 'react-router-dom';

const Youtube = () => {
  const paraContent = `As a software engineer, I love to code and create amazing digital experiences. But wait, there's more! When I'm not in front of my computer, I channel my creativity into building stuff in the real world. Check out my YouTube channel where I dive into DIY projects—everything from electronics and electrical work to woodworking. Come see me build stuff!`
  const displayedProjects = portfolioSEProjects.slice(0, 6);
  const navigate = useNavigate();

  const videos = [
    { link: 'https://www.youtube.com/embed/jlV1ajZG5Fo?si=yBubw-GqlNhQuxpo', title: 'DIY Electronic Door Lock' },
    { link: 'https://www.youtube.com/embed/RPW92zvVHIY?si=N4aDuCZ8IJ0la45v', title: 'DIY Electronic Door Lock' },
    { link: 'https://www.youtube.com/embed/6au2_ZMnzNE?si=W9Eo4EFRc8CBcAw_', title: 'DIY Electronic Door Lock' },
  ];

  return (
    <div>
        <div className="mb-6 font-bold">Other projects</div>
        <p className='text-justify'>{paraContent}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video, index) => (
          <div key={index} className="shadow-lg  bg-stone-800 p-2  rounded-lg overflow-hidden">
            <iframe
              className="w-full object-cover object-center"
              src={video.link}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div >
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-lg inline-block border border-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-300"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
        <div className="flex justify-center mt-6" onClick={()=> navigate('/portfolio')}>
          Show More
        </div>
    </div>


   
  );
};

export default Youtube;
