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
    <section className="px-8 py-4 flex flex-col items-center">
      <h1 className="text-center text-3xl font-semibold mt-2">
        See more clearly with <br />
        the <span className="text-gray-400">360°</span> camera
      </h1>

      <ul className="mt-6 bg-gray-100 flex justify-center py-1 px-1 gap-2 rounded-md cursor-pointer">
        {rooms.map((room) => (
          <li
            key={room.label}
            onClick={() => setActiveRoom(room.label)}
            className={`px-4 py-2 font-medium rounded-md transition-colors ${
              activeRoom === room.label
                ? "bg-white text-black shadow-sm"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {room.label}
          </li>
        ))}
      </ul>

      <div className="relative mt-8 w-full max-w-4xl mx-auto">
        <img
          src={currentImage}
          alt={activeRoom}
          className="w-full h-[420px] rounded-2xl object-cover"
        />

        <button className="absolute top-1/2 right-16 -translate-y-1/2 flex flex-col items-center justify-center bg-white/90 hover:bg-white transition-colors rounded-full w-28 h-28 shadow-lg">
          <Navigation2 size={20} className="mb-1" />
          <span className="text-sm font-medium">View All</span>
        </button>
      </div>
    </section>
  );
}
export default ViewAll;
