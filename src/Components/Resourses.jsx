import { Calendar } from "lucide-react";
import HouseImg1 from "../assets/project5.jpg";
import HouseImg2 from "../assets/project4.jpg";
import HouseImg3 from "../assets/project3.jpg";
import HouseImg4 from "../assets/project1.jpg";

const rows = [
  {
    left: {
      img: HouseImg1,
      title: "DIY Projects That Help Your Home Sell Faster.",
      date: "April 14, 2025",
      widthClass: "w-full lg:w-[58%]",
    },
    right: {
      img: HouseImg2,
      title: "How to Start Earning Passive Income with Rental Properties.",
      date: "April 14, 2025",
      widthClass: "w-full lg:w-[42%]",
    },
  },
  {
    left: {
      img: HouseImg3,
      title: "Airbnb vs. Long-Term Rental: What's More Profitable in 2025?",
      date: "April 14, 2025",
      widthClass: "w-full lg:w-[42%]",
    },
    right: {
      img: HouseImg4,
      title: "10 Common Mistakes to Avoid When Buying a Home",
      date: "April 14, 2025",
      widthClass: "w-full lg:w-[58%]",
    },
  },
];

function Card({ item }) {
  return (
    <div className={`flex flex-col h-full ${item.widthClass}`}>
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-[180px] sm:h-[230px] object-cover rounded-lg"
        id="resourses"
      />
      <p className="font-medium text-base sm:text-lg mt-3 min-h-[44px] sm:min-h-[56px]">
        {item.title}
      </p>
      <div className="flex justify-between items-center mt-auto pt-3">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
          <Calendar size={16} />
          <span>{item.date}</span>
        </div>
        <button className="cursor-pointer text-xs sm:text-sm border border-gray-300 rounded-full px-3 sm:px-4 py-1.5 hover:bg-gray-100 whitespace-nowrap">
          Read More
        </button>
      </div>
    </div>
  );
}

function Resourses() {
  return (
    <section className="px-3 sm:px-6 lg:px-8 py-4 mt-15">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-3 sm:gap-4">
        <p className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
          Read Our Latest <br /> Resourses
        </p>
        <p className="text-sm text-gray-600 max-w-sm sm:text-right">
          Experience modern sophistication in this modern apartment featuring
          open-plan living floor. Sophistication in this modern apartment
          featuring
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-8">
        {rows.map((row, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            <Card item={row.right} />
            <Card item={row.left} />
          </div>
        ))}
      </div>
    </section>
  );
}
export default Resourses;
