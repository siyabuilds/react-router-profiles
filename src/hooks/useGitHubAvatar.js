import { useState, useEffect } from "react";

const useGitHubAvatar = (username) => {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const checkAvatar = async () => {
      const img = new Image();
      img.src = `https://github.com/${username}.png`;

      img.onload = () => {
        setAvatar(img.src);
      };

      img.onerror = () => {
        setAvatar(null);
      };
    };

    if (username) {
      checkAvatar();
    }
  }, [username]);

  return avatar;
};

export default useGitHubAvatar;
