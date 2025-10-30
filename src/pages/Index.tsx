import { Link } from "react-router-dom";
import { BloodCursor } from "@/components/BloodCursor";
import { EasterEggs } from "@/components/EasterEggs";
import { useState } from "react";

const Index = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "THE GAME - Dystopian Portfolio",
      description: "Immersive Alice in Borderland-inspired developer portfolio with 3D WebGL alien invasion game, blood-trail cursor effects, Konami code easter eggs, and apocalyptic survival aesthetics built for DevOne Hackathon 2025.",
      tech: ["React", "Three.js", "React Three Fiber", "Tailwind CSS", "TypeScript"],
      difficulty: "EXTREME",
      image: "🃏",
      github: "#",
      demo: "#",
    },
    {
      title: "Phantom Click - The Ghost in the Code",
      description: "A browser-based clicker game where users must guess where to click on invisible or hidden objects. Unlock hidden messages, solve code-breaking puzzles, and discover eerie Easter eggs along the way.",
      tech: ["JavaScript", "React", "WebGL", "CSS Animations", "Node.js"],
      difficulty: "HARD",
      image: "👻",
      github: "#",
      demo: "src/projects/phantom-click.html",
    },
    {
      title: "Chaos Scheduler - The Quantum Timekeeper",
      description: "A time management app with a quantum twist: appointments appear at random intervals, and you must 'hack' through a time paradox system to manage your schedule before it resets.",
      tech: ["React", "TypeScript", "Quantum Computing Simulations", "WebSockets", "Firebase"],
      difficulty: "MEDIUM",
      image: "⏳",
      github: "#",
      demo: "src/projects/chaos-scheduler.html",
    },
    {
      title: "Cryptid Tracker - The Search for Unseen Creatures",
      description: "A real-time tracking platform where users report sightings of cryptids. AI predicts creature appearances using folklore data, satellite images, and weather patterns to map out potential sightings.",
      tech: ["Next.js", "TensorFlow", "Leaflet.js", "MongoDB", "Google Maps API"],
      difficulty: "MEDIUM",
      image: "👽",
      github: "#",
      demo: "src/projects/cryptid-tracker.html",
    },
    {
      title: "Neon Signals - Echoes from the Future",
      description: "A dystopian social media app where posts are from parallel universes. Users need to decipher posts to determine which universe they came from and whether it's good or bad advice for your timeline.",
      tech: ["React", "Node.js", "MongoDB", "Real-time Data Sync", "AI"],
      difficulty: "HARD",
      image: "🔮",
      github: "#",
      demo: "src/projects/neon-signals.html",
    },
    {
      title: "The Doomloop - Code that Never Ends",
      description: "A platform where every bug you fix spawns a new, harder one. Keep climbing through an infinite loop of coding challenges that test your debugging skills while mocking your existence as a developer.",
      tech: ["React", "WebSockets", "Python", "Firebase"],
      difficulty: "HARD",
      image: "⚠️",
      github: "#",
      demo: "src/projects/doomloop.html",
    },
    {
      title: "Eternal Bookmark - Code-stored Memory",
      description: "A web app that lets users create 'memory vaults' locked with secret phrases. Inside each vault, hidden puzzles and time capsules from the past await your discovery. What will you uncover from your code's forgotten corners?",
      tech: ["React", "Firebase", "IndexedDB", "CSS Animations", "WebSockets"],
      difficulty: "MEDIUM",
      image: "🔒",
      github: "#",
      demo: "src/projects/eternal-bookmark.html",
    },
    {
      title: "Survival Tracker - Code Your Escape",
      description: "A dystopian survival simulation where your decisions affect your chance of survival. Track resources, build shelters, and outsmart AI-driven enemies in a world where every decision could be your last.",
      tech: ["Node.js", "React", "TensorFlow", "MongoDB", "Redux"],
      difficulty: "MEDIUM",
      image: "⚔️",
      github: "#",
      demo: "src/projects/survival-tracker.html",
    }
];


  const skills = [
    { name: "Python", level: 20, weapon: "🐍 Python Ponderer" },
    { name: "C++", level: 15, weapon: "🔨 C++ Clutz" },
    { name: "React.js", level: 18, weapon: "⚛️ React Wanderer" },
    { name: "Three.js & WebGL", level: 12, weapon: "🎮 3D Rookie" },
    { name: "Unity", level: 10, weapon: "🕹️ Unity Newbie" },
    { name: "Blender", level: 13, weapon: "🖌️ Blender Explorer" },
    { name: "Web Dev (HTML, CSS, JS)", level: 17, weapon: "🌐 Web Noob" },
    { name: "React Native", level: 14, weapon: "📱 Mobile Curious" },
    { name: "ROS2 & Gazebo", level: 12, weapon: "🤖 Robo Learner" },
    { name: "LeetCode/DSA", level: 20, weapon: "💡 Algorithm Pupil" },
    { name: "OpenCV", level: 11, weapon: "👁️ Vision Wanderer" }
];


  return (
    <>
      <BloodCursor />
      <EasterEggs />
      
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-danger/20">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-danger font-iceland glitch-text">
              ♠ THE GAME ♣
            </div>
            <div className="flex gap-6 font-mono text-sm">
              <a href="#profile" className="text-cyan hover:text-danger transition-colors">PROFILE</a>
              <a href="#missions" className="text-cyan hover:text-danger transition-colors">MISSIONS</a>
              <a href="#arsenal" className="text-cyan hover:text-danger transition-colors">ARSENAL</a>
              <a href="#arcade" className="text-cyan hover:text-danger transition-colors">ARCADE</a>
              <a href="#contact" className="text-cyan hover:text-danger transition-colors">CONTACT</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/img4.png')", // replace with your actual image path in public/
    }}
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-red-900/40 to-black/90" />

  {/* Optional wireframe effect */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmYwMDAwIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] animate-[scroll_20s_linear_infinite]" />
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-6">
    <div className="mb-8 text-8xl animate-pulse">🃏</div>
    <h1 className="text-8xl md:text-9xl font-bold mb-6 glitch-text text-black font-iceland">
      THE GAME
    </h1>
    <p className="text-2xl md:text-3xl text-cyan mb-4 font-mono">
      SURVIVAL OF THE FITTEST
    </p>
    <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
      Welcome, Player. In this world, every line of code is a weapon. Every bug is a trap. And every project... is a death game.
    </p>
    <div className="flex gap-6 justify-center">
      <a
        href="#missions"
        className="px-8 py-4 bg-danger text-white font-bold rounded-lg hover:scale-110 transition-transform duration-200 hover-glow font-iceland text-xl"
      >
        ENTER GAME ♠
      </a>
      <Link
        to="/game"
        className="px-8 py-4 bg-cyan text-black font-bold rounded-lg hover:scale-110 transition-transform duration-200 hover-glow font-iceland text-xl"
      >
        PLAY ARCADE 🎮
      </Link>
    </div>
  </div>

  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="text-danger text-4xl">↓</div>
  </div>
