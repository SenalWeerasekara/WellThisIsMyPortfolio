import YoutubeCard from "../components/youtubeCard";
import { youtubeProjects } from "../content/youtubeProjects";


const YoutubeDisplay = () => {
  return (
    <div className="mx-auto text-xl container flex justify-center">
    <div className="bg-black text-white p-10 gap-4 max-w-[1000px]">
      <div className="mb-6 text-xl font-bold">Youtube Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {youtubeProjects.map((video) => (
          <YoutubeCard
            link={video.link}
            title={video.title}
            desc={video.desc}
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default YoutubeDisplay;
