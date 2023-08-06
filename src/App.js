import React from "react";
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div id='app-container' className="bg-secondaryLight transition-all dark:bg-secondaryDark dark:duration-modeSwitchDuration ease-in-out">
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;