import {
  Shirt,
  Speech,
  Gift,
  MonitorPlay,
  Ship,
  WashingMachine,
  Users,
  Heart,
  Laptop,
} from "lucide-react";

const items = [
  { icon: <Shirt className="text-primary" />, title: "Shirt" },
  { icon: <Ship className="text-primary" />, title: "Tank Tops" },
  { icon: <WashingMachine className="text-primary" />, title: "Polos" },
  { icon: <Laptop className="text-primary" />, title: "Jerseys" },
  { icon: <Heart className="text-primary" />, title: "Seatpants" },
  { icon: <Users className="text-primary" />, title: "Hoodies" },
  { icon: <Shirt className="text-primary" />, title: "Shirt" },
];

const Products = () => {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 sm:mt-20 sm:px-8">
      {/* Heading */}
      <div className="space-y-4 text-center">
        <h1 className="font-heading text-4xl font-bold sm:text-4xl md:text-5xl">
          Our <span className="text-primary">Products</span>
        </h1>
        <p className="text-text-light mx-auto text-sm font-medium sm:max-w-xl sm:text-base md:max-w-2xl">
          Customization is at your fingertips — from choosing fabrics to
          crafting unique designs.
        </p>
      </div>

      {/* Main cards */}
      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-6">
        {[
          { icon: <Shirt />, text: "Physical Product" },
          { icon: <MonitorPlay />, text: "Digital Product" },
          { icon: <Gift />, text: "Gift & Donation\nCampaign" },
          { icon: <Speech />, text: "Consultation" },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-primary-light flex flex-col items-center justify-center gap-y-2 rounded-2xl px-3 py-6 sm:rounded-3xl sm:p-8"
          >
            <div className="text-primary">{card.icon}</div>
            <p className="text-primary text-center text-sm font-medium sm:text-base">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* Circular product icons */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 sm:mt-16 sm:gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex w-20 flex-col items-center justify-center sm:w-24"
          >
            <div className="bg-primary-light flex h-14 w-14 items-center justify-center rounded-full p-3 sm:h-16 sm:w-16 sm:p-4">
              {item.icon}
            </div>
            <p className="text-primary mt-2 text-center text-xs font-medium sm:text-sm md:text-base">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
