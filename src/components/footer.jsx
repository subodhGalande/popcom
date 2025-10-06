import { Facebook, Instagram, Twitter, Search } from "lucide-react";

const clothingProducts = [
  "Custom T-Shirts",
  "Sweatshirts",
  "Polo",
  "Tank",
  "Caps",
];

const help = ["fAQ", "Design tips", "Terms of use", "Privacy policy"];
const contact = ["+2512233445", " help@popcom.com", "address"];

const Footer = () => {
  return (
    <footer className="bg-accent-gray mt-32 p-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row md:flex-wrap md:gap-y-10 md:px-10 lg:gap-0 lg:px-0">
        {/* logo */}
        <div className="flex flex-col gap-y-8 text-center md:w-1/4 md:text-left">
          <div>
            <p className="font-heading text-xs font-bold">The</p>
            <h1 className="font-heading -mt-2 text-3xl font-bold">Store.</h1>
          </div>
          <div>
            <p>join our social media</p>
            <div className="mt-2 flex justify-center gap-x-2 md:justify-start">
              <Facebook className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
              <Twitter className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* links */}
        <div className="flex w-full flex-col justify-between gap-8 text-center md:w-2/4 md:flex-row md:justify-around md:text-left">
          <div className="flex flex-col gap-y-2">
            <h1>Products</h1>
            {clothingProducts.slice(0, 5).map((product, index) => (
              <a key={index} href="#" className="text-text-light text-sm">
                {product}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-y-2">
            <h1>Help</h1>
            {help.slice(0, 5).map((item, index) => (
              <a key={index} href="#" className="text-text-light text-sm">
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-y-2">
            <h1>Contact Us</h1>
            {contact.slice(0, 5).map((item, index) => (
              <a key={index} href="#" className="text-text-light text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* input */}
        <div className="flex flex-col items-center md:w-1/4 md:items-start lg:items-end">
          <p className="text-center text-sm md:text-left">
            you can subscribe to our newsletter
          </p>
          <div className="mt-2 flex h-10 w-44 max-w-[250px] sm:w-52 md:w-full">
            <input
              type="text"
              className="bg-text-light/40 w-full flex-1 px-2 text-[#fff]"
            />
            <button className="h-10 w-10">
              <Search className="bg-primary h-full w-10 p-2 text-[#fff]" />
            </button>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm">
        &copy; 2024 Popcom. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
