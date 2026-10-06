"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "CERTIFICATES", href: "#certificates" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="mx-auto max-w-5xl px-6">
        <nav
          className={cn(
            "relative flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
            isScrolled
              ? "glass-panel border-white/10"
              : "bg-transparent border border-transparent"
          )}
        >
          {/* Logo / Brand */}
          <a href="#home" className="text-lg font-semibold tracking-wide text-white">
            M.R
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                    activeItem === item.name
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials / Contact CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://github.com/minaraoof47-spec" target="_blank" rel="noreferrer" className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/mina-raouf-4164b6364/" target="_blank" rel="noreferrer" className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:minaraoof47@gmail.com" className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-6 right-6 mt-4 p-4 rounded-2xl glass-panel md:hidden animate-fade-in-up">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      activeItem === item.name
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-white/10">
              <a href="https://github.com/minaraoof47-spec" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mina-raouf-4164b6364/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:minaraoof47@gmail.com" className="text-white/60 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
