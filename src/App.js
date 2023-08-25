import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ravi.css";
import "./Sukhvinder.css";
import "./Mayank.css";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
// or other themes
// import '@splidejs/react-splide/css/skyblue';
import "@splidejs/react-splide/css/sea-green";
import { Hero } from "./components/Hero";
import { ChooseUs } from "./components/ChooseUs";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Myfooter from "./components/Myfooter";
import Sec1 from "./components/Sec1";

function App() {
  return (
    <>
      <div className="overflow-hidden bg_body">
        <div className=" position-relative">
          <div className="nav_shadow position-absolute"></div>
          <Hero />
        </div>
        <Sec1 />
        <ChooseUs />
        <AboutUs />
        <Products />
        <Services />
        <ContactUs />
        <Myfooter />
      </div>
    </>
  );
}

export default App;
