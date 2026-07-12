import { Mail, Briefcase, ArrowUp } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiX,
} from "@icons-pack/react-simple-icons";

const socials = [
  { icon: SiFacebook, label: "Facebook" },
  { icon: SiInstagram, label: "Instagram" },
  { icon: Briefcase, label: "LinkedIn" },
  { icon: SiX, label: "X" },
];

const columns = [
  {
    title: "Sell a home",
    links: ["Request an offer", "Pricing", "Review", "Store"],
  },
  {
    title: "Buy,rent and sell",
    links: [
      "Buy and sell properties",
      "Rent home",
      "Builder trade-up",
      "Redability",
    ],
  },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-4 mt-10 sm:mt-15">
      <footer className="relative bg-black text-gray-300 overflow-hidden">
        <div className="absolute right-4 sm:right-10 top-10 w-40 h-40 sm:w-64 sm:h-64 rounded-full border border-gray-800" />

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="cursor-pointer absolute right-8 sm:right-16 top-8 sm:top-16 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
        >
          <ArrowUp size={18} />
        </button>

        <div className="relative px-4 sm:px-6 lg:px-10 py-10 sm:py-14 flex flex-col md:flex-row md:justify-between gap-8 sm:gap-10">
          {columns.map((col, index) => (
            <div key={index}>
              <p className="text-white font-medium mb-4">{col.title}</p>
              <ul className="flex flex-col gap-3 text-sm">
                {col.links.map((link, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col md:items-start">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-4 sm:gap-10 w-full">
              <div>
                <p className="text-white font-medium mb-4">Contact Us</p>
                <p className="text-sm">+009 (5678) 357-876</p>
                <p className="text-sm mt-1">+009 (5678) 357-876</p>
              </div>
              <div className="flex items-center gap-2 text-sm whitespace-nowrap">
                <Mail size={16} />
                <span>hello@realco.com</span>
              </div>
            </div>

            <p className="text-white font-medium mt-6 mb-3">Follow us:</p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="hover:text-white"
                >
                  <Icon size={18} color="currentColor" />
                </a>
              ))}
            </div>

            <p className="text-white font-medium mt-6 mb-2">Locations</p>
            <p className="text-sm">
              Street 3489,no Rd. new <br /> york, London
            </p>
          </div>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-10 overflow-hidden">
          <p className="text-[15vw] sm:text-[12vw] lg:text-[8rem] leading-none font-bold text-gray-800 text-center md:text-center whitespace-wrap">
            Dream Home
          </p>
        </div>

        <div className="relative border-t border-gray-800 px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>Copyright 2025 realco all rights reserved</p>
          <p className="hover:text-white cursor-pointer">Privacy & policy</p>
        </div>
      </footer>
    </section>
  );
}
export default Footer;