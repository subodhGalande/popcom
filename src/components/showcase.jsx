import { ArrowUpRight } from "lucide-react";

const Showcase = () => {
  return (
    <section className="mx-auto mt-32 max-w-6xl px-4 sm:px-8">
      <div className="bg-accent-gray flex flex-col justify-center rounded-2xl sm:flex-row sm:rounded-4xl lg:h-96">
        {/* text */}
        <div className="flex flex-col justify-center gap-y-6 px-8 pt-8 sm:w-1/2 lg:gap-8 lg:px-10 lg:pt-2">
          {" "}
          <h1 className="font-heading text-4xl font-bold">
            Exclusive
            <span className="text-primary"> Showcases</span>
          </h1>
          <p className="text-text-light text-sm lg:w-8/12 lg:text-base">
            Customization at your fingertips! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium aliquid distinctio,
            sapiente reprehenderit.
          </p>
          <button className="outline-button font-bold lg:px-14 lg:py-4">
            Full Catalog <ArrowUpRight className="float-right ml-3" />{" "}
          </button>
        </div>
        <div className="lg:mr-10 lg:h-96">
          <img
            className="hidden h-full w-full object-contain lg:block"
            src="/Showcase/showcase.png"
            alt=""
          />
          <img
            className="mt-10 h-full w-full py-6 sm:mt-0 lg:hidden"
            src="/Showcase/showcase-mobile.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
