import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Timeline } from './components/Timeline';
import { Team } from './components/Team';
import { OptiVerse } from './components/OptiVerse';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#0c161d] selection:bg-[#38a8ff]/25 selection:text-[#0c161d]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Timeline />
        <Team />
        <OptiVerse />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
