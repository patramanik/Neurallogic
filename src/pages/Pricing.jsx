import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      desc: 'Perfect for small businesses needing a solid online presence.',
      features: ['Responsive Website (up to 5 pages)', 'Basic SEO Setup', 'Contact Form Integration', '1 Month Support', 'Standard Delivery (2 weeks)'],
      isPopular: false
    },
    {
      name: 'Professional',
      price: '$3,499',
      desc: 'Ideal for growing companies needing web apps or custom solutions.',
      features: ['Custom Web App (React/Node.js)', 'Advanced SEO & Analytics', 'Database Integration (Supabase/Firebase)', '3 Months Support', 'Priority Delivery (4 weeks)'],
      isPopular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'For large organizations requiring scalable architecture and AI.',
      features: ['Full-stack SaaS Architecture', 'AI/ML Integrations', 'Dedicated Cloud Infrastructure', '24/7 SLA Support', 'Continuous Integration / Delivery'],
      isPopular: false
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent <span className="text-primary">Pricing</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose the right plan for your business needs. No hidden fees.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-3xl border ${plan.isPopular ? 'border-primary shadow-2xl shadow-primary/20 glass transform md:-translate-y-4' : 'border-border bg-card'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/70 mb-6 min-h-[48px]">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-foreground/60 font-medium">/project</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-primary mr-3 shrink-0" size={20} />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isPopular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-foreground/5 text-foreground hover:bg-foreground/10'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
