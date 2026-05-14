import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { supabase } from '../services/supabase';
import { Calendar, ArrowRight } from 'lucide-react';

const MOCK_BLOGS = [
  {
    id: '1',
    title: 'The Future of AI in SaaS Applications',
    content: 'Artificial Intelligence is revolutionizing how we build and interact with Software as a Service...',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Building Scalable Architectures with Supabase',
    content: 'When it comes to modern backend-as-a-service providers, Supabase stands out for its...',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    created_at: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: '3',
    title: 'Why React and Vite are the Perfect Match',
    content: 'Vite has fundamentally changed the frontend developer experience by providing lightning-fast...',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    created_at: new Date(Date.now() - 86400000 * 2).toISOString()
  }
];

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
        if (error || !data || data.length === 0) {
          // Fallback to mock data if table doesn't exist or is empty
          setBlogs(MOCK_BLOGS);
        } else {
          setBlogs(data);
        }
      } catch (err) {
        setBlogs(MOCK_BLOGS);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-primary">Blog</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Insights, tutorials, and thought leadership from our engineering and design teams.
          </motion.p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse glass rounded-2xl h-[400px]"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div 
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-2xl overflow-hidden group flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img src={blog.image || 'https://via.placeholder.com/800x400'} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-foreground/50 mb-3 gap-1">
                    <Calendar size={14} />
                    {new Date(blog.created_at).toLocaleDateString()}
                  </div>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">{blog.title}</h2>
                  <p className="text-foreground/70 text-sm mb-6 line-clamp-3 flex-1">{blog.content}</p>
                  <Link to={`/blog/${blog.id}`} className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all mt-auto w-fit">
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
