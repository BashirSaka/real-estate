import { Home, SlidersHorizontal, Lock } from "lucide-react";

function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between px-8 py-5 bg-white">
        {/* Logo with house icon */}
        <div className="flex items-center gap-1 font-bold text-lg mr-5 cursor-pointer">
          <Home size={22} className="-rotate-10 font-bold" />
          Realco
        </div>

        {/* Nav links */}
        <ul className="flex items-center gap-6 font-normal bg-gray-200 rounded px-4 ml-25 py-1 hover:font-semibold">
          <li className="flex items-center gap-1 px-3 py-1 rounded-md bg-white hover:bg-white  transition-colors duration-150 cursor-pointer">
            <Home size={16} />
            Home
          </li>
          <li className="px-3 py-1 rounded-md hover:bg-white transition-colors duration-150 cursor-pointer">
            About Us
          </li>
          <li className="px-3 py-1 rounded-md hover:bg-white transition-colors duration-150  cursor-pointer">
            Listing
          </li>
          <li>
            <select className="px-2 py-1 rounded-md hover:bg-white transition-colors duration-150 cursor-pointer">
              <option value="Property">Property</option>
              <option value="Home2">Home1</option>
              <option value="Home3">Home2</option>
              <option value="Home4">Home3</option>
            </select>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 font-medium cursor-pointer">
            <Lock size={15} />
            Login/Signup
          </button>
          <button className="bg-black text-white px-4 py-1 rounded-md cursor-pointer">
            Add listing
          </button>
          <SlidersHorizontal size={20} className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
