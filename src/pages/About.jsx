import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-primary">Neurallogic</span></h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We are a forward-thinking technology company specializing in innovative software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              To empower businesses by bridging the gap between complex logic and seamless user experiences. We believe that technology should be intuitive, scalable, and beautiful.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Whether you are a startup building your first MVP or an enterprise modernizing your infrastructure, we have the expertise to deliver beyond expectations.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[400px] rounded-2xl overflow-hidden glass flex items-center justify-center p-8">
             <img src="/logo_Neurallogic.png" alt="Neurallogic Logo" className="w-full h-full object-contain drop-shadow-2xl" />
          </motion.div>
        </div>

        {/* Timeline placeholder */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card p-10 rounded-3xl border border-border">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="space-y-8">
            {[ 
              { year: '2023', text: 'Neurallogic founded with a vision to redefine digital products.' },
              { year: '2024', text: 'Expanded team and delivered 20+ successful enterprise projects.' },
              { year: '2025', text: 'Launched proprietary AI solutions for SMBs.' },
              { year: '2026', text: 'Recognized as an industry leader in modern SaaS architecture.' }
            ].map((milestone, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="text-primary font-bold w-16 pt-1">{milestone.year}</div>
                <div className="w-4 h-4 rounded-full bg-primary mt-1.5 relative z-10 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                <div className="flex-1 pb-8 border-l border-border pl-6 -ml-[25px]">
                  <p className="text-foreground/80">{milestone.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
