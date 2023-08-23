import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ravi.css";
import "./Sukhvinder.css";
import "./Mayank.css";
import MyNav from "./components/MyNav";
import ContactUs from './components/ContactUs';
import Services from './components/Services';
// or other themes
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import Products from "./components/Products";

function App() {
  return (
    <>
      <div className='overflow-hidden bg_body'>
        <MyNav/>
        <ContactUs />
        <Services/>
      <Products />
      </div>
     
    </>
  );
}
export default App;
