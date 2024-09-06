interface PortfolioProject {
    startDate?: string;
    endDate?: string;
    name?: string;
    smallDes?: string;
    img?: string;
    projectLink?: string[];
    repoLink?: string[];
    tech?: string[];
  }

const commonBtn = 'text-lg inline-block px-4 py-2 rounded transition duration-300'
  
function PortfolioCard({
    startDate,
    endDate,
    name,
    smallDes,
    img,
    projectLink,
    repoLink,
    tech,
  }: PortfolioProject) {
    return (
      <div className="bg-stone-800 p-4 rounded-2xl ">
        <div><img src={img} className='rounded-lg' alt="headerImg" /></div>
        <div className="mb-4">{name}</div>
        <div className="mb-4">{smallDes}</div>
        <div>
          <div className={`border text-purple-500 hover:text-white border-purple-500 hover:bg-purple-600 text-white px-4 py-2  ${commonBtn}`}>GitHub</div>
        </div>
      </div>
    );
  }

export default PortfolioCard;