
import Nav from "../components/navigation/Nav";
import Home from "../components/homepage/Home";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import MatrixRain from "../components/effects/matrixRainEffect/MatrixRain";


function App() {
  return (
    <>
    <MatrixRain />
    <div id="Home"></div>
      <Nav />
      <br />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
