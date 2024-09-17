

interface YoutubeCardS {
  link?: string;
  title?: string;
  desc?: string;
}

const YoutubeCard: React.FC<YoutubeCardS> = ({ link, title, desc }) => {
  const commonBtn =
    "text-lg inline-block px-4 py-2 rounded-md transition duration-300";

  return (
    <div className="h-full">
      <div className="shadow-lg bg-gradient-to-b from-red-900 to-gray-800/80 backdrop-blur-sm  rounded-lg overflow-hidden flex flex-col h-full">
        <iframe
          className="w-full object-cover object-center"
          src={link}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold mb-4">{title}</h3>
          <p className="text-lg mb-6">{desc}</p>
          <div className="flex-grow"></div>
          <div className="mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-red-500  hover:text-white border border-red-500 hover:bg-red-600 text-white ${commonBtn}`}
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;
