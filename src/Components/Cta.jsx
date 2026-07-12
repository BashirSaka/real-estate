import { useState } from "react";
import { Plus, X } from "lucide-react";
import HouseImg from "../assets/7th.jpg";

const faqs = [
  {
    question: "How do i know if a property is a good investment?",
    answer:
      "A good property investment typically has strong location demand, potential for value appreciation, good rental yield, and access to essential amenities such as schools, transportation, and shopping centers.",
  },
  {
    question: "What type of properties do you sell?",
    answer:
      "We offer a variety of properties including apartments, single-family homes, luxury villas, commercial spaces, and investment properties to suit different budgets and lifestyles.",
  },
  {
    question: "Do i need to hire a real estate agent?",
    answer:
      "While it is not required, working with a real estate agent can help simplify the buying process, provide market insights, negotiate better deals, and handle paperwork efficiently.",
  },
  {
    question: "What's the process for buying a property?",
    answer:
      "The process usually involves determining your budget, searching for suitable properties, scheduling viewings, making an offer, securing financing, completing legal checks, and finalizing the purchase.",
  },
  {
    question: "Can i tour a property before purchasing?",
    answer:
      "Yes, we encourage buyers to schedule a property tour before making a decision. This allows you to inspect the property, ask questions, and ensure it meets your expectations.",
  },
];

function Cta() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-14 px-8">
      <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
        <img
          src={HouseImg}
          alt="Modern property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-white text-4xl font-semibold">
            Ready to make your <br /> property a reality?
          </h2>
          <p className="text-white text-sm mt-4 max-w-md">
            Experience urban sophistication in this modern apartment featuring
            open-plan living, floor sophistication.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-white text-black text-sm font-medium px-5 py-2.5 rounded-full">
              Get Started Now
            </button>
            <button className="border border-white text-white text-sm font-medium px-5 py-2.5 rounded-full">
              Book a call
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start mt-16">
        <p className="font-semibold text-4xl">
          Frequently asked <br /> questions
        </p>
        <p className="text-sm text-gray-600 max-w-sm text-right">
          Experience urban sophistication in this modern apartment featuring
          open-plan living, floor sophistication in this modern apartment
          featuring
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl px-6 py-4 cursor-pointer transition-colors ${
                isOpen ? "bg-black text-white" : "bg-gray-50 text-black"
              }`}
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm">
                  <span className="text-gray-400 mr-3">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {faq.question}
                </p>
                {isOpen ? <X size={18} /> : <Plus size={18} />}
              </div>
              {isOpen && (
                <p className="text-sm text-gray-300 mt-3 pl-8 max-w-lg">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Cta;
