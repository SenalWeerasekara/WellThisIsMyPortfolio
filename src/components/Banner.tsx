import React from "react";
import dpImg from "../assets/images/banner/dp.jpg";

function rightSide() {
  return (
    <div className="text-white">
      <div >
        <div className="text-7xl md:text-3xl lg:text-6xl leading-snug md:leading-normal">Hola</div>
        <div className="text-7xl md:text-5xl lg:font-bold lg:text-8xl leading-snug md:leading-normal lg:leading-snug">
          I'm <span className="text-rose-600/70 font-bold">Senal</span>
        </div>
        <div className="text-4xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-normal lg:leading-snug">
          Full Stack Developer
        </div>
      </div>
      <div>
        <div className="text-xl text-white/30 md:text-xl lg:text-3xl leading-snug md:leading-normal lg:leading-snug">And More!</div>
      </div>
    </div>
  );
}

const Banner: React.FC = () => {
  return (
    <div className=" sm:py-0 md:py-16 lg:py-16 mx-auto container">
      <div className="bg-black/0 p-4  sm:px-0 md:px-0 lg:px-10 xl:px-20 2xl:px-48">
        <div className="flex bg-black/90 flex-col sm:flex-col md:flex-row lg:flex-row md:gap-10 lg:gap-20 ">
          <div
            className={`w-full flex justify-center md:justify-end lg:justify-center border-l-8 lg:border-b-8 border-rose-800/60  `}
          >
            <img
              src={dpImg}
              className="w-full lg:w-[450px]"
              alt="dpImg"
            />
          </div>
          <div className="w-full py-10 border-t-8 border-r-8 border-rose-800/60 items-center  flex justify-center md:justify-start lg:justify-start">
            {rightSide()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
