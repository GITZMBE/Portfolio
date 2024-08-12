import React from "react";
import { AboutPage, HomePage, SkillsPage, PortfolioPage, ContactPage } from "./pages";
import Layout from "./Layout";

function App() {
  return (
    <div className={`bg-secondaryLight transition-all dark:bg-secondaryDark dark:duration-modeSwitchDuration ease-in-out`}>
      <Layout>
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <PortfolioPage />
        <ContactPage />
      </Layout>
    </div>
  );
}

export default App;