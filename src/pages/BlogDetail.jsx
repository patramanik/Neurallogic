import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '../services/supabase';
import { ArrowLeft, Calendar } from 'lucide-react';

const MOCK_BLOGS = [
  {
    id: '1',
    title: 'The Future of AI in SaaS Applications',
    content: 'Artificial Intelligence is revolutionizing how we build and interact with Software as a Service. From predictive analytics to automated customer support, the integration of AI models like LLMs is becoming a standard rather than a luxury.\n\nIn this article, we explore the architecture required to support these integrations at scale. We will look at vector databases, efficient prompt engineering, and how to maintain data privacy while leveraging third-party AI APIs.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    created_at: new Date().toISOString()
  },
  // ... other mock blogs would be here if full implementation, but we'll just find by ID or default to first
];

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();
        if (error || !data) {
          const mockBlog = MOCK_BLOGS.find(b => b.id === id) || MOCK_BLOGS[0];
          setBlog(mockBlog);
        } else {
          setBlog(data);
        }
      } catch (err) {
        const mockBlog = MOCK_BLOGS.find(b => b.id === id) || MOCK_BLOGS[0];
        setBlog(mockBlog);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center pt-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;
  }

  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center pt-20">Blog not found.</div>;
  }

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-foreground/60 hover:text-primary transition-colors mb-8">
          <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center text-sm text-primary mb-4 gap-2">
            <Calendar size={16} />
            {new Date(blog.created_at).toLocaleDateString()}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">{blog.title}</h1>
          
          <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-10">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {blog.content.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-6 text-foreground/80 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
