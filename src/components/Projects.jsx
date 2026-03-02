// components/Projects.jsx
import { useEffect, useRef, useState } from 'react';

function Projects() {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Scalable online store built with Spring (Product, Order, Payment, User, Notification services), API Gateway, Service Discovery (Eureka), Circuit Breaker (Resilience4j), Event-driven architecture using Kafka/RabbitMQ, JWT + OAuth2 security, and React frontend with cart, checkout, and real-time order updates.",
      tech: ["Spring Boot 3", "Spring Cloud", "Kafka", "Docker", "React", "PostgreSQL", "Keycloak"],
    },
    {
      title: "Real-time Chat & Collaboration Application",
      desc: "Advanced messaging platform with private/group chats, file sharing, online status, typing indicators, and WebSocket-based real-time communication. Includes Spring Boot backend with Spring Security, JWT auth, message persistence, and React frontend with responsive UI and notifications.",
      tech: ["Spring Boot", "Spring WebSocket", "STOMP", "React", "Redux", "MySQL", "Docker"],
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-6xl font-bold tracking-tight mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Advanced Spring Boot Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-stack applications featuring microservices, real-time features, security, and modern deployment practices
          </p>
          <div className="h-1 w-24 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-zinc-900/70 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cyan-600 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/30 p-8 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Content – no image anymore */}
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-6 text-base">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-zinc-800 text-cyan-300 rounded-full border border-cyan-900/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Optional: you can add links/buttons here later */}
              {/* <div className="flex gap-5 mt-4">
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Live Demo →</a>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">GitHub →</a>
              </div> */}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-12 italic">
          These projects demonstrate production-grade patterns: microservices, event-driven design, secure authentication, containerization, and scalable React frontends.
        </p>
      </div>
    </section>
  );
}

export default Projects;