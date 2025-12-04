import { motion } from "motion/react";
import { Code, Monitor, Database, Brain, Camera, Terminal } from "lucide-react";
import { useState } from "react";

export function About() {
  const [activeSkill, setActiveSkill] = useState(0);

  const skills = [
    {
      icon: Code,
      label: "Web Developer",
      color: "emerald",
      code: "skills.webDev()",
      stack: ["React", "Node.js", "TypeScript"],
    },
    {
      icon: Monitor,
      label: "Frontend Developer",
      color: "cayn",
      code: "skills.frontend()",
      stack: ["React", "Tailwindcss", "Axios", "React Router"],
    },
    {
      icon: Database,
      label: "Backend Developer",
      color: "cyan",
      code: "skills.backend()",
      stack: ["Express", "MongoDB", "PostgreSQL"],
    },
    {
      icon: Camera,
      label: "Photography",
      color: "purple",
      code: "skills.creative()",
      stack: ["Composition", "Editing", "Storytelling"],
    },
    {
      icon: Brain,
      label: "Machine Learning",
      color: "blue",
      code: "skills.ai()",
      stack: ["TensorFlow", "PyTorch", "Computer Vision"],
    },
  ];

  const techStack = {
    languages: ["JavaScript", "TypeScript", "Python", "C++"],
    frameworks: ["React", "Node.js", "Express", "TensorFlow"],
    databases: ["MongoDB", "PostgreSQL"],
    tools: ["Git", "Docker", "VS Code", "Linux"],
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 tracking-wider uppercase text-sm font-mono">
              cat about.md
            </span>
          </div>
          <h2 className="mt-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent font-mono">
              {"<About />"}
            </span>
          </h2>
        </motion.div>

        {/* Biography Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs text-slate-500 font-mono ml-2">
                README.md
              </span>
            </div>

            {/* Content */}
            <div className="p-8 font-mono text-sm">
              <p className="text-emerald-400 mb-4"># Biography</p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Hi there! My name is **Utsab Gautam** and I'm passionate about
                traveling, Extreme Sports, Exploration, Cultural Immersion, Solo
                Travel, Exploratory Learning.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                My field of expertise includes `Machine Learning`, `AI
                Development`, `Backend Development` using Node.js, and `Database
                Engineering`.
              </p>
              <p className="text-slate-300 leading-relaxed">
                I have worked on various projects ranging from simple
                recommendation systems to complex projects like the **"Nepali
                Hand Sign Recognition System"**.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-center mb-8 text-slate-200 font-mono">
            <span className="text-emerald-400">const</span> techStack = {"{"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg p-6 hover:border-emerald-500/30 transition-all"
              >
                <h4 className="text-cyan-400 font-mono text-sm mb-4">
                  {category}:
                </h4>
                <div className="space-y-2">
                  {items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 font-mono text-sm"
                    >
                      <span className="text-emerald-400">▸</span>
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-8 text-slate-200 font-mono">{"}"}</p>
        </motion.div>

        {/* Skills & Interest */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 text-slate-200 font-mono"
          >
            <span className="text-purple-400">interface</span>{" "}
            <span className="text-yellow-400">Skills</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isActive = activeSkill === index;
              return (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  onHoverStart={() => setActiveSkill(index)}
                  className="group cursor-pointer"
                >
                  <div
                    className={`bg-slate-900/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 h-full ${
                      isActive
                        ? "border-emerald-500 shadow-lg shadow-emerald-500/20"
                        : "border-slate-800 hover:border-emerald-500/50"
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      {/* Icon */}
                      <div
                        className={`p-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-emerald-500/20"
                            : "bg-slate-800/50 group-hover:bg-emerald-500/10"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 transition-colors ${
                            isActive ? "text-emerald-400" : "text-cyan-400"
                          }`}
                        />
                      </div>

                      {/* Label */}
                      <div>
                        <p className="text-slate-200 uppercase tracking-wider text-sm mb-2">
                          {skill.label}
                        </p>
                        <p className="text-emerald-400 font-mono text-xs mb-3">
                          {skill.code}
                        </p>

                        {/* Stack */}
                        <div className="space-y-1">
                          {skill.stack.map((tech, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="text-slate-600">{">"}</span>
                              <span className="text-slate-400 text-xs font-mono">
                                {tech}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
