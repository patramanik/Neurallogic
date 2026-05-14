import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Cloud, Database, Lock } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: <Code size={40} />, title: 'Web Development', desc: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js. Focus on performance, SEO, and user experience.' },
    { icon: <Smartphone size={40} />, title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.' },
    { icon: <Brain size={40} />, title: 'AI Solutions', desc: 'Integrating machine learning models, NLP, and AI-driven analytics into your existing workflows to automate processes.' },
    { icon: <Cloud size={40} />, title: 'SaaS Products', desc: 'Architecting scalable, multi-tenant SaaS platforms with robust subscription management and real-time features.' },
    { icon: <Database size={40} />, title: 'Cloud Architecture', desc: 'Designing and deploying secure, high-availability infrastructure on AWS, Google Cloud, and Azure.' },
    { icon: <Lock size={40} />, title: 'Cybersecurity', desc: 'Implementing enterprise-grade security protocols, audits, and compliance measures to protect your data.' }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-primary">Services</span></h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to scale your business and outpace the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors"></div>
              <div className="text-primary mb-6 relative z-10">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>
              <p className="text-foreground/70 relative z-10 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
