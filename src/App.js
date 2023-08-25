import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ravi.css";
import "./Sukhvinder.css";
import "./Mayank.css";
import Products from "./components/Products";
import Myfooter from "./components/Myfooter";
import Sec1 from "./components/Sec1";
import AboutUs from "./components/AboutUs";
import Faqs from "./components/Faqs";

function App() {
  return (
    <>
      <Sec1/>
      <Products />
      <Myfooter />
      <Faqs/>
    </>
  );
}

export default App;
