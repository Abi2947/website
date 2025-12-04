import { motion } from "motion/react";
import { Phone, Mail, MapPin, Linkedin, Send, Terminal } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Replace these with your actual EmailJS keys
      const serviceID = "service_5bzfn9s";
      const templateID = "template_4t3k8j1";
      const publicKey = "wo4kmtBeO_TbDu12m";

      await emailjs.send(
        serviceID,
        templateID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        publicKey
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch (error) {
      toast.error(
        "Failed to send message. Please try again or email me directly."
      );
      console.error("EmailJS error:", error);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "phone",
      content: "+977 9864410250",
      href: "tel:+9779864410250",
    },
    {
      icon: Mail,
      title: "email",
      content: "utsabgautam47@gmail.com",
      href: "mailto:utsabgautam47@gmail.com",
    },
    {
      icon: MapPin,
      title: "location",
      content: "Kalanki, Kathmandu",
    },
    {
      icon: Linkedin,
      title: "linkedin",
      content: "linkedin.com/utsab-gautam",
      href: "https://www.linkedin.com/in/utsab-gautam/",
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

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
              ./contact.sh
            </span>
          </div>
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent font-mono">
              {"connect()"}
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-mono text-sm">
            <span className="text-emerald-400">//</span> Have a project in mind?
            Let's collaborate.
            <br />
            <span className="text-emerald-400">//</span> Always open to new
            opportunities and ideas.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                  sendMessage.tsx
                </span>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-emerald-400 mb-2 font-mono"
                    >
                      const name =
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 focus:border-emerald-500 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none transition-colors font-mono text-sm"
                      placeholder='"Utsab Gautam"'
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400 font-mono">
                        // Error: {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-emerald-400 mb-2 font-mono"
                    >
                      const email =
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 focus:border-emerald-500 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none transition-colors font-mono text-sm"
                      placeholder='"utsabgautam47@gmail.com"'
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 font-mono">
                        // Error: {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm text-emerald-400 mb-2 font-mono"
                    >
                      const subject =
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 focus:border-emerald-500 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none transition-colors font-mono text-sm"
                      placeholder='"Project Collaboration"'
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400 font-mono">
                        // Error: {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-emerald-400 mb-2 font-mono"
                    >
                      const message =
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                      })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 focus:border-emerald-500 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none transition-colors resize-none font-mono text-sm"
                      placeholder='"Tell me about your project..."'
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400 font-mono">
                        // Error: {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-slate-950 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group font-mono"
                  >
                    <span>send_Message()</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-slate-800/50 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs text-slate-500 font-mono ml-2">
                  contact.json
                </span>
              </div>

              <div className="p-8">
                <p className="text-slate-500 font-mono text-sm mb-4">{"{"}</p>
                <div className="pl-4 space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="group">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="flex-shrink-0 p-2 bg-slate-800/50 group-hover:bg-emerald-500/10 rounded-lg transition-colors">
                            <Icon className="w-4 h-4 text-emerald-400" />
                          </div>

                          {/* Content */}
                          <div className="flex-grow font-mono text-sm">
                            <p className="text-cyan-400 mb-1">
                              "{item.title}":
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                target={
                                  item.href.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  item.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="text-emerald-400 hover:text-emerald-300 transition-colors break-all"
                              >
                                "{item.content}"
                                {index < contactInfo.length - 1 && ","}
                              </a>
                            ) : (
                              <p className="text-emerald-400">
                                "{item.content}"
                                {index < contactInfo.length - 1 && ","}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-slate-500 font-mono text-sm mt-4">{"}"}</p>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-8">
              <div className="flex items-start gap-2 mb-4">
                <span className="text-emerald-400 font-mono text-sm">
                  {"/**"}
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 font-mono pl-4">
                * Let's Connect! Over a tea
                <br />
                * I'm always interested in hearing about
                <br />
                * new projects and opportunities.
                <br />
                * Whether you have a question or just
                <br />* want to say hi, feel free to reach out!
              </p>
              <div className="flex items-start gap-2 mb-6">
                <span className="text-emerald-400 font-mono text-sm">
                  {"*/"}
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Abi2947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-900/50 hover:bg-emerald-500/20 border border-slate-700 hover:border-emerald-500 rounded-lg text-sm text-slate-300 hover:text-emerald-400 transition-all font-mono"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/utsab-gautam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-900/50 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 rounded-lg text-sm text-slate-300 hover:text-cyan-400 transition-all font-mono"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
