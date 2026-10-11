import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[120px]"></div>
      <div className="pointer-events-none fixed bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/[0.07] blur-[120px]"></div>

      <Navbar />

      <main className="relative min-h-[calc(100vh-160px)] px-4 pb-16 sm:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/70 px-4 py-6 text-center">
        <p className="text-sm font-semibold text-slate-300">
          TechCorp<span className="text-cyan-400">.</span> Solutions
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Modern Web &amp; Cloud Solutions · © 2026
        </p>
      </footer>
    </div>
  );
}

export default App;