import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce platform built with React, Redux, and Stripe integration for payments.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Redux', 'Stripe', 'Tailwind CSS'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A drag-and-drop task management application with team collaboration features.',
      image: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TypeScript', 'Firebase', 'Styled Components'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with forecast data visualization and location search.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['JavaScript', 'Chart.js', 'API Integration', 'CSS Grid'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Portfolio Generator',
      description: 'A web application that helps developers create stunning portfolios with minimal effort.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Mobile-responsive fitness tracking application with workout plans and progress visualization.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React Native', 'Firebase', 'Redux', 'D3.js'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'Recipe search application with filtering options and user collections functionality.',
      image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['JavaScript', 'API Integration', 'Local Storage', 'CSS'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
  ];

  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Here are some of my recent projects. Each one was carefully crafted to solve specific problems and deliver exceptional user experiences.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-white shadow text-slate-800'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                filter === 'featured'
                  ? 'bg-white shadow text-slate-800'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  className={`absolute inset-0 bg-slate-900/70 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-800 p-3 rounded-full hover:bg-amber-500 hover:text-white transition-colors duration-300"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-800 p-3 rounded-full hover:bg-amber-500 hover:text-white transition-colors duration-300"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.featured && (
                  <div className="mt-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;