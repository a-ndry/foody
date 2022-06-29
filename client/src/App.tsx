import "./App.css";
import "./assets/vendors/bootstrap-icons/bootstrap-icons.css";
import About from "./components/About/About";
import Chefs from "./components/Chefs/Chefs";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Openings from "./components/Openings/Openings";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Services />
      <Openings />
      <Menu />
      <Chefs />
    </div>
  );
}

export default App;
