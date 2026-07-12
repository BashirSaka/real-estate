import stHero from "../assets/stHero.jpg";
import Penthouse from "../assets/project5.jpg";
import { Home } from "lucide-react";

function Hero() {
  return (
    <section className="px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Top row: image + headline */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: house image */}
        <div className="relative w-full lg:w-1/2">
          <img
            src={Penthouse}
            alt="Modern house"
            className="w-full h-[280px] sm:h-[350px] lg:h-[420px] object-cover rounded-2xl"
          />

          {/* Tags floating on top-left of image */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="bg-white/70 text-xs sm:text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300">
              House
            </span>
            <span className="bg-white/70 text-xs sm:text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300">
              Apartment
            </span>
            <span className="bg-white/70 text-xs sm:text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300">
              Residential
            </span>
          </div>
        </div>

        {/* Right: headline + pills + dark card */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-6">
              Discover your ideal property Connect with buyers
            </h1>

            <div className="flex flex-wrap gap-2">
              <span className="border rounded-full border-gray-300 px-4 py-1.5 text-sm font-medium cursor-pointer hover:border-black">
                Exclusive
              </span>
              <span className="border rounded-full border-gray-300 px-4 py-1.5 text-sm font-medium cursor-pointer hover:border-black">
                Property
              </span>
              <span className="border rounded-full border-gray-300 px-4 py-1.5 text-sm font-medium cursor-pointer hover:border-black">
                Real-estate
              </span>
              <span className="border rounded-full border-gray-300 px-4 py-1.5 text-sm font-medium cursor-pointer hover:border-black">
                Listing
              </span>
            </div>
          </div>

          {/* Dark "Discover Property Listing" card */}
          <div className="bg-black text-white rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex-1">
              <span className="text-xs border border-gray-700 rounded-full px-3 py-1 cursor-pointer">
                Explore
              </span>
              <h3 className="text-xl font-semibold mt-3 mb-2">
                Discover Property Listing
              </h3>
              <p className="text-gray-400 text-sm">
                Our mission is to make your real estate experience as smooth and
                fulfilling as possible.
              </p>
            </div>
            <img
              src={stHero}
              alt="Property preview"
              className="w-full sm:w-28 h-40 sm:h-24 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Search bar section */}
      <div className="mt-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">
          Find the best place
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Looking for
            </label>
            <input
              type="text"
              placeholder="Enter type"
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Price-range
            </label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option>Price</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">Property</label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option>Property type</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Locations
            </label>
            <select className="w-full border rounded-lg px-4 py-2">
              <option>Locations</option>
            </select>
          </div>
        </div>

        {/* Filter row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-gray-500">Filter:</span>
            <span className="flex items-center gap-1 border rounded-full px-3 py-1 text-sm text-black cursor-pointer hover:bg-gray-300">
              <Home size={14} />
              House
            </span>
            <span className="border rounded-full px-3 py-1 text-sm cursor-pointer hover:bg-gray-300">
              Apartment
            </span>
            <span className="border rounded-full px-3 py-1 text-sm cursor-pointer hover:bg-gray-300">
              Residential
            </span>
          </div>

          <button className="bg-black text-white px-6 py-2 rounded-lg cursor-pointer w-full sm:w-auto">
            Search Apartment
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;