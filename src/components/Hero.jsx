import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="orange-glow w-[500px] h-[500px] -top-20 -right-20 opacity-20" />
            <div className="orange-glow w-[300px] h-[300px] bottom-10 -left-10 opacity-10" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                        MERN Stack Architect
                    </div>
                    <h1 className="text-6xl md:text-8xl font-heading font-black leading-none mb-6">
                        Architecting <br />
                        Robust <span className="text-brand-orange">Full-Stack</span> Solutions.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed">
                        I architect robust full-stack solutions with a focus on high-performance logic and seamless user experiences.
                    </p>

                    <div className="flex flex-wrap gap-6 items-center">
                        <a href="#projects" className="btn-primary flex items-center gap-2 group">
                            View Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex gap-6 items-center">
                            <a href="https://github.com/Sameeha1992" target="_blank" className="text-gray-400 hover:text-brand-orange transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/sameeha-ansari/" target="_blank" className="text-gray-400 hover:text-brand-orange transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:sameehaansari011292@gmail.com" className="text-gray-400 hover:text-brand-orange transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-brand-gray/50 border border-white/10 p-2 rounded-[3rem] overflow-hidden backdrop-blur-xl">
                        <div className="bg-brand-gray p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
                            <pre className="text-sm font-mono text-gray-300">
                                <code>
                                    {`const developer = {
  name: "Sameeha Ansari",
  role: "Full Stack Architect",
  stack: ["MongoDB", "Express", "React", "Node"],
  tools: ["AWS", "Redis", "Nginx"],
  mindset: "Performance & Scalability"
};

// Ready to build the next
// mission-critical application.`}
                                </code>
                            </pre>
                        </div>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -inset-4 border border-brand-orange/20 rounded-[3.5rem] -z-10 animate-pulse" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
