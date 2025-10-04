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
  {
    icon: <Shirt className="text-primary" />,
    title: "Shirt",
  },
  {
    icon: <Ship className="text-primary" />,
    title: "Tank Tops",
  },
  {
    icon: <WashingMachine className="text-primary" />,
    title: "Polos",
  },
  {
    icon: <Laptop className="text-primary" />,
    title: "Jerseys",
  },
  {
    icon: <Heart className="text-primary" />,
    title: "Seatpants",
  },
  {
    icon: <Users className="text-primary" />,
    title: "Hoodies",
  },
  {
    icon: <Shirt className="text-primary" />,
    title: "Shirt",
  },
];

const Products = () => {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-8">
      <div className="space-y-4">
        <h1 className="font-heading text-center text-5xl font-bold">
          Our <span className="text-primary"> Products</span>
        </h1>
        <p className="text-text-light text-center font-medium">
          Customization is at your fingertips - from choosing <br /> fabrics to
          crafting unique designs{" "}
        </p>
      </div>

      {/* cards */}
      <div className="mt-16 flex w-full gap-12 sm:h-32">
        <div className="bg-primary-light flex h-full w-full flex-col items-center justify-center gap-y-2 rounded-3xl">
          <Shirt className="text-primary" />
          <p className="text-primary text-lg font-medium">Physical Product</p>
        </div>
        <div className="bg-primary-light flex h-full w-full flex-col items-center justify-center gap-y-2 rounded-3xl">
          <MonitorPlay className="text-primary" />
          <p className="text-primary text-lg font-medium">Digital Product</p>
        </div>
        <div className="bg-primary-light flex h-full w-full flex-col items-center justify-center gap-y-2 rounded-3xl">
          <Gift className="text-primary" />
          <p className="text-primary text-center font-medium">
            Gift and Donation <br /> Campaign
          </p>
        </div>
        <div className="bg-primary-light flex h-full w-full flex-col items-center justify-center gap-y-2 rounded-3xl">
          <Speech className="text-primary" />
          <p className="text-primary text-lg font-medium">Consultation</p>
        </div>
      </div>

      {/* circular cards */}
      <div className="mt-18 flex w-full flex-wrap justify-center sm:gap-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="bg-primary-light flex h-16 w-16 items-center justify-center rounded-full p-4">
              {item.icon}
            </div>
            <p className="text-primary mt-2 text-sm font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
