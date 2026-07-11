import {
  Home,
  Building2,
  Warehouse,
  Castle,
  Building,
  Landmark,
  Trees,
  Boxes,
} from "lucide-react";

const categories = [
  { icon: Home, label: "Single-Family Homes" },
  { icon: Building2, label: "Tiny doplex house" },
  { icon: Boxes, label: "Modular/ prefab homes", highlighted: true },
  { icon: Castle, label: "Luxurious estates" },
  { icon: Warehouse, label: "Mid-Range Homes" },
  { icon: Landmark, label: "Ultra-Luxury Estates" },
  { icon: Trees, label: "Waterfront Homes" },
  { icon: Building, label: "Condominiums condos)" },
];

function Categories() {
  return (
    <section className="px-8 py-4 cursor-pointer">
      <h2 className="text-center font-semibold text-4xl mt-3 mb-10">
        Our Top Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map(({ icon: Icon, label, highlighted }) => (
          <span
            key={label}
            className={`flex flex-col items-center justify-center text-center gap-3 rounded-2xl p-8 transition-colors ${
              highlighted ? "bg-black text-white" : "bg-gray-100 text-gray-900"
            }`}
          >
            <Icon size={28} />
            <p className="font-medium text-lg">{label}</p>
          </span>
        ))}
      </div>
    </section>
  );
}
export default Categories;
