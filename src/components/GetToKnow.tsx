import React from "react";
import { ContainerSize } from "../colors/Colors";

const GetToKnow: React.FC = () => {
 const content = "A cheerful and enthusiastic Software Engineering graduate excited about crafting innovative software solutions! I enjoy creating visually appealing, user-friendly interfaces and building strong backend systems. I thrive in collaborative settings but also love the challenge of working independently. I'm always eager to learn, grow, and apply my skills to deliver impactful, high-quality software. Looking forward to new opportunities to continue developing professionally!."

  return (
    <div className="py-20 text-white text-lg">
      <div className="mx-auto container flex justify-center">
        <div className={`px-10  gap-4 flex flex-col ${ContainerSize.containerWidth} `}>
            <div className="text-8xl">Get to know me</div>
            <div className="text-justify">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default GetToKnow;