</section>


        {/* Profile Section */}
        <section id="profile" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan/5 to-black" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 className="text-6xl font-bold mb-16 text-center text-danger font-iceland glitch-text">
              ♦ PLAYER PROFILE ♦
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="border border-danger/30 p-8 rounded-lg bg-black/40 backdrop-blur-sm hover:border-danger transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]">
                  <div className="text-cyan font-mono mb-4 text-sm">// IDENTITY</div>
                  <h3 className="text-4xl font-bold text-white mb-2">Nikhitha K</h3>
                  <p className="text-xl text-danger font-iceland mb-4">Aspiring Full Stack Developer</p>
                  <p className="text-white/70 leading-relaxed">
                    I’m just a quiet, introverted coder, trying to figure out if I 
                    actually belong in tech or if I’m just here to make it look like 
                    I know what I’m doing. Currently knee-deep in DSA (because 
                    apparently that’s a thing I need to get good at?), learning some 
                    web dev stuff, and occasionally pretending to understand Unity and 
                    Godot. I like to think I’m creative, but I haven’t really figured 
                    out how to turn that into anything real yet.<br></br>
                    <br></br>
                    Game dev? Nah, I’m more of a “play games, maybe watch game design 
                    tutorials” kind of person than an actual creator. I like the idea of 
                    designing stuff, but I’m not quite there yet, and that’s okay.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-cyan/30 p-4 rounded-lg bg-black/40 text-center">
                    <div className="text-3xl font-bold text-cyan">99%</div>
                    <div className="text-sm text-white/60 font-mono">LOST</div>
                  </div>
                  <div className="border border-cyan/30 p-4 rounded-lg bg-black/40 text-center">
                    <div className="text-3xl font-bold text-cyan">1%</div>
                    <div className="text-sm text-white/60 font-mono">HOPEFUL</div>
                  </div>
                  <div className="border border-cyan/30 p-4 rounded-lg bg-black/40 text-center">
                    <div className="text-3xl font-bold text-cyan">100%</div>
                    <div className="text-sm text-white/60 font-mono">CHAI</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full aspect-square rounded-lg border-4 border-danger overflow-hidden hover:scale-105 transition-transform duration-300">
  <img
    src="/img3.png"
    alt="Level"
    className="object-cover w-full h-full"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-danger/10 to-cyan/10"></div>
