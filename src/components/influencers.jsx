import Sign from "/sign.svg";
import { ArrowUpRight } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Influencers = () => {
  const heading = useRef();
  const card = useRef();
  const circular = useRef();

  useGSAP(() => {
    gsap
      .timeline()
      .from(heading.current, {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,

        scrollTrigger: {
          trigger: heading.current,
          start: "top 70%",
          end: "+=100",
          scrub: 2,
        },
      })
      .from(card.current.children, {
        y: -50,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: card.current,
          start: "top 80%",
          end: "+=100",
          scrub: 2,
        },
      });
  });

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
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:mt-32 sm:px-6 lg:px-8">
      {/* Heading */}
      <div ref={heading} className="space-y-3 text-center sm:space-y-4">
        <h1 className="font-heading text-4xl font-bold sm:text-4xl md:text-5xl">
          Our <span className="text-primary">Influencers</span>
        </h1>
        <p className="text-text-light text-sm font-medium sm:text-base">
          Customization is at your fingertips — from choosing fabrics
          <br className="hidden sm:block" /> to crafting unique designs
        </p>
      </div>

      {/* Cards Grid */}
      <div
        ref={card}
        className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {person.map((item, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl"
          >
            <img
              src={item.src}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-x-2">
              <p className="font-heading text-sm font-bold text-[#fff] text-white sm:text-base">
                {item.name}
              </p>
              <img className="h-4 w-4 sm:h-5 sm:w-5" src={Sign} alt="sign" />
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-primary/65 hover:bg-primary rounded-full px-5 py-2 text-sm font-bold text-[#fff] text-white transition sm:px-6 sm:py-2.5 sm:text-base">
          Load More
          <ArrowUpRight className="ml-2 inline-block size-4 sm:size-5" />
        </button>
      </div>
    </section>
  );
};

export default Influencers;
