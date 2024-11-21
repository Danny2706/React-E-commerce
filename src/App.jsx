// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from "./components/Products";
import Tops from './components/Tops';
import AOS from 'aos';
import "aos/dist/aos.css";
import Winter from './components/Winter';
import Family from './components/Family';
import Witness from './components/Witness';
import Footer from './components/Footer';
import Popup from './components/Popup';
function App() {
  const [orderpopup, setOrderpopup] = React.useState
    // eslint-disable-next-line no-unexpected-multiline
    (false);
  
  const handleOrderpopup = () => {
    setOrderpopup(!orderpopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderpopup={handleOrderpopup} />
      <Home handleOrderpopup={handleOrderpopup} />
      <Products />
      <Tops handleOrderpopup={handleOrderpopup} />
      <Winter />
      <Family />
      <Witness />
      <Footer />
      <Popup orderpopup={orderpopup} setOrderpopup={setOrderpopup} />
    </div>
  );
}

export default App

