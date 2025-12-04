import { motion } from "motion/react";
import { ExternalLink, Github, Calendar, Cpu, GitBranch } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Blog Management",
      year: "2025",
      description:
        "Created a comprehensive Blog Management system, organizing vast amounts of interconnected information into a structured format, facilitating efficient storing all users and blog data on database and CRUD operations across diverse domains.",
      image:
        "https://images.unsplash.com/photo-1645027718562-54414cd86f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjQ4MzUwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/Abi2947/Blog_Management_System",
      tech: ["Node.js", "Express", "MongoDB"],
      status: "Completed",
    },
    {
      title: "Event Management",
      year: "2025",
      description:
        "A full-stack event management application that lets users register, log in, and manage events with full CRUD functionality. Built with Node.js on the backend and React on the frontend.",
      image:
        "https://i.pinimg.com/1200x/ec/a4/01/eca4010222f31b370c0640c81740b20b.jpg",
      github: "https://github.com/Abi2947/Event_Management_System",
      tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
      status: "Completed",
    },
    {
      title: "Task Menagement",
      year: "2025",
      description:
        "A full-stack MERN Task Management App that lets users create, edit, delete, and track tasks efficiently. Includes JWT authentication, priority levels, due dates, and labels for better organization. Built using Node.js, Express, MongoDB, and React with a fully responsive UI and RESTful API integration.",
      image:
        "https://i.pinimg.com/736x/ad/57/08/ad570859f61b670eae663e9d03501061.jpg",
      github: "https://github.com/Abi2947/Task_Management_System",
      tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
      status: "Completed",
    },
    {
      title: "Chat App",
      year: "2025",
      description:
        "A secure and responsive chat platform with instant message delivery and online user tracking.Powered by MERN stack and Socket.io for smooth real-time performance.",
      image:
        "https://i.pinimg.com/736x/23/ab/ac/23abacce9c259c41261d91c9d1bd2913.jpg",
      github: "https://github.com/Abi2947/Chat_app",
      tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
      status: "Completed",
    },
    {
      title: "Farmers Work",
      year: "2023",
      description:
        "An innovative app offering rental services for plots, machinery, and equipment while providing timely pesticide arrival notifications, streamlining farming operations and fostering agricultural efficiency.",
      image:
        "https://images.unsplash.com/photo-1580982338091-2e635b5759a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwYWdyaWN1bHR1cmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDgzNTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/Abi2947/Agro_service",
      tech: ["React", "Node.js", "MongoDB"],
      status: "Completed",
    },
    {
      title: "Nepali Hand Sign Language",
      year: "2024",
      description:
        "Developed a Nepali hand sign recognition system leveraging computer vision and deep learning techniques to interpret and facilitate communication for the hearing impaired, enhancing accessibility and inclusivity in Nepali society.",
      image:
        "https://images.unsplash.com/photo-1739630405609-fd438c446f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWduJTIwbGFuZ3VhZ2UlMjBoYW5kc3xlbnwxfHx8fDE3NjQ3MzIyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/Abi2947/major_model/tree/avi",
      tech: ["Python", "TensorFlow", "OpenCV"],
      status: "Completed",
    },
    {
      title: "Chess Bot",
      year: "2022",
      description:
        "Crafted a cutting-edge chess bot project integrating advanced algorithms and AI methodologies, showcasing my proficiency in artificial intelligence and strategic problem-solving.",
      image:
        "https://images.unsplash.com/photo-1662169847892-565cce8f901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVzcyUyMGdhbWUlMjBzdHJhdGVneXxlbnwxfHx8fDE3NjQ3ODA2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/Abi2947/Game_bot",
      tech: ["Python", "AI", "Minimax"],
      status: "Completed",
    },
    {
      title: "Knowledge Graph",
      year: "2023",
      description:
        "Created a comprehensive knowledge graph system, organizing vast amounts of interconnected information into a structured format, facilitating efficient data retrieval and analysis across diverse domains.",
      image:
        "https://images.unsplash.com/photo-1738082956220-a1f20a8632ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbm93bGVkZ2UlMjBncmFwaCUyMG5ldHdvcmt8ZW58MXx8fHwxNzY0ODM1MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com/Abi2947/Knowledge_Graph",
      tech: ["Python", "Neo4j", "NLP"],
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

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
            <GitBranch className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 tracking-wider uppercase text-sm font-mono">
              git log --projects
            </span>
          </div>
          <h2>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent font-mono">
              {"Projects[]"}
            </span>
          </h2>
          <p className="text-slate-400 mt-4 font-mono text-sm">
            <span className="text-emerald-400">//</span> 2022 - 2025 | Building
            solutions with code
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-emerald-500/50 rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg px-3 py-1">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          project.status === "Completed"
                            ? "bg-emerald-400"
                            : "bg-yellow-400"
                        } animate-pulse`}
                      />
                      <span className="text-xs font-mono text-slate-300">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-cyan-400 text-sm font-mono flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-slate-100 mb-3 font-mono">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-800/50 border border-slate-700 rounded text-xs font-mono text-emerald-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-slate-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-emerald-500/10 border border-slate-700 hover:border-emerald-500 rounded-lg transition-all duration-300 group/link"
                    >
                      <Github className="w-4 h-4 text-slate-400 group-hover/link:text-emerald-400 transition-colors" />
                      <span className="text-sm text-slate-400 group-hover/link:text-emerald-400 transition-colors font-mono">
                        Code
                      </span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-slate-800/50 hover:bg-cyan-500/10 border border-slate-700 hover:border-cyan-500 rounded-lg transition-all duration-300 group/link"
                    >
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover/link:text-cyan-400 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              label: "Total Projects",
              value: projects.length,
              icon: Cpu,
            },
            {
              label: "Completed",
              value: projects.filter((p) => p.status === "Completed").length,
              icon: GitBranch,
            },
            {
              label: "In Progress",
              value: projects.filter((p) => p.status === "In Progress").length,
              icon: GitBranch,
            },
            {
              label: "Tech Stack",
              value: new Set(projects.flatMap((p) => p.tech)).size,
              icon: Cpu,
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-xl p-6 text-center"
              >
                <Icon className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-mono bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm font-mono">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
