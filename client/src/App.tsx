import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Services />
    </div>
  );
}

export default App;
