import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, SlidersHorizontal, Lock, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const goToAccount = () => {
    navigate("/account");
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="relative flex items-center justify-between px-3 sm:px-6 lg:px-8 py-4 sm:py-5 bg-white">
        <div className="flex items-center gap-1 font-bold text-base sm:text-lg cursor-pointer shrink-0">
          <Home size={20} className="-rotate-10 font-bold shrink-0" />
          Realco
        </div>

        <ul className="hidden lg:flex items-center gap-4 xl:gap-6 font-normal bg-gray-200 rounded px-3 xl:px-4 py-1 hover:font-semibold">
          <li
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-1 px-2 xl:px-3 py-1 rounded-md bg-white transition-colors duration-150 cursor-pointer text-sm xl:text-base whitespace-nowrap"
          >
            <Home size={16} />
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="px-2 xl:px-3 py-1 rounded-md hover:bg-white transition-colors duration-150 cursor-pointer text-sm xl:text-base whitespace-nowrap"
          >
            About Us
          </li>
          <li
            onClick={() => scrollToSection("listing")}
            className="px-2 xl:px-3 py-1 rounded-md hover:bg-white transition-colors duration-150 cursor-pointer text-sm xl:text-base whitespace-nowrap"
          >
            Listing
          </li>
          <li>
            <select className="px-2 py-1 rounded-md hover:bg-white transition-colors duration-150 cursor-pointer text-sm xl:text-base">
              <option value="Property">Property</option>
              <option value="Home2">Home1</option>
              <option value="Home3">Home2</option>
              <option value="Home4">Home3</option>
            </select>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
          <button
            onClick={goToAccount}
            className="flex items-center gap-1 font-medium cursor-pointer text-sm xl:text-base whitespace-nowrap"
          >
            <Lock size={15} />
            Login/Signup
          </button>
          <button
            onClick={() => navigate("/add-listing")}
            className="bg-black text-white px-3 xl:px-4 py-1 rounded-md cursor-pointer text-sm xl:text-base whitespace-nowrap"
          >
            Add listing
          </button>
          <SlidersHorizontal
            size={20}
            onClick={() => setShowFilters(!showFilters)}
            className="cursor-pointer shrink-0"
          />
        </div>

        <button
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white flex flex-col gap-4 px-4 sm:px-8 py-6 lg:hidden z-50 shadow-md">
            <div
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-1 px-3 py-2 rounded-md bg-gray-100 cursor-pointer"
            >
              <Home size={16} />
              Home
            </div>
            <div
              onClick={() => scrollToSection("about")}
              className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              About Us
            </div>
            <div
              onClick={() => scrollToSection("listing")}
              className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              Listing
            </div>
            <select className="px-3 py-2 rounded-md border border-gray-200 cursor-pointer">
              <option value="Property">Property</option>
              <option value="Home2">Home1</option>
              <option value="Home3">Home2</option>
              <option value="Home4">Home3</option>
            </select>

            <button
              onClick={goToAccount}
              className="flex items-center gap-1 font-medium cursor-pointer"
            >
              <Lock size={15} />
              Login/Signup
            </button>
            <button
              onClick={() => navigate("/add-listing")}
              className="bg-black text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Add listing
            </button>
            <div
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
            </div>
          </div>
        )}

        {showFilters && (
          <div className="absolute top-full right-4 sm:right-8 mt-2 w-full max-w-sm bg-white border rounded-xl shadow-lg p-5 z-50">
            <div className="flex items-center justify-between mb-4">
              <p className="font-semibold">Quick filters</p>
              <button
                onClick={() => setShowFilters(false)}
                aria-label="Close filters"
                className="cursor-pointer text-gray-400 hover:text-black"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Price range
                </label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>Any price</option>
                  <option>Under $100k</option>
                  <option>$100k - $500k</option>
                  <option>$500k+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Property type
                </label>
                <select className="w-full border rounded-lg px-3 py-2">
                  <option>Any type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Residential</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="City, address"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>

              <button
                onClick={() => setShowFilters(false)}
                className="bg-black text-white py-2.5 rounded-lg font-medium mt-1 cursor-pointer"
              >
                Apply filters
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
