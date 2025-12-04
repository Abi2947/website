import { motion } from "motion/react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export function Education() {
  const educationData = [
    {
      degree: "High School Degree (10 +2)",
      institution: "Paramount Boarding Higher Secondary School",
      field: "Science",
      year: "2017-2019",
      description: "Foundation in Mathematics, Physics, and Computer Science",
    },
    {
      degree: "Bachelor Degree",
      institution: "Tribhuvan University",
      field: "Computer Engineering Bachelor",
      year: "2019-2024",
      description:
        "Specialized in Software Development, AI/ML, and Database Systems",
    },
  ];

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 tracking-wider uppercase text-sm font-mono">
              ls -la education/
            </span>
          </div>
          <h2>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent font-mono">
              {"Education[]"}
            </span>
          </h2>
          <p className="text-slate-400 mt-4 font-mono text-sm">
            <span className="text-emerald-400">//</span> Academic Journey: 2017
            - 2024
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-emerald-400 font-mono">{"/**"}</span>
            </div>
            <p className="text-slate-300 leading-relaxed font-mono text-sm pl-4">
              * Graduate from Sagarmatha Engineering College, affiliated with
              <br />
              * Tribhuvan University. My journey in the world of technology
              <br />
              * began with a deep curiosity about how things work, which led
              <br />
              * me to pursue Computer Engineering. Throughout my academic
              <br />
              * journey, I've gained valuable knowledge in software development,
              <br />* hardware design, AI/ML, and database systems.
            </p>
            <div className="flex items-start gap-3 mt-4">
              <span className="text-emerald-400 font-mono">{"*/"}</span>
            </div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-emerald-500/50 rounded-xl overflow-hidden transition-all duration-300 group">
                  {/* Header Bar */}
                  <div className="bg-slate-800/50 px-6 py-3 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-xs text-slate-500 font-mono">
                        education_{index + 1}.json
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0 p-3 bg-slate-800/50 group-hover:bg-emerald-500/10 rounded-lg transition-colors">
                        <GraduationCap className="w-8 h-8 text-emerald-400" />
                      </div>

                      {/* Details */}
                      <div className="flex-grow font-mono text-sm">
                        <p className="text-slate-500 mb-2">{"{"}</p>
                        <div className="pl-4 space-y-2">
                          <p className="text-slate-300">
                            <span className="text-cyan-400">"degree"</span>:{" "}
                            <span className="text-emerald-400">
                              "{edu.degree}"
                            </span>
                            ,
                          </p>
                          <p className="text-slate-300">
                            <span className="text-cyan-400">"institution"</span>
                            :{" "}
                            <span className="text-emerald-400">
                              "{edu.institution}"
                            </span>
                            ,
                          </p>
                          <p className="text-slate-300">
                            <span className="text-cyan-400">"field"</span>:{" "}
                            <span className="text-emerald-400">
                              "{edu.field}"
                            </span>
                            ,
                          </p>
                          <p className="text-slate-300">
                            <span className="text-cyan-400">"year"</span>:{" "}
                            <span className="text-emerald-400">
                              "{edu.year}"
                            </span>
                            ,
                          </p>
                          <p className="text-slate-300">
                            <span className="text-cyan-400">"description"</span>
                            :{" "}
                            <span className="text-emerald-400">
                              "{edu.description}"
                            </span>
                          </p>
                        </div>
                        <p className="text-slate-500 mt-2">{"}"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < educationData.length - 1 && (
                  <div className="absolute left-11 top-full h-8 w-0.5 bg-gradient-to-b from-emerald-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
