import Arrow from "/arrow.svg";

const Hero = () => {
  return (
    <section className="mx-auto px-4 sm:max-w-6xl sm:px-8">
      <article className="mt-20 flex flex-col">
        <div className="relative text-left md:max-w-1/2">
          <h1 className="text-4xl font-extrabold sm:text-6xl/16">
            <span className="text-primary text-4xl sm:text-6xl">Design</span>{" "}
            <span className="relative inline-block">
              your
              <img
                className="absolute -top-7 -right-37 sm:-top-8 sm:-right-8"
                width="40px"
                src={Arrow}
                alt="arrow"
              />
            </span>{" "}
            <br className="hidden sm:block" /> dream wardrobe{" "}
            <br className="hidden sm:block" /> with precision
          </h1>
        </div>
        <div>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:h-80 sm:grid-cols-4 sm:gap-6">
            {/* First image  */}
            <div className="col-span-2 overflow-hidden sm:col-span-2">
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
        <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-2">
          <div className="bg-accent-gray flex h-1 w-full items-center rounded-full">
            {" "}
            <div className="bg-primary h-1.5 w-1/3 rounded-full"></div>{" "}
          </div>
          <div className="outline-accent-gray min-w-fit rounded-full px-3 py-1.5 outline-2 sm:px-4 sm:py-2 sm:outline-3">
            <p className="sm:text-lg/tighter font-sans text-sm font-medium sm:text-base">
              Featured Celebrity
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
