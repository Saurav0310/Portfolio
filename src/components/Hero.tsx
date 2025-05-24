import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-dark-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-neon-pink/20 mix-blend-screen blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 rounded-full bg-neon-blue/20 mix-blend-screen blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-1/3 w-64 h-64 rounded-full bg-neon-purple/20 mix-blend-screen blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h2 className="gradient-text text-lg font-medium tracking-wider">
                Hello, I'm
              </h2>
              <h1 className="neon-text text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                John Doe
              </h1>
              <h2 className="text-2xl md:text-3xl text-dark-300">
                Senior Frontend Developer
              </h2>
            </div>
            
            <p className="text-dark-300 text-lg leading-relaxed max-w-xl">
              I craft engaging web experiences with modern technologies. 
              Specializing in creating responsive, accessible, and performance-optimized
              applications that solve real business problems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neon-purple hover:bg-neon-purple/80 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-[0_0_15px_rgba(138,43,226,0.5)] hover:shadow-[0_0_25px_rgba(138,43,226,0.8)]"
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dark-800 border border-neon-blue text-neon-blue px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden md:block relative h-[450px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(138,43,226,0.3)] transform hover:scale-[1.02] transition-all duration-500">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional headshot" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="text-neon-blue hover:text-neon-purple transition-colors duration-300" size={36} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;