import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Working on laptop"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate frontend developer with over 6 years of experience building 
              modern web applications. I combine technical expertise with a keen eye for 
              design to create engaging user experiences that drive business results.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              My approach focuses on clean code, accessibility, and performance optimization. 
              I enjoy solving complex problems and turning ideas into reality through 
              thoughtful user interfaces and smooth interactions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Briefcase className="h-6 w-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-800">Professional Experience</h3>
                  <p className="text-slate-600">6+ years in frontend development across multiple industries</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <GraduationCap className="h-6 w-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-800">Education</h3>
                  <p className="text-slate-600">B.S. in Computer Science, University of Technology</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Award className="h-6 w-6 text-amber-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-800">Achievements</h3>
                  <p className="text-slate-600">Multiple awards for UI/UX design and web development</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;