import { Facebook, Instagram, Twitter } from "lucide-react";
import { Search } from "lucide-react";

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
      <div className="flex">
        {/* logo */}
        <div className="flex flex-col gap-y-8">
          <div>
            <p className="font-heading text-xs font-bold">The</p>
            <h1 className="font-heading -mt-2 text-3xl font-bold">Store.</h1>
          </div>
          <div>
            <p>join our social media</p>
            <div className="mt-2 flex gap-x-2">
              <Facebook className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
              <Twitter className="h-5 w-5" />
            </div>
          </div>
        </div>
        {/* links */}
        <div className="ml-20 flex w-8/12 justify-around">
          <div className="flex flex-col gap-y-2">
            <h1>Products</h1>
            {clothingProducts.slice(0, 5).map((product, index) => (
              <a key={index} href="#">
                {product}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-y-2">
            <h1>Help</h1>
            {help.slice(0, 5).map((item, index) => (
              <a key={index} href="#">
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-y-2">
            <h1>Contact Us</h1>
            {contact.slice(0, 5).map((item, index) => (
              <a key={index} href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
        {/* input */}
        <div>
          <p className="text-sm">you can subscribe to our newsletter</p>
          <div className="mt-2 flex h-10 w-20">
            <input type="text" className="bg-text-light/40" />
            <button className="h-10 w-10">
              <Search className="bg-primary h-full w-10 p-2 text-[#fff]" />
            </button>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-sm">
        {" "}
        &copy; 2024 Popcom. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
