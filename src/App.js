import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './Ravi.css'
import './Sukhvinder.css'
import './Mayank.css'
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <div className='overflow-hidden bg_body'>
        <ContactUs />
      </div>
    </>
  );
}

export default App;
