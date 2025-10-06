import { useState } from "react";

import "./App.css";
import Hero from "./sections/hero";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Works from "./sections/works";
import Footer from "./sections/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="./src/assets/images/bg3.svg"
        alt=""
      />
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <Hero />
        <About />
        <Works />

        <Navbar />
        <Footer />
      </div>
    </>
  );
}

export default App;
