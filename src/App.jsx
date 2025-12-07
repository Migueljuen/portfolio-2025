import { Routes, Route } from "react-router-dom";

import "./App.css";
import Hero from "./sections/hero";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Works from "./sections/works";
import Footer from "./sections/footer";
import ProjectDetails from "./sections/project-details";

export default function App() {
  return (
    <>
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Sections */}
        <Routes>
          {/* Home page */}

          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Works />
              </>
            }
          />

          {/* Project details page */}
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>

        {/* Footer*/}
        <Footer />
      </div>
    </>
  );
}
