import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="site-container">
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
