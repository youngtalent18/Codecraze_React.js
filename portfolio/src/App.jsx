import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Clients />
      <Footer />
    </div>
  );
}

export default App
