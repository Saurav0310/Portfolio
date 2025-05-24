import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 95, category: 'frontend' },
    { name: 'HTML/CSS', level: 90, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express', level: 75, category: 'backend' },
    { name: 'MongoDB', level: 70, category: 'backend' },
    { name: 'Figma', level: 85, category: 'design' },
    { name: 'UI/UX Design', level: 80, category: 'design' },
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Webpack/Vite', level: 85, category: 'tools' },
  ];

  const categories = ['frontend', 'backend', 'design', 'tools'];

  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center p-1 bg-slate-200 rounded-lg">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-white shadow text-slate-800'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md capitalize transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-white shadow text-slate-800'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-slate-800">{skill.name}</h3>
                <span className="text-amber-500 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div
                  className="bg-amber-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="mt-2">
                <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded capitalize">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;