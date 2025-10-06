const WhyChooseUs = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:mt-16 sm:px-8 lg:mt-40">
      {/* section 1 */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:h-[400px]">
        {/* image */}
        <div className="">
          <img
            className="h-full object-cover"
            src="/why-choose-us/why-1.jpg"
            alt="four-models-standing"
          />
        </div>
        {/* text content */}
        <div className="bg-accent-gray h-full rounded-4xl p-8">
          <div className="">
            <h1 className="font-heading mb-4 text-4xl font-bold sm:text-5xl">
              Why <span className="text-primary">choose us ?</span>
            </h1>
            <p className="text-dark text-sm opacity-70">
              we do not divide our collection to seasons we create new models
              every week and we in a few items we do not divide our collection
              to seasons we create new models every week and we in a few items
            </p>
          </div>
          <div className="mt-6 flex flex-col justify-between gap-y-4 sm:gap-y-8">
            <div className="border-b-2 border-[#c4c4c4] pb-4 sm:pb-6">
              <h2 className="font-medium">Quality product</h2>
            </div>
            <div className="border-b-2 border-[#c4c4c4] pb-4 sm:pb-6">
              <h2 className="font-medium">Quality product</h2>
            </div>
            <div className="">
              <h2 className="font-medium">Quality product</h2>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="mt-4 grid grid-cols-2 grid-rows-2 gap-4 lg:max-w-6xl lg:grid-cols-9 lg:grid-rows-1 lg:gap-6">
        <div className="bg-primary-light col-span-1 flex rounded-2xl p-4 sm:rounded-4xl sm:px-6 sm:py-6 md:col-span-1 lg:col-span-2">
          <div className="flex flex-col justify-between gap-4">
            <h1 className="text-base">100% authentic Product</h1>
            <p className="text-xs">
              prominently display a clear 100% Authentic Guarantee on your
              product
            </p>
            <button className="outline-button self-end text-xs">
              see more
            </button>
          </div>
        </div>
        <div className="bg-accent-gray flex rounded-2xl p-4 sm:px-6 sm:py-6 md:col-span-1 lg:col-span-2 lg:rounded-4xl">
          {" "}
          <div className="flex flex-col justify-between gap-4">
            <h1 className="text-base">Free and Easy Return</h1>
            <p className="text-xs">
              prominently display a clear 100% Authentic Guarantee on your
              product
            </p>
            <button className="outline-button self-end text-xs">
              see more
            </button>
          </div>
        </div>
        <div className="bg-accent-gray flex rounded-2xl p-4 sm:rounded-4xl sm:px-6 sm:py-6 md:col-span-1 lg:col-span-2">
          {" "}
          <div className="flex flex-col justify-between gap-4">
            <h1 className="text-base">Safe Payments</h1>
            <p className="text-xs">
              prominently display a clear 100% Authentic Guarantee on your
              product
            </p>
            <button className="outline-button self-end text-xs">
              see more
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl sm:rounded-4xl md:col-span-1 lg:col-span-3">
          <img
            className="h-full w-full rounded-2xl object-cover sm:aspect-video"
            src="/why-choose-us/why-2.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
