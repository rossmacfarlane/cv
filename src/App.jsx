import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AICredit from './components/AICredit';
import { initScrollReveal } from './utils/animations';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize scroll reveal animations
    initScrollReveal();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <AICredit />
    </div>
  );
}

export default App;
