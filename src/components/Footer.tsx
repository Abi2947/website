import { motion } from "motion/react";
import { Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="py-8 relative z-10">
        {/* Scrolling Terminal Text */}
        <div className="overflow-hidden whitespace-nowrap mb-8">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="inline-block"
          >
            <span className="inline-block px-8 text-emerald-500/30 text-sm font-mono">
              $ npm run build && npm start // Computer Engineer → Software
              Developer → Backend Developer → Machine Learning Engineer → Full
              Stack Developer → AI Researcher → Database Architect → System
              Designer → $ npm run build && npm start // Computer Engineer →
              Software Developer → Backend Developer → Machine Learning Engineer
              → Full Stack Developer → AI Researcher → Database Architect →
              System Designer →
            </span>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <span className="font-mono text-emerald-400">
                  utsab@portfolio
                </span>
              </div>
              <p className="text-slate-500 text-sm font-mono">
                <span className="text-emerald-400">//</span> Building innovative
                solutions
                <br />
                <span className="text-emerald-400">//</span> One commit at a
                time
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-slate-300 font-mono mb-4">
                <span className="text-emerald-400">const</span> quickLinks = [
              </h4>
              <div className="space-y-2 pl-4">
                {["About", "Education", "Projects", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-slate-500 hover:text-emerald-400 transition-colors text-sm font-mono"
                  >
                    <span className="text-emerald-400">▸</span> {link}
                  </a>
                ))}
              </div>
              <p className="text-slate-500 font-mono text-sm mt-2">]</p>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-slate-300 font-mono mb-4">
                <span className="text-cyan-400">function</span> connect()
              </h4>
              <div className="space-y-2 pl-4">
                {[
                  { name: "GitHub", url: "https://github.com/Abi2947" },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/utsab-gautam/",
                  },
                  { name: "Email", url: "mailto:utsabgautam47@gmail.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={
                      social.url.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block text-slate-500 hover:text-cyan-400 transition-colors text-sm font-mono"
                  >
                    <span className="text-cyan-400">→</span> {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm font-mono">
                <span className="text-emerald-400">©</span> {currentYear} Utsab
                Gautam
                <span className="text-slate-600 mx-2">|</span>
                <span className="text-slate-600">
                  Built with React + TypeScript
                </span>
              </p>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
                <span className="text-emerald-400">●</span>
                <span>Status: Online</span>
                <span className="text-slate-600 mx-2">|</span>
                <span className="text-emerald-400">v1.0.3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Cursor Effect */}
      <div className="absolute bottom-4 right-6">
        <span className="text-emerald-400 font-mono animate-pulse">▊</span>
      </div>
    </footer>
  );
}
