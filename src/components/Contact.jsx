// components/Contact.jsx
import { useEffect, useRef, useState } from 'react';

function Contact() {
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      {/* Animated background grid + subtle particles */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-move"></div>
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Neon glowing title */}
        <div className="text-center mb-16">
          <h2
            className={`text-6xl md:text-8xl font-black tracking-widest mb-4 neon-glow-cyan animate-title-reveal ${
              isVisible ? 'opacity-100' : 'opacity-0 scale-90'
            } transition-all duration-1200`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              CONNECT
            </span>
            <span className="ml-4 text-cyan-300 animate-pulse">/</span>
            <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">
              AR PIT
            </span>
          </h2>

          <p
            className={`text-xl md:text-2xl text-cyan-200/80 mt-4 font-light tracking-wide animate-fade-in-up delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            Let's turn ideas into production-grade code together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left - Cyberpunk style contact cards */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
            }`}
          >
            <div className="group relative bg-black/40 backdrop-blur-xl border border-cyan-800/40 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>

              <div className="relative flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-2xl shadow-lg animate-pulse-slow">
                  ✉
                </div>
                <div>
                  <p className="text-sm text-cyan-300/70 uppercase tracking-wider">Primary Contact</p>
                  <a
                    href="mailto:arpitkumartiwari321@gmail.com"
                    className="text-xl font-medium hover:text-cyan-300 transition-colors"
                  >
                    arpitkumartiwari321@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative bg-black/40 backdrop-blur-xl border border-purple-800/40 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>

              <div className="relative flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center text-2xl shadow-lg animate-pulse-slow delay-500">
                  📞
                </div>
                <div>
                  <p className="text-sm text-purple-300/70 uppercase tracking-wider">Voice / WhatsApp</p>
                  <a
                    href="tel:+916287267318"
                    className="text-xl font-medium hover:text-purple-300 transition-colors"
                  >
                    +91 628 726 7318
                  </a>
                </div>
              </div>
            </div>

            {/* Social neon pills */}
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { name: 'LinkedIn', icon: 'in', color: 'cyan', href: 'https://www.linkedin.com/in/arpit-kumar-a30a60256/' },
                { name: 'GitHub', icon: '</>', color: 'purple', href: 'https://github.com/ARPIT-KUMAR-TIWARI-DEv' },
                { name: 'Portfolio', icon: '🌐', color: 'pink', href: '#' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative px-6 py-3 rounded-full bg-black/50 border border-${social.color}-800/50 hover:border-${social.color}-400/70 transition-all duration-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] flex items-center gap-3 text-${social.color}-300 hover:text-${social.color}-200`}
                >
                  <span className="text-xl">{social.icon}</span>
                  <span>{social.name}</span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Floating neon form */}
          <div
            className={`relative transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
            }`}
          >
            <div className="relative bg-black/50 backdrop-blur-2xl border border-cyan-900/40 rounded-3xl p-10 shadow-[0_0_60px_rgba(6,182,212,0.15)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-shadow duration-700">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full text-lg font-bold shadow-lg animate-pulse-slow">
                LEAVE A MESSAGE
              </div>

              <form className="space-y-7 mt-10">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-5 bg-black/60 border border-cyan-900/60 rounded-xl text-white placeholder-cyan-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition-all duration-300"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-5 bg-black/60 border border-cyan-900/60 rounded-xl text-white placeholder-cyan-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition-all duration-300"
                />

                <textarea
                  placeholder="How can I help you today?"
                  rows={6}
                  className="w-full px-6 py-5 bg-black/60 border border-cyan-900/60 rounded-xl text-white placeholder-cyan-700 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition-all duration-300 resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 text-white font-bold text-lg rounded-xl shadow-[0_10px_30px_rgba(6,182,212,0.4)] hover:shadow-[0_15px_40px_rgba(6,182,212,0.6)] transform hover:scale-[1.03] active:scale-95 transition-all duration-400"
                >
                  TRANSMIT MESSAGE →
                </button>
              </form>

              <p className="text-center text-sm text-cyan-700/70 mt-6">
                Form is decorative • Preferred: email or LinkedIn DM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glowing line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 via-purple-500/50 to-transparent"></div>
    </section>
  );
}

export default Contact;