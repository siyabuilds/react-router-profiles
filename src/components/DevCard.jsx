import { Link } from "react-router-dom";
import useGitHubAvatar from "../hooks/useGitHubAvatar";

const DevCard = ({ developer }) => {
  const avatar = useGitHubAvatar(developer.username);
  if (!avatar) return null;

  return (
    <Link
      to={`/developer/${developer.username}`}
      className="bg-[var(--card-bg)] text-[var(--foreground)] rounded-lg shadow-lg p-6 transition-all ease-in-out transform hover:bg-[var(--card-hover-bg)] hover:scale-105 flex flex-col items-center border-1 border-[var(--accent)]"
    >
      <img
        src={avatar}
        alt={developer.name}
        className="w-24 h-24 rounded-full mb-4 object-cover shadow-md group-hover:shadow-xl transition-shadow duration-300"
      />
      <h3 className="text-2xl font-bold text-center mb-1 group-hover:text-[var(--primary)] transition-colors">
        {developer.name}
      </h3>
      <p className="text-sm text-[var(--accent)] text-center mb-4">
        @{developer.username}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {developer.languages.slice(0, 4).map((lang, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-[var(--accent)] text-[var(--background)] rounded-full text-xs font-semibold"
          >
            {lang}
          </span>
        ))}
      </div>
      <p className="mt-4 text-xs text-[var(--primary)] opacity-75 group-hover:underline">
        View Profile →
      </p>
    </Link>
  );
};

export default DevCard;
