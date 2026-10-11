import React from 'react';

function Home() {
  return (
    <div className="relative mx-auto mt-8 max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-950/30 sm:mt-12">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]"></div>
      <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-violet-600/15 blur-[100px]"></div>

      <div className="relative grid items-center gap-10 px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-2 lg:px-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-wide text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
            INNOVATION STARTS HERE
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
            Welcome to
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              TechCorp
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-400 sm:text-lg">
            Leading provider of modern web and cloud solutions for enterprises worldwide.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/20">
              ⚡ Modern Web
            </div>
            <div className="rounded-xl border border-violet-400/20 bg-violet-400/10 px-4 py-3 text-sm font-semibold text-violet-300 transition duration-300 hover:-translate-y-1 hover:bg-violet-400/20">
              ☁️ Cloud Solutions
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 scale-90 rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-600/20 blur-3xl"></div>

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 sm:p-7">
            <div className="mb-7 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400"></span>
                <span className="h-3 w-3 rounded-full bg-amber-300"></span>
                <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
              </div>
              <span className="text-xs font-medium text-slate-500">techcorp.dev</span>
            </div>

            <div className="flex h-44 items-center justify-center rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-violet-500/20">
              <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] border border-cyan-300/30 bg-slate-900/80 text-6xl font-black text-cyan-300 shadow-2xl shadow-cyan-500/20 transition duration-500 hover:rotate-12">
                T<span className="text-violet-400">.</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-cyan-400/70 to-blue-500/20"></div>
              <div className="h-3 w-full rounded-full bg-white/10"></div>
              <div className="h-3 w-2/3 rounded-full bg-white/10"></div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                <p className="text-xl font-black text-cyan-300">Web</p>
                <p className="mt-1 text-[10px] text-slate-500">Development</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                <p className="text-xl font-black text-violet-300">Cloud</p>
                <p className="mt-1 text-[10px] text-slate-500">Engineering</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                <p className="text-xl font-black text-blue-300">AI</p>
                <p className="mt-1 text-[10px] text-slate-500">Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;