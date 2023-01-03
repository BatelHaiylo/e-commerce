import Router from "./components/router/Routers";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
// import CartMenu from "./components/cart/CartMenu"; 

export default function App() {
  return (
    <div className="app">
      <Navbar/>
      <Router/>
      {/* <CartMenu/> */}
      <Footer/>
    </div>
  );
};