</div>

                
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="missions" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-danger/5 to-black" />
          <div className="container mx-auto max-w-7xl relative z-10">
            <h2 className="text-6xl font-bold mb-6 text-center text-danger font-iceland glitch-text">
              ♠ SURVIVAL MISSIONS ♠
            </h2>
            <p className="text-center text-cyan text-xl mb-16 font-mono">
              Each project is a game. Complete them all to survive.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative border border-cyan/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm hover:border-danger transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    animation: hoveredProject === index ? 'card-flip 0.6s ease-in-out' : '',
                  }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="absolute top-4 right-4 text-4xl">{project.image}</div>
                  
                  <div className={`inline-block px-3 py-1 rounded text-xs font-bold mb-4 ${
                    project.difficulty === 'EXTREME' ? 'bg-danger text-white' :
                    project.difficulty === 'HARD' ? 'bg-orange-500 text-white' :
                    'bg-yellow-500 text-black'
                  }`}>
                    {project.difficulty}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 font-iceland">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="text-cyan text-xs font-mono">// TECH ARSENAL</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 bg-cyan/10 text-cyan rounded border border-cyan/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="flex-1 py-2 bg-danger/20 border border-danger text-danger rounded hover:bg-danger hover:text-white transition-all duration-200 text-sm font-bold text-center"
                    >
                      VIEW CODE
                    </a>
                    <a 
                      href={project.demo}
                      className="flex-1 py-2 bg-cyan/20 border border-cyan text-cyan rounded hover:bg-cyan hover:text-black transition-all duration-200 text-sm font-bold text-center"
                    >
                      LIVE DEMO
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="arsenal" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan/5 to-black" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 className="text-6xl font-bold mb-6 text-center text-danger font-iceland glitch-text">
              ⚔️ WEAPON ARSENAL ⚔️
            </h2>
            <p className="text-center text-cyan text-xl mb-16 font-mono">
              Every skill is a weapon. Master them to survive the game.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="border border-cyan/30 rounded-lg p-6 bg-black/40 backdrop-blur-sm hover:border-danger transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{skill.weapon.split(' ')[0]}</span>
                      <div>
                        <div className="text-xl font-bold text-white">{skill.name}</div>
                        <div className="text-sm text-cyan font-iceland">{skill.weapon}</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-danger">{skill.level}%</div>
                  </div>
                  
                  <div className="relative h-3 bg-black rounded-full overflow-hidden border border-cyan/30">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-danger to-cyan transition-all duration-1000 ease-out group-hover:animate-pulse"
                      style={{ 
                        width: `${skill.level}%`,
                        boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Arcade Section */}
        <section id="arcade" className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-b from-danger/20 via-black to-cyan/20" />
            <div className="blood-splatter" />
          </div>
          
          <div className="max-w-4xl w-full text-center relative z-10">
            <div className="mb-8 animate-pulse">
              <span className="text-6xl">♠</span>
              <span className="text-6xl mx-4">♣</span>
              <span className="text-6xl">♥</span>
              <span className="text-6xl mx-4">♦</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-danger mb-6 glitch-text font-iceland">
              ⚠️ SURVIVAL ARCADE
            </h2>
            
            <div className="font-iceland text-cyan text-2xl mb-4">
              &gt;&gt;&gt; CLASSIFIED SIMULATION DETECTED &lt;&lt;&lt;
            </div>
            
            <div className="bg-black/60 border-2 border-danger p-8 mb-8 hover-glow">
              <h3 className="text-3xl font-bold text-white mb-4 font-iceland">
                SHAPESHIFTER PROTOCOL
              </h3>
              
              <div className="text-left space-y-3 text-white/80 mb-6">
                <p className="font-mono">
                  <span className="text-danger">⚠ THREAT LEVEL:</span> CRITICAL
                </p>
                <p className="font-mono">
                  <span className="text-cyan">► MISSION:</span> Identify alien impostors among the populace
                </p>
                <p className="font-mono">
                  <span className="text-cyan">► OBJECTIVE:</span> Detect all shapeshifters before time expires
                </p>
                <p className="font-mono">
                  <span className="text-danger">⚠ WARNING:</span> Eliminating humans will cost lives
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="bg-danger/20 border border-danger p-3">
                  <div className="text-danger font-bold">FEATURES</div>
                  <div className="text-white/70">Full 3D WebGL Experience</div>
                </div>
                <div className="bg-cyan/20 border border-cyan p-3">
                  <div className="text-cyan font-bold">TECH STACK</div>
                  <div className="text-white/70">Three.js / React Three Fiber</div>
                </div>
                <div className="bg-danger/20 border border-danger p-3">
                  <div className="text-danger font-bold">DIFFICULTY</div>
                  <div className="text-white/70">NIGHTMARE</div>
                </div>
                <div className="bg-cyan/20 border border-cyan p-3">
                  <div className="text-cyan font-bold">LIVES</div>
                  <div className="text-white/70">3 Attempts</div>
                </div>
              </div>

              <Link 
                to="/game"
                className="inline-block px-12 py-4 bg-danger text-white text-2xl font-bold rounded-lg hover:scale-110 transition-transform duration-200 hover-glow relative overflow-hidden group font-iceland"
              >
                <span className="relative z-10">ENTER THE GAME</span>
                <div className="absolute inset-0 bg-gradient-to-r from-danger via-red-700 to-danger opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            <div className="font-mono text-danger text-sm animate-pulse">
              ⚠ NO RESPAWNS. NO SECOND CHANCES. SURVIVE OR PERISH. ⚠
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-danger/5 to-black" />
          <div className="container mx-auto max-w-2xl relative z-10">
            <h2 className="text-6xl font-bold mb-6 text-center text-danger font-iceland glitch-text">
              📡 EMERGENCY BROADCAST 📡
            </h2>
            <p className="text-center text-cyan text-xl mb-16 font-mono">
              *STATIC* ...Need backup? Send transmission... *STATIC*
            </p>

            <div className="border border-danger/30 rounded-lg p-8 bg-black/60 backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-cyan text-sm font-mono mb-2">// CALLSIGN</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-black border border-cyan/30 rounded text-white focus:border-danger focus:outline-none transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-cyan text-sm font-mono mb-2">// FREQUENCY</label>
                  <input
                    type="email"
                    placeholder="your.email@survivor.com"
                    className="w-full px-4 py-3 bg-black border border-cyan/30 rounded text-white focus:border-danger focus:outline-none transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-cyan text-sm font-mono mb-2">// TRANSMISSION</label>
                  <textarea
                    rows={6}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-black border border-cyan/30 rounded text-white focus:border-danger focus:outline-none transition-colors font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-danger text-white font-bold rounded-lg hover:scale-105 transition-transform duration-200 hover-glow font-iceland text-xl"
                >
                  SEND TRANSMISSION ⚡
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-cyan/20">
                <div className="text-center text-white/60 text-sm font-mono mb-4">
                  // ALTERNATIVE CHANNELS
                </div>
                <div className="flex justify-center gap-6">
                  <a href="#" className="text-cyan hover:text-danger transition-colors text-2xl">
                    📧
                  </a>
                  <a href="#" className="text-cyan hover:text-danger transition-colors text-2xl">
                    💼
                  </a>
                  <a href="#" className="text-cyan hover:text-danger transition-colors text-2xl">
                    🐙
                  </a>
                  <a href="#" className="text-cyan hover:text-danger transition-colors text-2xl">
                    🐦
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-danger/20 bg-black/80">
          <div className="container mx-auto text-center">
            <p className="text-white/40 font-mono text-sm mb-4">
              © 2025 THE GAME. All survivors reserved.
            </p>
            <p className="text-danger/60 font-iceland text-xs">
              ♠ Remember: In this game, the only way out is through ♣
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
