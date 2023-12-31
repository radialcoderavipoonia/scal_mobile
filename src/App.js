import "./App.css";
import Aos from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/ContactUs";
import "@splidejs/react-splide/css/sea-green";
import { Hero } from "./components/Hero";
import { ChooseUs } from "./components/ChooseUs";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Myfooter from "./components/Myfooter";
import Services from "./components/Services";
import Sec1 from "./components/Sec1";
import Faqs from "./components/Faqs";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop"
import "aos/dist/aos.css";
function App() {
  Aos.init({
    once: true,
    disable: "mobile",
  });
  return (
    <>
      <BackToTop/>
      <Preloader />
      <div className="overflow-hidden bg_body">
        <div className=" position-relative line_back">
          <div className="nav_shadow position-absolute scale_animation"></div>
          <Hero />
        </div>
        <Sec1 />
        <ChooseUs />
        <AboutUs />
        <Products />
        <Services />
        <Faqs />
        <ContactUs />
        <Myfooter />
      </div>
    </>
  );
}

export default App;
