import { useState } from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/Project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";

const buyingProjects = [
  { image: project1, name: "Spiraling Jungle", price: "$420m - $620m" },
  { image: project2, name: "Golden Meadows", price: "$310m - $480m" },
  { image: project3, name: "Azure Coastline", price: "$550m - $700m" },
  { image: project4, name: "Palm Residence", price: "$390m - $560m" },
  { image: project5, name: "Glass Haven", price: "$430m - $610m" },
  { image: project6, name: "Timber Ridge", price: "$275m - $400m" },
];

const sellingProjects = [
  { image: project6, name: "Timber Ridge", price: "$275m - $400m" },
  { image: project5, name: "Glass Haven", price: "$430m - $610m" },
  { image: project4, name: "Palm Residence", price: "$390m - $560m" },
  { image: project3, name: "Azure Coastline", price: "$550m - $700m" },
  { image: project2, name: "Golden Meadows", price: "$310m - $480m" },
  { image: project1, name: "Spiraling Jungle", price: "$420m - $620m" },
];

function RecentProject() {
  const [tab, setTab] = useState("Buying");

  const activeProjects = tab === "Buying" ? buyingProjects : sellingProjects;

  return (
    <section className="px-8 py-4" id="listing">
      <p className="text-sm font-medium text-gray-500 tracking-wide">
        WHAT WE OFFER
      </p>

      <div className="flex justify-between items-center mt-1 mb-8">
        <h2 className="text-3xl font-semibold">Recent Our project</h2>

        <div className="flex bg-gray-100 rounded-md p-1">
          {["Buying", "Selling"].map((option) => (
            <button
              key={option}
              onClick={() => setTab(option)}
              className={`px-5 py-2 rounded-md font-medium transition-colors ${
                tab === option
                  ? "bg-black text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activeProjects.map((project, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden h-80 group"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />

            <span className="cursor-pointer absolute top-4 right-4 bg-white text-xs font-medium px-3 py-1 rounded-full hover:bg-black text-black hover:text-white transition-colors">
              {tab === "Buying" ? "Good to buy" : "Good to sell"}
            </span>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white flex justify-between items-end">
              <div>
                <p className="text-xs opacity-80">Projects Name</p>
                <p className="font-medium">{project.name}</p>
              </div>
              <div className="text-right">
                <p className="text-xs opacity-80">Price Start from</p>
                <p className="font-medium">{project.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default RecentProject;
