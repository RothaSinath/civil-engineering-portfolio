import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Coursework from './components/Coursework';
import CareerObjective from './components/CareerObjective';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-textPrimary">
      {/* 1. Navigation bar */}
      <Navbar />

      {/* Main Single-Page Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero section */}
        <Hero />

        {/* 3. Featured engineering projects */}
        <Projects />

        {/* 4. About me */}
        <About />

        {/* 5. Technical skills */}
        <Skills />

        {/* 6. Education */}
        <Education />

        {/* 7. Practical Training & Experience */}
        <Experience />

        {/* 8. Relevant coursework */}
        <Coursework />

        {/* 9. Career objective */}
        <CareerObjective />

        {/* 10. Contact section */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
