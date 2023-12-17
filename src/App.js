import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./sections/Home.jsx";

import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import LeftSideBar from "./components/LeftSideBar";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poligon",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
