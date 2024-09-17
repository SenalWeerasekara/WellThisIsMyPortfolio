import React from 'react';

interface TechItemS {
  title: string;
  desc: string;
  img: string;
  link: string;
}

interface TechItemsProps {
  techData?: TechItemS[];
}

const TechItems: React.FC<TechItemsProps> = ({ techData }) => {

  return (
    <div>
      Hello
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {techData
        // @ts-ignore
          ? techData.map(({ title, desc, img, link }, index) => (
              <div key={index} className='bg-red-300'>
                <h1>{title}</h1>
                <p>{desc}</p>
                <img src={img} alt={title} />
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export default TechItems;
