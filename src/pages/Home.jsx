import { developers } from "../data/developers";
import DevCard from "./../components/DevCard";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="developer-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {developers.map((dev) => (
          <DevCard developer={dev} key={dev.username} />
        ))}
      </div>
    </div>
  );
};

export default Home;
