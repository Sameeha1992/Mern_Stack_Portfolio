import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-heading font-black"
                >
                    SAMEEHA<span className="text-brand-orange">.</span>
                </motion.div>

                <div className="hidden md:flex space-x-8 items-center">
                    {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-semibold hover:text-brand-orange transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-brand-orange text-brand-orange text-xs font-bold rounded-full hover:bg-brand-orange hover:text-white transition-all"
                    >
                        RESUME
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
