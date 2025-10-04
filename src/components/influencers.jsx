import Sign from "/sign.svg";
import { ArrowUpRight } from "lucide-react";

const Influencers = () => {
  const person = [
    {
      name: "Biruk Yoshitila",
      src: "/Influencer/influencer-1.jpg",
    },
    { name: "Bogalech Arega", src: "/Influencer/influencer-2.jpg" },
    { name: "Zlalem Molama", src: "/Influencer/influencer-3.jpg" },
    { name: "Demoha Antenga", src: "/Influencer/influencer-4.jpg" },
  ];

  return (
    <section className="mx-auto mt-32 max-w-6xl">
      <div>
        <div className="space-y-4">
          <h1 className="font-heading text-center text-5xl font-bold">
            Our <span className="text-primary"> Influencers</span>
          </h1>
          <p className="text-text-light text-center font-medium">
            Customization is at your fingertips - from choosing <br /> fabrics
            to crafting unique designs{" "}
          </p>
        </div>
      </div>

      {/* cards */}
      <div className="mt-16 flex gap-x-6">
        {person &&
          person.map((item, index) => (
            <div key={index} className="relative h-86 w-full">
              <img
                className="h-full w-full object-cover"
                src={item.src}
                alt=""
              />
              <div className="absolute bottom-6 left-4 flex items-center gap-x-2">
                <p className="font-heading mt-2 text-center font-bold text-[#ffffff]">
                  {" "}
                  {item.name}{" "}
                </p>
                <img className="mt-2 h-5 w-5" src={Sign} alt="" />
              </div>
            </div>
          ))}
      </div>
      <div className="mx-auto mt-16 flex w-full justify-center">
        <button className="bg-primary/65 hover:bg-primary rounded-full px-6 py-2 font-bold text-[#fff]">
          Load More
          <ArrowUpRight className="ml-2 inline-block" />
        </button>
      </div>
    </section>
  );
};

export default Influencers;
