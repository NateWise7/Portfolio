import Nav from "../components/navigation/Nav";
import Home from "../components/homepage/Home";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact"


function App() {
  return (
    <>
    <div id="Home"></div>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
