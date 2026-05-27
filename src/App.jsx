import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Hero from "./sections/hero";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Footer from "./sections/footer";
import ProjectDetails from "./sections/project-details";
import Credentials from "./sections/credentials";
import Mockups from "./sections/mockups";
import Featured from "./sections/featured";
import Graphics from "./sections/graphics";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
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
                <Featured />
                <Mockups />

                {/* <Testimonials /> */}
                <Graphics />
                <About />
                {/* <Credentials /> */}
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
