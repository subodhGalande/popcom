import { ArrowLeft, ArrowRight } from "lucide-react";

const TopSeller = () => {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-8">
      {/* text section */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
        {/* left */}
        <div>
          <div className="outline-button text-xs sm:text-sm">
            See more products
          </div>
          <h1 className="font-heading mt-4 text-4xl font-bold sm:text-5xl">
            <span className="text-primary">Top</span> selling Product <br /> of
            the <span className="text-primary">month</span> Collection{" "}
          </h1>
        </div>
        {/* right */}
        <div className="flex flex-col items-start justify-between gap-y-4 sm:gap-6">
          <p>
            we do not divide our collection to seasons <br /> we create new{" "}
            <span className="text-primary">models every week</span> and we{" "}
            <br /> in a few items{" "}
          </p>
          <div className="outline-button text-sm sm:text-base">Shop Now</div>
        </div>
      </div>

      {/* image section */}
      <div className="mt-12 h-96">
        <div className="relative grid w-full grid-cols-2 items-end gap-4 sm:grid-cols-4 sm:gap-4">
          {/* arrows */}
          {/* <div className="bg-accent-gray absolute top-14 right-0 flex w-fit gap-x-2 rounded-full p-1">
            <div className="rounded-full bg-[#ffffff] p-2">
              <ArrowLeft className="h-3 w-3" />
            </div>
            <div className="rounded-full bg-[#ffffff] p-2">
              <ArrowRight className="h-3 w-3" />
            </div>
          </div> */}
          {/* images */}
          <div className="mb-4 flex flex-col sm:mb-0">
            <img
              src="/top-seller/hoodie-2.jpg"
              className="h-72 object-cover"
              alt="product-hoodie"
            />
            <div className="mt-3 flex justify-between px-1 font-medium">
              <p className="text-sm sm:text-base">Men Hoodie</p>
              <p className="text-sm sm:text-base">1200 ETB</p>
            </div>
          </div>
          <div className="mb-4 flex flex-col sm:mb-0">
            <img
              src="/top-seller/hoodie-3.jpg"
              className="h-full w-full object-cover"
              alt="product-hoodie"
            />
            <div className="mt-3 flex justify-between px-1 font-medium">
              <p className="text-sm sm:text-base">Men Hoodie</p>
              <p className="text-sm sm:text-base">1200 ETB</p>
            </div>
          </div>
          <div className="mb-4 hidden flex-col sm:mb-0 sm:flex">
            <img
              src="/top-seller/hoodie-1.jpg"
              className="h-72 w-full object-cover"
              alt="product-hoodie"
            />
            <div className="mt-3 flex justify-between px-1 font-medium">
              <p>Men Hoodie</p>
              <p>1200 ETB</p>
            </div>
          </div>
          <div className="hidden flex-col sm:flex">
            <img
              src="/top-seller/hoodie-4.jpg"
              className="h-64 w-full object-cover"
              alt="product-hoodie"
            />
            <div className="mt-3 flex justify-between px-1 font-medium">
              <p>Men Hoodie</p>
              <p>1200 ETB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSeller;
