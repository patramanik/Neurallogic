import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 glass border-b border-primary/20 shadow-[0_4px_30px_rgba(var(--primary),0.1)] transition-all duration-300 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center py-2">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={`${import.meta.env.BASE_URL}logo_Neurallogic-removebg.png`} alt="Neurallogic" className="h-16 md:h-20 w-auto object-contain" />
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-foreground/80")}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-foreground/80")}>Services</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-foreground/80")}>Portfolio</NavLink>
            <NavLink to="/pricing" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-foreground/80")}>Pricing</NavLink>
            <NavLink to="/blog" className={({ isActive }) => cn("text-sm font-medium transition-colors hover:text-primary", isActive ? "text-primary" : "text-foreground/80")}>Blog</NavLink>
            
            {/* Company Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 py-4">
                Company
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 rounded-xl shadow-lg bg-card border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 flex flex-col">
                  <NavLink to="/about" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-primary transition-colors">About Us</NavLink>
                  <NavLink to="/careers" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-primary transition-colors">Careers</NavLink>
                  <NavLink to="/contact" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-foreground/5 hover:text-primary transition-colors">Contact</NavLink>
                </div>
              </div>
            </div>


            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-foreground/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-foreground/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-2 pt-2 pb-3 flex flex-col space-y-1 sm:px-3">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-foreground/5">Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-foreground/5">About Us</NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-foreground/5">Services</NavLink>
            <NavLink to="/portfolio" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-foreground/5">Portfolio</NavLink>
            <NavLink to="/pricing" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-foreground/5">Pricing</NavLink>
            <NavLink to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-foreground/5">Blog</NavLink>
            <NavLink to="/careers" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-foreground/5">Careers</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:bg-foreground/5">Contact</NavLink>

          </div>
        </div>
      )}
    </nav>
  );
}
