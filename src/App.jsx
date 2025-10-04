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
      <Hero />
      <About />
      <Works />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
