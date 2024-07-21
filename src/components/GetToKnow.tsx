import React from "react";
import { ContainerSize } from "../colors/Colors";

const GetToKnow: React.FC = () => {
 const content = 'In In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'

  return (
    <div className="py-20 text-white text-lg">
      <div className="mx-auto container flex justify-center">
        <div className={`px-10  gap-4 flex flex-col ${ContainerSize.containerWidth} `}>
            <div>Get to know me</div>
            <div className="text-justify">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default GetToKnow;
