import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 px-4 py-4 text-white shadow-xl shadow-black/20 backdrop-blur-xl sm:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-600 text-xl font-black text-white shadow-lg shadow-cyan-500/20 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
            T
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight sm:text-xl">
              TechCorp<span className="text-cyan-400">.</span>
            </h1>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-400 sm:text-[10px]">
              Solutions
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1 sm:gap-2">
          <Link to="/" className="rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-300 sm:px-5 sm:text-sm">
            Home
          </Link>
          <Link to="/about" className="rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-300 sm:px-5 sm:text-sm">
            About Us
          </Link>
          <Link to="/contact" className="rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-300 sm:px-5 sm:text-sm">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;