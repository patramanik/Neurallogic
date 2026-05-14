import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Careers() {
  const jobs = [
    { title: 'Senior Full-Stack Engineer', location: 'Remote', type: 'Full-time', dept: 'Engineering' },
    { title: 'UX/UI Designer', location: 'San Francisco, CA', type: 'Full-time', dept: 'Design' },
    { title: 'AI Solutions Architect', location: 'Remote', type: 'Full-time', dept: 'Engineering' },
    { title: 'Product Marketing Manager', location: 'New York, NY', type: 'Full-time', dept: 'Marketing' }
  ];

  const benefits = [
    'Competitive compensation and equity',
    'Remote-first culture with flexible hours',
    'Comprehensive health, dental, and vision insurance',
    'Unlimited PTO and paid sabbaticals',
    'Annual learning and development stipend',
    'Home office setup allowance'
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center mb-20">
          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Join the <span className="text-primary">Neurallogic</span> Team
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-foreground/70 max-w-2xl mx-auto mb-10">
            We are always looking for passionate, logical thinkers to help us build the next generation of scalable software and AI solutions.
          </motion.p>
          <motion.div variants={fadeIn}>
             <a href="#open-roles" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
               View Open Roles <Briefcase size={20} />
             </a>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">Why work with us?</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              At Neurallogic, we believe that the best work happens when talented people are given the autonomy and resources to solve hard problems. We foster a culture of continuous learning, transparency, and innovation. 
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-2xl bg-card border border-border overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" alt="Team collaborating" className="w-full h-full object-cover" />
              </div>
              <div className="h-64 rounded-2xl bg-card border border-border overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" alt="Office discussion" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 rounded-2xl bg-card border border-border overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" alt="Remote work setup" className="w-full h-full object-cover" />
              </div>
              <div className="h-48 rounded-2xl bg-card border border-border overflow-hidden p-6 flex flex-col justify-center items-center text-center">
                 <span className="text-4xl font-bold text-primary mb-2">4.9/5</span>
                 <span className="text-sm text-foreground/70 font-medium">Rating on Glassdoor</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Open Roles Section */}
        <div id="open-roles" className="pt-10 scroll-mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">Open Positions</h2>
                <p className="text-foreground/70">Find your next opportunity at Neurallogic.</p>
              </div>
            </div>

            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeIn}
                  className="glass p-6 md:p-8 rounded-2xl hover:border-primary/50 transition-colors group flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 font-medium">
                      <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={16} /> {job.type}</span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">{job.dept}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    Apply Now <ArrowRight size={18} />
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center p-8 border border-dashed border-border rounded-2xl glass">
              <h3 className="text-xl font-bold mb-2">Don't see a fit?</h3>
              <p className="text-foreground/70 mb-6">We're always looking for talented people. Send us your resume anyway.</p>
              <Link to="/contact" className="text-primary font-bold hover:underline">hello@neurallogic.com</Link>
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
}
