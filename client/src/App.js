import Router from "./components/router/Router";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
