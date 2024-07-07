import React from "react";
import dpImg from "../assets/images/banner/dp.jpg";

function rightSide() {
  return (
    <div className="text-white">
      <div >
        <div className="text-xl md:text-2xl lg:text-4xl leading-snug md:leading-normal lg:leading-snug">Hola</div>
        <div className="text-2xl md:text-4xl lg:text-6xl leading-snug md:leading-normal lg:leading-snug">
          I'm <span className="text-red-700">Senal</span>
        </div>
        <div className="text-xl md:text-2xl lg:text-4xl font-bold leading-snug md:leading-normal lg:leading-snug">
          Full Stack Developer
        </div>
      </div>
      <div>
        <div className="text-sm md:text-base lg:text-lg">T T F I</div>
      </div>
    </div>
  );
}

const Banner: React.FC = () => {
  return (
    <div className="bg-black py-16">
      <div className="bg-black p-4 mx-auto container">
        <div className="flex flex-col md:flex-row lg:flex-row gap-6 md:gap-12 lg:gap-20">
          <div
            className={`w-full flex justify-center md:justify-end lg:justify-end`}
          >
            <img
              src={dpImg}
              className="w-[200px] md:w-[300px]  lg:w-[400px]"
              alt="dpImg"
            />
          </div>
          <div className="w-full items-center flex justify-center md:justify-start lg:justify-start">
            {rightSide()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
