import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const commonBtn = 'text-lg inline-block px-4 py-2 rounded transition duration-300';

  return (
    <div>
      Hello
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {techData
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
