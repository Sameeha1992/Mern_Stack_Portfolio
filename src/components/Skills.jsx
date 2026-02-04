import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
        },
        {
            title: "Backend & Logic",
            skills: ["Node.js", "Express.js", "Redis", "Nginx", "DSA"]
        },
        {
            title: "Database",
            skills: ["MongoDB", "SQL"]
        },
        {
            title: "Tools & Infrastructure",
            skills: ["AWS", "Nginx", "Git", "GitHub", "Figma", "Docker (Learning)"]
        }
    ];

    return (
        <section id="skills" className="py-32 px-6 bg-brand-gray/30">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="section-title">Technical <span className="text-brand-orange">Arsenal.</span></h2>
                    <p className="text-gray-400 max-w-2xl text-lg">A curated list of technologies I use to build scalable, high-performance applications.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 border border-white/5 bg-brand-black rounded-3xl hover:border-brand-orange/30 transition-colors group"
                        >
                            <h3 className="text-brand-orange font-bold text-xl mb-6 uppercase tracking-widest">{cat.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-brand-gray border border-white/5 rounded-xl text-sm font-medium hover:text-brand-orange hover:border-brand-orange/20 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
