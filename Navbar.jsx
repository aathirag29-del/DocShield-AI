import React from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-[#07101f]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20">
            <ShieldCheck
              size={27}
              className="text-cyan-400"
            />
          </div>

          <div>
            <div className="text-lg font-bold tracking-tight text-white">
              DocShield AI
            </div>

            <div className="text-[9px] font-medium tracking-[0.22em] text-slate-500">
              IDENTITY INTELLIGENCE
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#features"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            How It Works
          </a>

          <a
            href="#supported-docs"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Supported Docs
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            About
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;