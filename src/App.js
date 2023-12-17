import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./sections/Home.jsx";

import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import LeftSideBar from "./components/LeftSideBar";

function App() {
  return (
    <>
      <div>
        <Header className="header" />
        <LeftSideBar />
        <div className="site-container">
          <Home />
          <Experience />
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
