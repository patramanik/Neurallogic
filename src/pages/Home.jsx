import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Cloud, Network, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const services = [
    { 
      title: 'Enterprise Web Apps', 
      desc: 'Scalable React & Node.js applications built for high performance and reliability.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600'
    },
    { 
      title: 'Cloud & Edge Infrastructure', 
      desc: 'Distributed low-latency solutions deployed right at the network edge.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
    },
    { 
      title: 'AI & Machine Learning', 
      desc: 'Intelligent systems, predictive models, and LLM integrations that optimize your business.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600'
    },
    { 
      title: 'End-to-End SaaS', 
      desc: 'Complete architecture design, development, and deployment for subscription products.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="overflow-hidden bg-background">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center lg:text-left">
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-6 border border-primary/20">
                Next-Gen Software Agency
              </motion.div>
              
              <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
                Think Neural.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Solve Logic.</span>
              </motion.h1>
              
              <motion.p variants={fadeIn} className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                We engineer intelligent, beautifully designed digital solutions. From complex SaaS architectures to AI integrations, we build the tech that runs your business.
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                  Initialize Project <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-card border border-border text-foreground rounded-xl font-bold hover:bg-foreground/5 transition-colors flex items-center justify-center">
                  View Our Work
                </Link>
              </motion.div>
              
              <motion.div variants={fadeIn} className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-foreground/60">
                 <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" size={18} /> Top Rated Agency</div>
                 <div className="flex items-center gap-2"><CheckCircle2 className="text-primary" size={18} /> 50+ Deployments</div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }} 
              animate={{ opacity: 1, scale: 1, rotate: 0 }} 
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-cyan-400 rounded-3xl blur-2xl opacity-20 animate-pulse-glow" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl glass aspect-square lg:aspect-[4/5] max-w-md mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" 
                  alt="Futuristic AI Concept" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded-md mb-3 inline-block">Featured Architecture</div>
                  <h3 className="text-white text-2xl font-bold">Neural Data Processing</h3>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Expertise Section - Alternating Layout */}
      <section className="py-32 bg-card border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6">
              Our Core Expertise
            </motion.h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">We deliver end-to-end technology solutions using the modern stack, engineered for scale.</p>
          </div>
          
          <div className="space-y-32">
            {services.map((service, idx) => {
              const isEven = idx % 2 !== 0;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 50 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col gap-12 lg:gap-24 items-center ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                >
                  <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 aspect-[4/3]">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                      <span className="font-bold text-xl">0{idx + 1}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{service.title}</h3>
                    <p className="text-xl text-foreground/70 leading-relaxed mb-8">{service.desc}</p>
                    
                    <ul className="space-y-4 mb-10">
                      <li className="flex items-center gap-3 text-foreground/80 font-medium">
                        <CheckCircle2 className="text-primary shrink-0" size={20} /> High Performance Architecture
                      </li>
                      <li className="flex items-center gap-3 text-foreground/80 font-medium">
                        <CheckCircle2 className="text-primary shrink-0" size={20} /> Scalable & Secure
                      </li>
                      <li className="flex items-center gap-3 text-foreground/80 font-medium">
                        <CheckCircle2 className="text-primary shrink-0" size={20} /> Seamless Integration
                      </li>
                    </ul>

                    <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground/5 hover:bg-foreground/10 border border-border rounded-xl font-bold transition-colors">
                      Learn More <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-24 relative z-10 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-4xl font-bold mb-4">
              Client Feedback
            </motion.h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">Don't just take our word for it. Here is what our partners say.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                text: "Neurallogic completely transformed our edge infrastructure. Their AI integrations reduced our latency by 80% and scaled flawlessly.",
                name: "Sarah Jenkins",
                role: "CTO, QuantumTech",
                rating: 5
              },
              {
                text: "The most impressive engineering team we've worked with. They delivered a complex SaaS platform months ahead of schedule.",
                name: "David Chen",
                role: "Founder, NovaData",
                rating: 5
              },
              {
                text: "Their approach to predictive analytics gave us insights we never thought possible. A truly reliable partner.",
                name: "Elena Rodriguez",
                role: "VP Engineering, SynthCorp",
                rating: 5
              }
            ].map((review, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-card p-8 rounded-2xl border border-border shadow-md hover:shadow-lg transition-all duration-300 relative group">
                <div className="absolute -top-4 -left-4 text-6xl text-primary/10 font-serif">"</div>
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 italic">"{review.text}"</p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{review.name}</h4>
                    <p className="text-sm text-foreground/60">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
