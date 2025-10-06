import { ArrowUpRight } from "lucide-react";

const Showcase = () => {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-4 sm:mt-10 sm:px-8">
      <div className="bg-accent-gray flex flex-col justify-center rounded-2xl sm:h-96 sm:flex-row sm:rounded-4xl">
        {/* text */}
        <div className="flex flex-col justify-center gap-y-6 px-8 pt-10 sm:w-1/2 sm:gap-8 sm:px-10">
          {" "}
          <h1 className="font-heading text-4xl font-bold">
            Exclusive
            <span className="text-primary"> Showcases</span>
          </h1>
          <p className="text-sm sm:w-8/12 sm:text-base">
            Customization at your fingertips! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium aliquid distinctio,
            sapiente reprehenderit.
          </p>
          <button className="outline-button font-bold sm:px-14 sm:py-4">
            Full Catalog <ArrowUpRight className="float-right ml-3" />{" "}
          </button>
        </div>
        <div className="sm:mr-10 sm:h-96">
          <img
            className="hidden h-full w-full sm:block"
            src="/Showcase/showcase.png"
            alt=""
          />
          <img
            className="mt-10 h-full w-full py-6 sm:hidden"
            src="/Showcase/showcase-mobile.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
