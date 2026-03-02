// components/About.jsx
import { useEffect, useRef, useState } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-950 to-zinc-950 text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 animate-fade-in-up">
            About Me
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left - Personal Story */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl leading-relaxed text-gray-300">
              I am <span className="text-cyan-400 font-semibold">Arpit Kumar</span>, a passionate 
              <span className="font-semibold text-white"> Full Stack Java Developer</span> specializing 
              in building scalable and efficient web applications using modern technologies.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Currently pursuing my <span className="text-cyan-300">B.Tech in Computer Science and Engineering</span> 
              from Centurion University, Odisha (2022 – Present) with a CGPA of <span className="font-bold text-emerald-400">8.4</span>. 
              My academic journey has given me a strong foundation in Data Structures, Algorithms, OOP, 
              and Software Engineering principles.
            </p>


            <p className="text-lg text-gray-400 leading-relaxed">
              I love turning ideas into reality through clean architecture, RESTful APIs, and beautiful user interfaces. 
              Whether it's building an intelligent email reply system or a complete Book Management System, 
              I focus on writing maintainable and performant code.
            </p>

            {/* Quick Highlights */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                "Spring Boot Expert",
                "React & Tailwind",
                "Microservices",
                "REST APIs & JWT",
                "MySQL / PostgreSQL",
                "Clean Architecture"
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-5 py-2 bg-zinc-900 border border-cyan-800 rounded-full text-sm text-cyan-300 hover:border-cyan-400 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right - College & Education with Animation */}
          <div className="lg:col-span-5">
            <div className={`bg-zinc-900/70 backdrop-blur-xl border border-cyan-800/50 rounded-3xl p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                🎓 My College Journey
              </h3>

              <div className="space-y-8">
                {/* Centurion University */}
                <div className={`group transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-cyan-400">Centurion University</h4>
                      <p className="text-gray-400">B.Tech in Computer Science & Engineering</p>
                    </div>
                    <div className="text-right">
                     
                      <p className="text-xs text-gray-500">2022 – 2026</p>
                    </div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
                </div>

                {/* 12th */}
                <div className="opacity-80">
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="font-medium">Intermediate (12th)</span>
                      <p className="text-gray-500">S.D.S Senior Secondary School, Chapra, Bihar</p>
                    </div>
                   
                  </div>
                  <p className="text-xs text-gray-600 mt-1">2020 – 2021</p>
                </div>

                {/* 10th */}
                <div className="opacity-70">
                  <div className="flex justify-between text-sm">
                    <div>
                      <span className="font-medium">Matriculation (10th)</span>
                      <p className="text-gray-500">Galaxy Residential Public School, Chapra, Bihar</p>
                    </div>
                  
                  </div>
                  <p className="text-xs text-gray-600 mt-1">2018 – 2019</p>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
    </section>
  );
}

export default About;