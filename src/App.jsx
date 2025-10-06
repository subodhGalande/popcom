import Hero from "./components/hero";
import Navbar from "./components/navbar";
import TopSeller from "./components/topSeller";
import WhyChooseUs from "./components/whyChooseUs";
import Showcase from "./components/showcase";
import Products from "./components/products";
import Influencers from "./components/influencers";
import Reviews from "./components/review";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopSeller />
      <WhyChooseUs />
      <Showcase />
      <Products />
      {/* <Influencers />
      <Reviews />
      <Footer /> */}
    </>
  );
}

export default App;
