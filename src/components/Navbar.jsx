const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          PRIME TECH
        </h1>

        <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-full transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;