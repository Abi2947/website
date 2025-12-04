import { motion } from "motion/react";
import { Github, Linkedin, Mail, Terminal, Code2 } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  const codeLines = [
    "class ComputerEngineer {",
    "  constructor() {",
    '    this.name = "Utsab Gautam";',
    '    this.role = "Computer Engineer";',
    "    this.skills = [",
    '      "Machine Learning",',
    '      "Backend Development",',
    '      "Database Engineering"',
    "    ];",
    "  }",
    "}",
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeLines[currentLine] + "\n");
        setCurrentLine((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentLine]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#22d3ee" />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="50"
                stroke="#22d3ee"
                strokeWidth="0.5"
              />
              <line
                x1="50"
                y1="50"
                x2="50"
                y2="100"
                stroke="#22d3ee"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Terminal Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-emerald-400 font-mono text-sm"
            >
              <Terminal className="w-4 h-4" />
              <span>~/utsab-gautam</span>
              <span className="animate-pulse">▊</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <span className="block font-mono text-emerald-400 text-xl">
                const engineer = {`{`}
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent pl-8">
                name: "Utsab Gautam"
              </span>
              <span className="block font-mono text-emerald-400 text-xl">{`}`}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <Code2 className="w-5 h-5 text-cyan-400" />
              <h2 className="text-slate-300 font-mono">
                <span className="text-emerald-400">&lt;</span>
                Computer Engineer
                <span className="text-emerald-400">/&gt;</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs text-slate-500 font-mono ml-2">
                  engineer.bio
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-mono">
                <span className="text-emerald-400">// </span>
                Graduate from Sagarmatha Engineering College, TU. Specializing
                in Machine Learning, AI Development, Backend Engineering with
                Node.js, and Database Architecture.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/Abi2947"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-900/50 hover:bg-emerald-500/10 border border-slate-700 hover:border-emerald-500 rounded-lg transition-all duration-300 group flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                <span className="text-sm font-mono text-slate-400 group-hover:text-emerald-400 transition-colors">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/utsab-gautam/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-900/50 hover:bg-cyan-500/10 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all duration-300 group flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                  LinkedIn
                </span>
              </a>
              <a
                href="mailto:utsabgautam47@gmail.com"
                className="px-4 py-2 bg-slate-900/50 hover:bg-blue-500/10 border border-slate-700 hover:border-blue-500 rounded-lg transition-all duration-300 group flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm font-mono text-slate-400 group-hover:text-blue-400 transition-colors">
                  Email
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Code Editor Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="bg-slate-800/50 px-4 py-3 flex items-center justify-between border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs text-slate-500 font-mono">
                  engineer.ts
                </span>
                <div className="w-12" />
              </div>

              {/* Editor Content */}
              <div className="p-6 font-mono text-sm">
                <div className="flex gap-4">
                  {/* Line Numbers */}
                  <div className="text-slate-600 select-none">
                    {codeLines.map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>

                  {/* Code */}
                  <pre className="text-slate-300 flex-grow">
                    <code>
                      <span className="text-purple-400">class</span>{" "}
                      <span className="text-yellow-400">ComputerEngineer</span>{" "}
                      <span className="text-slate-400">{`{`}</span>
                      {"\n  "}
                      <span className="text-blue-400">constructor</span>
                      <span className="text-slate-400">{"() {"}</span>
                      {"\n    "}
                      <span className="text-cyan-400">this</span>.
                      <span className="text-slate-300">name</span> =
                      <span className="text-emerald-400"> "Utsab Gautam"</span>;
                      {"\n    "}
                      <span className="text-cyan-400">this</span>.
                      <span className="text-slate-300">role</span> =
                      <span className="text-emerald-400">
                        {" "}
                        "Computer Engineer"
                      </span>
                      ;{"\n    "}
                      <span className="text-cyan-400">this</span>.
                      <span className="text-slate-300">skills</span> = [
                      {"\n      "}
                      <span className="text-emerald-400">
                        "Machine Learning"
                      </span>
                      ,{"\n      "}
                      <span className="text-emerald-400">
                        "Backend Development"
                      </span>
                      ,{"\n      "}
                      <span className="text-emerald-400">
                        "Database Engineering"
                      </span>
                      {"\n    "}];
                      {"\n  "}
                      <span className="text-slate-400">{"}"}</span>
                      {"\n"}
                      <span className="text-slate-400">{"}"}</span>
                      {"\n"}
                      <span className="animate-pulse">▊</span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Status Bar */}
              <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between border-t border-slate-700 text-xs font-mono text-slate-500">
                <div className="flex items-center gap-4">
                  <span className="text-emerald-400">● TypeScript</span>
                  <span>UTF-8</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>Ln 10, Col 1</span>
                  <span>Spaces: 2</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-emerald-400 transition-colors group font-mono text-xs"
            aria-label="Scroll to about section"
          >
            <span className="uppercase tracking-wider">scroll --down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-emerald-400"
            >
              ▼
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
