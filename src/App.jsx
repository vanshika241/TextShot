

import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { About } from "./components/About";
import TextForm from "./components/TextForm";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative text-white">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />

      {/* Navbar */}
      <Navbar title="TextShot" />

      {/* Pages container */}
      <div className="relative z-10 pt-24 px-4">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/features" element={<TextForm />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
