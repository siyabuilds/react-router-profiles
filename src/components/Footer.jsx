import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[var(--background)] text-[var(--foreground)] text-xs sm:text-sm flex items-center justify-between px-6 py-3 shadow-inner z-50">
      <span>© {year} Samson Siyabonga Lukhele</span>
      <ThemeSwitch />
    </footer>
  );
};

export default Footer;
