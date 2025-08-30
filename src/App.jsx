import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Works from "./pages/Works";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";



const App = () => {
  return (
    <div className="min-h-screen">
       <Navbar />
       <main>
        <Home/>
        <About/>
        <Skills />
        <Works />
        <Contact/>
       </main>
        <Footer/>
    </div>
  );
};

export default App;
