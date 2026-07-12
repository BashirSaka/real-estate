import houseMain from "../assets/project1.jpg";
import house2 from "../assets/Penthouse.jpg";
import house3 from "../assets/project2.jpg";

function Review() {
  return (
    <section className="px-4 sm:px-8 py-10">
      {/* Image gallery row */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Large image with badges */}
        <div className="relative w-full lg:w-4/5">
          <img
            src={houseMain}
            alt="Featured property"
            className="w-full h-[280px] sm:h-[350px] lg:h-[420px] object-cover rounded-2xl"
          />

          {/* Circular "Detail" badge */}
          <div className="cursor-pointer absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm sm:text-base font-medium">
            Detail
          </div>

          {/* Bottom pill badges */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            <span className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              Best of Best
            </span>
            <span className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              Quality Guarantee
            </span>
            <span className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              Good to buy
            </span>
          </div>
        </div>

        {/* Two smaller images side by side */}
        <div className="w-full lg:w-2/5 flex gap-4 cursor-pointer">
          <img
            src={house2}
            alt="Property view 2"
            className="w-1/2 h-[200px] sm:h-[280px] lg:h-[420px] object-cover rounded-2xl"
          />
          <img
            src={house3}
            alt="Property view 3"
            className="w-1/2 h-[200px] sm:h-[280px] lg:h-[420px] object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">300+</h3>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Satisfied Client's
          </p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">620+</h3>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Projects Complited
          </p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">60+</h3>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Expert team member
          </p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">4.8%</h3>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Reviews Ratings
          </p>
        </div>
      </div>
    </section>
  );
}

export default Review;
