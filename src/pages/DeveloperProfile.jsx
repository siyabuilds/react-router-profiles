import { useParams } from "react-router-dom";
import { developers } from "../data/developers";

const DeveloperProfile = () => {
  const { username } = useParams();
  const developer = developers.find((dev) => dev.username === username);

  if (!developer) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-center text-2xl text-[var(--accent)]">
        Developer not found
      </div>
    );
  }

  return (
    <div className="mt-5 px-4 max-w-3xl mx-auto text-[var(--foreground)]">
      <div className="flex flex-col items-center gap-4">
        {/* Avatar */}
        <img
          src={`https://github.com/${developer.username}.png`}
          alt={developer.name}
          className="w-32 h-32 rounded-full shadow-lg object-cover"
        />

        {/* Name and Username */}
        <h1 className="text-3xl font-extrabold text-[var(--primary)] tracking-wide">
          {developer.name}
        </h1>
        <p className="text-[var(--accent)]">@{developer.username}</p>

        {/* Languages */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {developer.languages.map((language, idx) => (
            <span
              key={idx}
              className="bg-[var(--card-bg)] text-[var(--foreground)] px-4 py-1 rounded-full text-sm hover:bg-[var(--card-hover-bg)] transition-colors duration-300"
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
