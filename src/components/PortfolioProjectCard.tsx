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
  
function PortfolioCard({
    startDate,
    endDate,
    name,
    smallDes,
    img,
    projectLink,
    repoLink,
    tech
  }: PortfolioProject) {
    return (
      <div className="bg-stone-800 p-2 rounded-2xl m-2">
        <div><img src={img} className='rounded-lg' alt="headerImg" /></div>
        <div className="mb-4">{name}</div>
        <div className="mb-4">{smallDes}</div>
      </div>
    );
  }

export default PortfolioCard;