import Arrow from "/arrow.svg";

const Hero = () => {
  return (
    <section className="mx-auto px-8 sm:max-w-6xl">
      <article className="flex flex-col sm:mt-20">
        <div className="relative text-left md:max-w-1/2">
          <h1 className="font-extrabold sm:text-6xl/16">
            <span className="text-primary text-6xl">Design</span>{" "}
            <span className="relative inline-block">
              your
              <img
                className="absolute -top-10 -right-12"
                width="50px"
                src={Arrow}
                alt="arrow"
              />
            </span>{" "}
            <br /> dream wardrobe <br /> with precision
          </h1>
        </div>
        <div>
          <div className="mx-w-4xl mt-10 grid h-80 grid-cols-4 gap-6">
            {/* First image  */}
            <div className="col-span-2 overflow-hidden">
              <img
                src="/hero/hero-1.jpg"
                alt="hero-image"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Second image */}
            <div className="overflow-hidden">
              <img
                src="/hero/hero-2.jpg"
                alt="hero-image"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Third image  */}
            <div className="overflow-hidden">
              <img
                src="/hero/hero-3.jpg"
                alt="hero-image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="bg-accent-gray flex h-1 w-full items-center rounded-full">
            {" "}
            <div className="bg-primary h-1.5 w-1/3 rounded-full"></div>{" "}
          </div>
          <div className="outline-accent-gray min-w-fit rounded-full px-4 py-2 outline-3">
            <p className="text-lg/tighter font-sans font-medium">
              Featured Celebrity
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
