import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    cn(
      "relative text-sm font-medium transition-all duration-300 py-2",
      isActive
        ? "text-primary"
        : "text-foreground/70 hover:text-foreground"
    );

  const activeDot = (
    <motion.div
      layoutId="nav-active"
      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    />
  );

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        scrolled
          ? "glass-strong shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <img
              src={`${import.meta.env.BASE_URL}logo_Neurallogic-removebg.png`}
              alt="Neurallogic"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/portfolio', label: 'Work' },
              { to: '/pricing', label: 'Pricing' },
              { to: '/blog', label: 'Blog' },
            ].map(({ to, label }) => (
              <NavLink key={to} to={to} className={linkClass}>
                {({ isActive }) => (
                  <span className="relative px-3">
                    {label}
                    {isActive && activeDot}
                  </span>
                )}
              </NavLink>
            ))}

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1 px-3 py-2">
                Company
                <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 mt-0 w-52 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <div className="glass-strong rounded-2xl overflow-hidden shadow-xl">
                  <div className="py-2">
                    {[
                      { to: '/about', label: 'About Us' },
                      { to: '/careers', label: 'Careers' },
                      { to: '/contact', label: 'Contact' },
                    ].map(({ to, label }) => (
                      <NavLink
                        key={to}
                        to={to}
                        className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
                      >
                        {label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-5 bg-border mx-2" />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-foreground/5 transition-all duration-300 group"
              aria-label="Toggle Theme"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
              </motion.div>
            </button>

            {/* CTA */}
            <NavLink
              to="/contact"
              className="ml-2 px-5 py-2 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              Start Project
            </NavLink>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-foreground/5 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl hover:bg-foreground/5 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass-strong border-t border-border/50"
          >
            <div className="px-4 pt-3 pb-4 flex flex-col gap-1">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/portfolio', label: 'Work' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/blog', label: 'Blog' },
                { to: '/careers', label: 'Careers' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      isActive ? "text-primary bg-primary/5" : "text-foreground/70 hover:bg-foreground/5"
                    )
                  }
                >
                  {label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold text-center"
              >
                Start a Project →
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
