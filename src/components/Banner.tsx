import React from "react";
import dpImg from "../assets/images/banner/dp.jpg";

import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'
import playPause from 'react-useanimations/lib/playPause'

const link = "ff";
const commonBtn =
  "text-lg inline-block px-4 py-2 rounded-lg transition duration-200 transition-transform hover:scale-110 active:scale-100";

function rightSide() {
  return (
    <div className="text-white">
      <div>
        <div className="text-5xl md:text-6xl lg:text-7xl leading-snug md:leading-normal">
          Hola
        </div>
        <div className="text-5xl md:text-7xl lg:font-bold lg:text-8xl leading-snug md:leading-normal lg:leading-snug">
          I'm{" "}
          <span className="text-rose-600/70 font-bold">Senal Weerasekara</span>
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-normal lg:leading-snug">
          Full Stack Developer
        </div>
      </div>
      <div>
        <div className="text-xl mb-10 md:mb-6 lg:mb-8 text-white/30 md:text-xl lg:text-3xl leading-snug md:leading-normal lg:leading-snug">
          And More!
        </div>
      </div>
    </div>
  );
}

const Banner: React.FC = () => {
  return (
    <div className=" sm:py-0 md:py-16 lg:py-16 mx-auto container">
      <div className="bg-black/0 p-4  sm:px-0 md:px-0 lg:px-10 xl:px-20 2xl:px-48">
        <div className="flex bg-red-900/10 backdrop-blur rounded-bl-3xl flex-col md:gap-10 lg:gap-10">
          <div className="w-full py-10 rounded-tr-3xl border-t-8 border-r-8 border-rose-800/60  flex-col flex p-10 flex">
            {rightSide()}
            <div className="gap-4 flex flex-col md:flex-row justify-center">
              <a
                href={link?.[0]}
                target="_blank"
                rel="noopener noreferrer"
                className={`border flex items-center gap-2 text-indigo-500 hover:text-white border-white hover:bg-indigo-500 active:bg-indigo-600 active:border-indigo-600 hover:border-indigo-500 text-white px-4 py-2 ${commonBtn}`}
              >
                GitHub
                <UseAnimations loop={true} autoplay={true} speed={2} strokeColor={"white"} animation={github} />
              </a>

              <a
                href={link?.[0]}
                target="_blank"
                rel="noopener noreferrer"
                className={`border flex items-center gap-2 text-indigo-500 hover:text-white border-white hover:bg-blue-500 hover:border-blue-500 active:bg-blue-600 active:border-blue-600 text-white px-4 py-2 ${commonBtn}`}
              >
                linkedIn
                <UseAnimations loop={true} autoplay={true}  strokeColor={"white"} animation={linkedin} />
              </a>
              <a
                href={link?.[0]}
                target="_blank"
                rel="noopener noreferrer"
                className={`border flex items-center gap-2 text-indigo-500 hover:text-white border-white hover:bg-red-500 hover:border-red-500 active:bg-red-600 active:border-red-600  text-white px-4 py-2 ${commonBtn}`}
              >
                Youtube
                <UseAnimations autoplay={true} speed={1} strokeColor={"white"} animation={playPause} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
