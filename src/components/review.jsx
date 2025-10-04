import { Star } from "lucide-react";

const arr = [
  {
    src: "/review/avatar-1.jpg",
  },
  {
    src: "/review/avatar-2.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="mx-auto mt-32 max-w-6xl">
      {" "}
      <div>
        <div className="space-y-4">
          <h1 className="font-heading text-center text-5xl font-bold">
            Reviews
          </h1>
          <p className="text-text-light text-center font-medium">
            here is what our customers say about us.
          </p>
          <div className="bg-primary mx-auto h-[2px] w-24"></div>
        </div>
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <div className="bg-accent-gray mx-auto mt-16 h-86 w-7/12 rounded-4xl"></div>
        <div className="absolute top-23 flex h-96 w-9/12 gap-x-3">
          {" "}
          {arr.map((item, i) => (
            <div
              key={i}
              className="flex h-72 w-8/12 flex-col justify-around rounded-3xl bg-[#fff] p-8 shadow-2xl"
            >
              <div className="flex w-full justify-between">
                <div className="flex h-fit w-full items-center gap-x-2">
                  <div className="h-16 w-16 rounded-full">
                    <img src={item.src} alt="avatar" />
                  </div>
                  <div>
                    <h1 className="font-heading text-text-dark w-full font-bold">
                      Natneal
                    </h1>
                    <p className="text-text-light text-sm">12 April</p>
                  </div>
                </div>
                <div className="mt-2 flex gap-1">
                  <Star className="text-star" />
                  <Star className="text-star" />
                  <Star className="text-star" />
                  <Star className="text-star" />
                  <Star className="text-star" />
                </div>
              </div>
              <div>
                <h2 className="pb-2 font-medium">This is incredible</h2>
                <p className="text-xs">
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
