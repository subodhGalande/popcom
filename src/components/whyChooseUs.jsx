const WhyChooseUs = () => {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-8 py-24">
      {/* section 1 */}
      <div className="grid h-[400px] grid-cols-2 gap-6">
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
          <div className="mt-6 flex flex-col justify-between gap-y-8">
            <div className="border-b-2 border-[#c4c4c4] pb-6">
              <h2 className="font-medium">Quality product</h2>
            </div>
            <div className="border-b-2 border-[#c4c4c4] pb-6">
              <h2 className="font-medium">Quality product</h2>
            </div>
            <div className="">
              <h2 className="font-medium">Quality product</h2>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="mt-8 gap-6 sm:grid sm:max-h-48 sm:max-w-6xl sm:grid-cols-9">
        <div className="bg-primary-light col-span-2 flex rounded-4xl sm:px-6 sm:py-6">
          <div className="flex flex-col justify-between gap-4">
            <h1 className="">100% authentic Product</h1>
            <p className="text-xs">
              prominently display a clear 100% Authentic Guarantee on your
              product
            </p>
            <button className="outline-button self-end text-xs">
              see more
            </button>
          </div>
        </div>
        <div className="bg-accent-gray col-span-2 flex rounded-4xl sm:px-6 sm:py-6">
          {" "}
          <div className="flex flex-col justify-between gap-4">
            <h1 className="">Free and Easy Return</h1>
            <p className="text-xs">
              prominently display a clear 100% Authentic Guarantee on your
              product
            </p>
            <button className="outline-button self-end text-xs">
              see more
            </button>
          </div>
        </div>
        <div className="bg-accent-gray col-span-2 flex rounded-4xl sm:px-6 sm:py-6">
          {" "}
          <div className="flex flex-col justify-between gap-4">
            <h1 className="">Safe Payments</h1>
            <p className="text-xs">
              prominently display a clear 100% Authentic Guarantee on your
              product
            </p>
            <button className="outline-button self-end text-xs">
              see more
            </button>
          </div>
        </div>
        <div className="bg-accent-gray col-span-3 h-full w-full overflow-hidden rounded-4xl">
          <img
            className="aspect-video h-full w-full object-cover"
            src="/why-choose-us/why-2.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
