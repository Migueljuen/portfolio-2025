import { Routes, Route } from "react-router-dom";

import "./App.css";
import Hero from "./sections/hero";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Credentials from "./sections/credentials";
import Footer from "./sections/footer";
import Mockups from "./sections/mockups";
import Process from "./sections/process";
import ProjectDetails from "./sections/project-details";

export default function App() {
  return (
    <>
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4  ">
        {/* Main Sections */}
        <Routes>
          {/* Home page */}

          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Mockups />
                {/* <Process/> */}
                <Credentials />
                <About />

                {/* <Works /> */}
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
