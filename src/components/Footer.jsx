import React from 'react';
import { NavLink } from 'react-router-dom';
import { MessageCircle, Globe, Code, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img src="/logo_Neurallogic-removebg.png" alt="Neurallogic" className="h-16 md:h-20 w-auto object-contain -ml-2" />
            </div>
            <p className="text-foreground/70 text-sm max-w-sm mb-6">
              THINK NEURAL . SOLVE LOGIC. We build scalable architecture and clean, maintainable code for Startups, Enterprises, and SMEs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Code size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><NavLink to="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">Web Development</NavLink></li>
              <li><NavLink to="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">Mobile Apps</NavLink></li>
              <li><NavLink to="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">AI Solutions</NavLink></li>
              <li><NavLink to="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">SaaS Products</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><NavLink to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">About Us</NavLink></li>
              <li><NavLink to="/portfolio" className="text-sm text-foreground/70 hover:text-primary transition-colors">Portfolio</NavLink></li>
              <li><NavLink to="/blog" className="text-sm text-foreground/70 hover:text-primary transition-colors">Blog</NavLink></li>
              <li><NavLink to="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">Contact</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Neurallogic. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
