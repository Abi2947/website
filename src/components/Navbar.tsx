import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="group flex items-center gap-2"
          >
            <img src="images/logo.ico" alt="Logo" />
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span className="font-mono bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent transition-all">
              utsab@portfolio:~$
            </span>
            <span className="font-mono text-emerald-400 animate-pulse">_</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-sm font-mono uppercase tracking-wider transition-colors relative group ${
                  activeSection === link.href.slice(1)
                    ? "text-emerald-400"
                    : "text-slate-300 hover:text-emerald-400"
                }`}
              >
                <span className="text-emerald-400 opacity-50">{"<"}</span>
                {link.label}
                <span className="text-emerald-400 opacity-50">{" />"}</span>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all ${
                    activeSection === link.href.slice(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-emerald-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-sm font-mono uppercase tracking-wider transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-emerald-400"
                      : "text-slate-300 hover:text-emerald-400"
                  }`}
                >
                  <span className="text-emerald-400 opacity-50">{"<"}</span>
                  {link.label}
                  <span className="text-emerald-400 opacity-50">{" />"}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
