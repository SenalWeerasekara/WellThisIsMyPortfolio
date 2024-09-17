import React from 'react';
import { ContainerSize } from '../colors/Colors';
import TechItems from './TechItems';
import { techData } from '../content/techData';


const Tech: React.FC = () => { 

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
