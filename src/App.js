import React from "react";
import { AboutPage, HomePage, SkillsPage, PortfolioPage, ContactPage } from "./pages";
import Layout from "./Layout";

function App() {
  return (
    <div className={`bg-secondaryLight transition-all dark:bg-secondaryDark overflow-x-auto max-w-screen h-screen scroll-smooth snap-mandatory snap-x`}>
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