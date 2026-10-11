import React from 'react';

function Contact() {
  return (
    <div className="relative mx-auto mt-8 max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-7 shadow-2xl shadow-cyan-950/20 sm:mt-12 sm:p-12">
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]"></div>

      <div className="relative">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-widest text-cyan-300">
          WE'RE HERE TO HELP
        </div>

        <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
          Contact <span className="text-cyan-400">Support</span>
        </h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
          Have a question? Get in touch with our support team using the contact details below.
        </p>

        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          <a href="mailto:support@techcorp.com" className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:shadow-xl hover:shadow-cyan-950/20">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-3xl transition duration-300 group-hover:scale-110">
              ✉️
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Email Us</p>
            <p className="mt-2 break-all text-base font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-lg">
              support@techcorp.com
            </p>
            <p className="mt-3 text-sm text-slate-500">Send us your questions anytime.</p>
          </a>

          <a href="tel:+919876543210" className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-violet-400/[0.05] hover:shadow-xl hover:shadow-violet-950/20">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10 text-3xl transition duration-300 group-hover:scale-110">
              📞
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">Call Support</p>
            <p className="mt-2 text-lg font-bold text-white transition-colors group-hover:text-violet-300">
              +91 98765 43210
            </p>
            <p className="mt-3 text-sm text-slate-500">Connect with our support team.</p>
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-xl">✓</div>
          <div>
            <p className="font-bold text-emerald-300">We're ready to assist</p>
            <p className="mt-1 text-sm text-slate-400">Reach out through email or phone for support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;