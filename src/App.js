import React from "react";

import { About, Header, Footer, Skills, Testimonial } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />

      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
