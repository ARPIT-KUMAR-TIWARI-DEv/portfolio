// components/Skills.jsx
import { useEffect, useRef, useState } from 'react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      name: "Java",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Orange-Logo.svg", // official coffee cup style
      description: "Core language for backend development, OOP, and scalable applications",
    },
    {
      name: "Spring Boot",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spring_Boot.svg",
      description: "Rapid development of production-grade Spring-based applications & microservices",
    },
    {
      name: "Hibernate",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Hibernate_logo.svg", // common community version
      description: "ORM framework for Java – mapping objects to database tables efficiently",
    },
    {
      name: "React.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description: "Building dynamic, responsive user interfaces and single-page applications",
    },
    {
      name: "RESTful APIs",
      logo: "https://img.icons8.com/color/96/000000/api-settings.png", // generic API icon
      description: "Designing and implementing secure, scalable web services with JSON",
    },
    {
      name: "MySQL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Mysql_logo.svg", // dolphin logo
      description: "Relational database management – queries, design & optimization",
    },
    {
      name: "PostgreSQL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      description: "Advanced open-source relational database with strong SQL compliance",
    },
    {
      name: "Git / GitHub",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      description: "Version control, collaboration, branching & repository management",
    },
    {
      name: "Postman",
      logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      description: "API development, testing, documentation & debugging tool",
    },
    {
      name: "Maven",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Apache_Maven_logo.svg",
      description: "Build automation & dependency management for Java projects",
    },
    {
      name: "Docker (Basic)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_(container_engine)_logo.svg",
      description: "Containerization basics – packaging applications consistently",
    },
    {
      name: "Data Structures & Algorithms",
      logo: "https://img.icons8.com/color/96/000000/algorithm.png", // generic DSA icon
      description: "Problem-solving foundation using arrays, trees, graphs, sorting, etc.",
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-900 text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold tracking-tight mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-stack Java development toolkit — from backend engines to modern frontend and DevOps essentials
          </p>
          <div className="h-1 w-24 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 transition-all duration-500 hover:border-cyan-600/70 hover:shadow-xl hover:shadow-cyan-900/20 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-zinc-800/80 group-hover:bg-cyan-900/30 transition-colors">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      e.target.src = "https://img.icons8.com/color/96/000000/code.png"; // fallback
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                  {skill.name}
                </h3>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16 text-gray-500 text-sm">
          Constantly learning and applying new tools to build better, faster, and more reliable applications.
        </div>
      </div>
    </section>
  );
}

export default Skills;