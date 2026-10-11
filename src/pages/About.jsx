import React from 'react';

function About() {
  return (
    <div className="relative mx-auto mt-8 max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-7 shadow-2xl shadow-violet-950/20 sm:mt-12 sm:p-12">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]"></div>

      <div className="relative">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold tracking-widest text-violet-300">
          OUR STORY
        </div>

        <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
          About Our <span className="text-violet-400">Company</span>
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          Established in 2020, TechCorp specializes in React, Node.js, and cloud application engineering.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl transition duration-300 group-hover:scale-110">💻</div>
            <h3 className="text-lg font-bold text-white">Web Development</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Modern applications powered by React and Node.js.</p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-violet-400/[0.05]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 text-2xl transition duration-300 group-hover:scale-110">☁️</div>
            <h3 className="text-lg font-bold text-white">Cloud Engineering</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Scalable cloud application engineering for businesses.</p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-blue-400/[0.05]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-2xl transition duration-300 group-hover:scale-110">🚀</div>
            <h3 className="text-lg font-bold text-white">Innovation</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">Technology solutions designed for modern enterprises.</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-6">
          <p className="text-sm font-semibold leading-7 text-slate-300 sm:text-base">
            Building modern digital experiences through powerful technologies, creative thinking, and reliable engineering.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;