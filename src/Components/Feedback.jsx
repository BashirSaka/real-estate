import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import avatar1 from "../assets/project5.jpg";
import avatar2 from "../assets/project6.jpg";
import avatar3 from "../assets/project4.jpg";

const testimonials = [
  {
    avatar: avatar1,
    quote:
      "Working with this team made buying our first home stress-free. They explained every step clearly and always answered our calls, even after hours.",
    name: "Randy Baptista",
    title: "CEO of META company",
  },
  {
    avatar: avatar2,
    quote:
      "I was very impressed with the service I received. The agent was on time, professional, and did an excellent job. I would highly recommend them to anyone looking for a reliable realtor.",
    name: "Sarah Mitchell",
    title: "Marketing Director",
  },
  {
    avatar: avatar3,
    quote:
      "We sold our property within two weeks of listing. The valuation was spot on and the negotiation support saved us a lot of back and forth.",
    name: "Daniel Osei",
    title: "Small Business Owner",
  },
];

function Feedback() {
  const [activeIndex, setActiveIndex] = useState(1);

  const current = testimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="text-center px-8 py-8">
      <p className="text-5xl font-medium pb-8 pt-12">Our Customer Saying</p>

      <div className="flex justify-center gap-4 mb-8">
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.avatar}
            alt={testimonial.name}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full object-cover cursor-pointer transition-all ${
              index === activeIndex
                ? "w-16 h-16 ring-2 ring-black"
                : "w-12 h-12 opacity-60"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-8 max-w-3xl mx-auto">
        <button
          onClick={handlePrev}
          className="shrink-0 border rounded-full p-3 hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {current.quote}
          </p>
          <p className="mt-6 font-semibold">{current.name}</p>
          <p className="text-sm text-gray-500">{current.title}</p>
        </div>

        <button
          onClick={handleNext}
          className="shrink-0 border rounded-full p-3 hover:bg-gray-100 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
export default Feedback;
