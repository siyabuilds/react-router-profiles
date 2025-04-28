const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[var(--background)] text-[var(--foreground)] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Developer Profiles
        </h1>
      </div>
    </header>
  );
};

export default Header;
