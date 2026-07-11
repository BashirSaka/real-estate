import rdpenthouse from "../assets/rdpenthouse.jpg";

function Who() {
  return (
    <section className="px-8 py-10 flex gap-8">
      {/* Left column: tag + image */}
      <div className="w-1/3 relative">
        <span className="inline-block border rounded-full px-4 py-1.5 text-sm font-medium mb-4">
          Who we are
        </span>
        <img
          src={rdpenthouse}
          alt="Modern house"
          className="w-full h-[220px] object-cover rounded-2xl"
        />
      </div>

      {/* Right column: heading + paragraph + button */}
      <div className="w-2/3 flex flex-col justify-between pl-10">
        <p className="text-3xl font-semibold leading-snug">
          Discover your ideal property investment property Restive. Connect with
          buyers,{" "}
          <span className="text-gray-400 font-normal">
            and smooth for smooth transactions. Find your perfect property or
            investment.
          </span>
        </p>

        <button className="bg-black text-white px-6 py-2 rounded-lg self-start mt-6 cursor-pointer">
          More about us
        </button>
      </div>
    </section>
  );
}

export default Who;
