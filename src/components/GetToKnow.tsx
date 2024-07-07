import React from "react";

const GetToKnow: React.FC = () => {
 const content = 'In In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'

  return (
    <div className="bg-gray-500 text-white text-lg">
      <div className="bg-gray-800 mx-auto container flex justify-center">
        <div className="p-10 gap-4 flex flex-col max-w-[1000px]">
            <div>Get to know me</div>
            <div className="text-justify">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default GetToKnow;
