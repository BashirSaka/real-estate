import { useState } from "react";
import { Navigation2 } from "lucide-react";
import homeView from "../assets/more-clearly-section.jpg";
import livingRoomView from "../assets/resourse1-section.jpg";
import kitchenView from "../assets/resources2.jpg";
import poolView from "../assets/resoursesPool.jpg";
import bedroomView from "../assets/resources3.jpg";

const rooms = [
  { label: "Home", image: homeView },
  { label: "Living Room", image: livingRoomView },
  { label: "Kitchen", image: kitchenView },
  { label: "Swimming Pool", image: poolView },
  { label: "Bedroom", image: bedroomView },
];

function ViewAll() {
  const [activeRoom, setActiveRoom] = useState("Living Room");

  const currentImage = rooms.find((room) => room.label === activeRoom)?.image;

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-4 flex flex-col items-center">
      <h1 className="text-center text-2xl sm:text-3xl font-semibold mt-2">
        See more clearly with <br />
        the <span className="text-gray-400">360°</span> camera
      </h1>

      <div className="mt-6 w-full max-w-full overflow-x-auto">
        <ul className="bg-gray-100 flex justify-start sm:justify-center py-1 px-1 gap-2 rounded-md w-max mx-auto">
          {rooms.map((room) => (
            <li
              key={room.label}
              onClick={() => setActiveRoom(room.label)}
              className={`px-3 sm:px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                activeRoom === room.label
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {room.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-8 w-full max-w-4xl mx-auto">
        <img
          src={currentImage}
          alt={activeRoom}
          className="w-full h-[240px] sm:h-[320px] lg:h-[420px] rounded-2xl object-cover"
        />

        <button className="absolute top-1/2 right-4 sm:right-10 lg:right-16 -translate-y-1/2 flex flex-col items-center justify-center bg-white/90 hover:bg-white transition-colors rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 shadow-lg">
          <Navigation2 size={16} className="mb-1" />
          <span className="text-[10px] sm:text-xs lg:text-sm font-medium">
            View All
          </span>
        </button>
      </div>
    </section>
  );
}
export default ViewAll;
