import { Star } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const arr = [
  {
    src: "/review/avatar-1.jpg",
  },
  {
    src: "/review/avatar-2.jpg",
  },
];

const Reviews = () => {
  const heading = useRef();
  const card = useRef();

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
        markers: true,
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

  return (
    <section className="mx-auto mt-32 max-w-6xl">
      {" "}
      <div>
        <div ref={heading} className="space-y-4">
          <h1 className="font-heading text-center text-4xl font-bold md:text-5xl">
            Reviews
          </h1>
          <p className="text-text-light text-center font-medium">
            here is what our customers say about us.
          </p>
          <div className="bg-primary mx-auto h-[2px] w-24"></div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center lg:relative">
        {/* Background container  visible only on lg */}
        <div className="bg-accent-gray mx-auto mt-16 hidden h-80 w-8/12 rounded-4xl lg:block"></div>

        {/* Review cards container */}
        <div
          ref={card}
          className="mt-10 flex w-full flex-col items-center gap-6 sm:mt-12 sm:gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-4 lg:absolute lg:top-20 lg:w-full lg:justify-center"
        >
          {arr.map((item, i) => (
            <div
              key={i}
              className="flex h-auto w-10/12 flex-col justify-around rounded-3xl bg-[#fff] p-6 shadow-2xl transition-transform duration-300 hover:scale-[1.02] sm:h-72 sm:w-9/12 md:w-[45%] lg:w-[38%]"
            >
              {/* Header */}
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="h-14 w-14 overflow-hidden rounded-full sm:h-16 sm:w-16">
                    <img
                      src={item.src}
                      alt="avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="font-heading text-text-dark text-base font-bold sm:text-lg">
                      Natneal
                    </h1>
                    <p className="text-text-light text-xs sm:text-sm">
                      12 April
                    </p>
                  </div>
                </div>
                <div className="mt-1 flex gap-1 sm:mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-star size-4 sm:size-5" />
                  ))}
                </div>
              </div>

              {/* Review content */}
              <div className="mt-4">
                <h2 className="pb-2 text-sm font-medium sm:text-base md:text-lg">
                  This is incredible
                </h2>
                <p className="text-text-light text-xs leading-relaxed sm:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  numquam ab, aliquid cum eos impedit, provident tempora cumque
                  dicta nisi totam nostrum quam cupiditate, consequatur vel
                  nihil reiciendis optio facere.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
