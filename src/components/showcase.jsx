import { ArrowUpRight } from "lucide-react";

const Showcase = () => {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-8">
      <div className="bg-accent-gray flex h-96 justify-center rounded-4xl">
        {/* text */}
        <div className="flex w-1/2 flex-col justify-center gap-8 px-10">
          {" "}
          <h1 className="font-heading text-4xl font-bold">
            Exclusive
            <span className="text-primary"> Showcases</span>
          </h1>
          <p className="w-8/12">
            Customization at your fingertips! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium aliquid distinctio,
            sapiente reprehenderit.
          </p>
          <button className="outline-button px-14 py-4 font-bold">
            Full Catalog <ArrowUpRight className="float-right ml-3" />{" "}
          </button>
        </div>
        <div className="mr-10 h-96">
          <img className="h-full w-full" src="/Showcase/showcase.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
