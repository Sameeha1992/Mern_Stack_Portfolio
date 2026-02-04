import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="py-32 px-6 bg-brand-gray/20">
            <div className="max-w-7xl mx-auto">
                <h2 className="section-title mb-20 text-center">Academic <span className="text-brand-orange">Pathway.</span></h2>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-12 border-l-2 border-brand-orange/30 pb-12"
                    >
                        <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 bg-brand-orange rounded-full border-4 border-brand-black" />
                        <div className="bg-brand-gray border border-white/5 p-10 rounded-3xl hover:border-brand-orange/20 transition-all">
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Post Graduation</span>
                            <h3 className="text-3xl font-bold mt-2 mb-1">MBA (Master of Business Administration)</h3>
                            <p className="text-xl text-gray-400 font-medium">MSN IMT College, Chavara</p>
                            <div className="mt-6 flex flex-wrap gap-4 items-center">
                                <span className="px-4 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold uppercase">Strategic Management</span>
                                <span className="px-4 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold uppercase">Business Architecture</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative pl-12 border-l-2 border-transparent"
                    >
                        <div className="absolute top-0 left-0 -translate-x-1/2 w-6 h-6 bg-brand-gray rounded-full border-4 border-white/10" />
                        <div className="bg-brand-gray/50 border border-white/5 p-10 rounded-3xl opacity-60">
                            <h3 className="text-2xl font-bold mb-1 italic">Transitioning to Systems Engineering</h3>
                            <p className="text-lg text-gray-500">Focused on Full Stack Development & Distributed Systems</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
