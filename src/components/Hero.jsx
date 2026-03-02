// components/Hero.jsx
import ArpitImg from "../assets/Arpit.jpeg";
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-950 via-cyan-950 to-indigo-950 text-white relative overflow-hidden">
      {/* Subtle animated background overlays */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(45,212,191,0.18),transparent_45%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(34,211,238,0.15),transparent_45%)] animate-pulse-slow delay-1500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-0 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* Left - Text Content (Expanded) */}
        <div className="text-center md:text-left max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 leading-tight">
            Hi, I'm <span className="text-cyan-400">Arpit</span> 👋
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-200 mb-6">
            Full Stack Java Developer
            <br className="hidden sm:block" />
            <span className="text-cyan-300">
              Spring Boot • React  • REST APIs
            </span>
          </p>

      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
  Building scalable, high-performance web applications with clean
  architecture and modern tech stacks. Passionate about clean code,
  efficient backend systems, and intuitive user experiences. I enjoy
  collaborating in agile teams, solving challenging problems, and
  continuously learning new technologies to deliver impactful solutions.
  My focus is on writing maintainable, secure code that scales seamlessly
  and provides a smooth experience for users across platforms.
</p>

          {/* Highlights / Quick Skills */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-3 mb-10 text-sm md:text-base">
            {[
              "Spring Boot + Hibernate",
              "React & Tailwind CSS",
              "PostgreSQL / MySQL",
              "Docker & AWS Basics",
              "RESTful APIs & JWT",
              "Git ",
            ].map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 bg-cyan-900/40 backdrop-blur-sm border border-cyan-700/50 rounded-full text-cyan-200 font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>

        
        </div>

        {/* Right - Profile Image */}
        <div className="relative animate-fade-in-right">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-cyan-500/70 shadow-2xl shadow-cyan-600/40 transform hover:scale-105 hover:rotate-2 transition-all duration-500">
            <img
              src={ArpitImg}
              alt="Arpit - Full Stack Java Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glow / Orbit effect */}
          <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/40 via-teal-500/30 to-cyan-600/40 rounded-full blur-3xl opacity-70 animate-pulse-slow pointer-events-none"></div>
        </div>
      </div>

      {/* Optional scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-10 h-10 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
