import { useState } from "react";

import "./App.css";
import Hero from "./pages/hero";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Works from "./pages/works";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <About />
      <Works />
      <Navbar />
    </>
  );
}

export default App;
