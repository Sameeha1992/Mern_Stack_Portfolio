import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="aspect-[4/5] bg-brand-gray border border-white/10 rounded-[3rem] overflow-hidden relative shadow-2xl">
                        <img
                            src="/profile.jpg"
                            alt="Sameeha Ansari"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-brand-orange/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <div className="absolute -bottom-6 -right-6 glass border border-white/20 p-8 rounded-3xl bg-brand-gray/80 backdrop-blur-md">
                        <h4 className="text-4xl font-black text-brand-orange">MERN</h4>
                        <p className="text-xs uppercase tracking-widest text-gray-500">Expertise Stack</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="section-title">
                        Logic Meets <span className="text-brand-orange italic underline decoration-brand-orange/20">Design.</span>
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Architecting robust full-stack solutions with a focus on the MERN ecosystem. Driven by the challenge of bridging complex backend logic with intuitive, high-performance frontend experiences.
                    </p>
                    <p className="text-lg text-gray-400">
                        Committed to writing clean, maintainable code and implementing modern architectural patterns to solve real-world digital problems. My background in MBA allows me to bridge the gap between business objectives and technical implementation.
                    </p>

                    <div className="grid grid-cols-2 gap-8 pt-6">
                        <div>
                            <h5 className="text-brand-orange font-bold text-2xl">Full Stack</h5>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">End-to-End Ownership</p>
                        </div>
                        <div>
                            <h5 className="text-brand-orange font-bold text-2xl">Optimization</h5>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">Performance First</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
