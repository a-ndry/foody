import "./App.css";
import About from "./components/About/About";
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
    </div>
  );
}

export default App;
