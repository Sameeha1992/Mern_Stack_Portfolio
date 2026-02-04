import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            name: "FINERA",
            type: "Fintech Architecture",
            description: "A comprehensive fintech application that connects users with loan opportunities based on interest rates. Implemented secure OTP verification using Redis for optimized performance.",
            tech: ["React", "Express", "Node", "MongoDB", "Redis"],
            github: "https://github.com/Sameeha1992",
            image: "/finera.png",
            color: "#FF6B00"
        },
        {
            name: "Wrist Style",
            type: "E-commerce Infrastructure",
            description: "A premium e-commerce platform for high-end branded watches. Engineered with SSR capabilities and deployed on AWS for enterprise-grade scalability and uptime.",
            tech: ["HTML5", "CSS3", "EJS", "Node", "Express", "AWS"],
            github: "https://github.com/Sameeha1992",
            image: "/wriststyle.png",
            color: "#FF6B00"
        }
    ];

    return (
        <section id="projects" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="space-y-4">
                        <h2 className="section-title">Critical <span className="text-brand-orange">Deployments.</span></h2>
                        <p className="text-gray-400 text-lg">Detailed case studies of full-stack engineering challenges.</p>
                    </div>
                    <a href="https://github.com/Sameeha1992" target="_blank" className="text-brand-orange font-bold hover:underline mb-2">View Github Archive →</a>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group bg-brand-gray border border-white/5 rounded-[3rem] overflow-hidden hover:border-brand-orange/20 transition-all duration-500"
                        >
                            <div className="h-80 w-full relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-brand-orange/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="p-12 space-y-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">{project.type}</span>
                                        <h3 className="text-3xl font-bold mt-2">{project.name}</h3>
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" className="p-3 bg-brand-black rounded-full border border-white/5 hover:border-brand-orange transition-colors"><Github size={20} /></a>
                                        <a href="#" target="_blank" className="p-3 bg-brand-black rounded-full border border-white/5 hover:border-brand-orange transition-colors"><ExternalLink size={20} /></a>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-brand-black border border-white/10 rounded-full text-[10px] uppercase font-bold text-gray-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
