import "./App.css";
import "./assets/vendors/bootstrap-icons/bootstrap-icons.css";
import About from "./components/About/About";
import Chefs from "./components/Chefs/Chefs";
import Contact from "./components/Contact/Contact";
import Copyright from "./components/Copyright/Copyright";
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
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
