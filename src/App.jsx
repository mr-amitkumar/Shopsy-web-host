import Navbar from "./components/Navabr/Navbar";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Suscribe from "./components/Suscribe/Suscribe";
const App = () => {

useEffect(()=>{
  AOS.init({
    offset:100,
    duration:800,
    easing:"ease-in-sine",
    delay:100,
  });
  AOS.refresh();
},[]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <TopProducts />
      <Banner />
      <Suscribe />
    </div>
  );
};

export default App;