import React from "react";
import { ContainerSize } from "../colors/Colors";
import dpImg from "../assets/images/banner/dp.jpg";


const GetToKnow: React.FC = () => {
 const content = "A cheerful and enthusiastic Software Engineering graduate excited about crafting innovative software solutions! I enjoy creating visually appealing, user-friendly interfaces and building strong backend systems. I thrive in collaborative settings but also love the challenge of working independently. I'm always eager to learn, grow, and apply my skills to deliver impactful, high-quality software. Looking forward to new opportunities to continue developing professionally!."

  return (
    <div className="py-20 text-white text-lg ">
      <div className={`mx-auto container flex justify-center ${ContainerSize.containerWidth}`}>
        <div className={`px-10 gap-4 flex flex-col md:flex-col lg:flex-row gap-16`}>
          <div className="flex-1">
            <div className="text-7xl mb-6">Get to know me</div>
            <div className="text-justify text-xl leading-normal">{content}</div>
          </div>
          <div
            className={`w-full flex-2 flex basis-2/6 justify-center`}
          >
            <img
              src={dpImg}
              className=" w-[300px] lg:w-[330px] xl:w-[330px] rounded-full"
              alt="dpImg"
            />
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default GetToKnow;


    {/* <div
            className={`w-full flex bg-green-400 basis-1/4 justify-center md:justify-end lg:justify-center border-l-8 lg:border-b-8 border-rose-800/60  `}
          >
            <img
              src={dpImg}
              className="w-full"
              alt="dpImg"
            />
          </div> */}