import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="section-title">Initiate <span className="text-brand-orange">Collaboration.</span></h2>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                            Currently available for high-impact roles in Kochi or remote worldwide. Let's discuss architecture and deployment.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:sameehaansari011292@gmail.com" className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email Interface</p>
                                    <p className="text-xl font-bold">sameehaansari011292@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Base Location</p>
                                    <p className="text-xl font-bold">Kochi, Kerala, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href="https://github.com/Sameeha1992" target="_blank" className="p-4 bg-brand-gray border border-white/5 rounded-2xl hover:border-brand-orange transition-colors"><Github size={24} /></a>
                            <a href="https://www.linkedin.com/in/sameeha-ansari/" target="_blank" className="p-4 bg-brand-gray border border-white/5 rounded-2xl hover:border-brand-orange transition-colors"><Linkedin size={24} /></a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-brand-gray/50 border border-white/5 p-12 rounded-[3rem] backdrop-blur-xl relative"
                    >
                        <div className="orange-glow w-full h-full inset-0 opacity-5" />

                        <form
                            action="https://formsubmit.co/sameehaansari011292@gmail.com"
                            method="POST"
                            className="space-y-8 relative z-10"
                        >
                            <input type="text" name="_honey" style={{ display: 'none' }} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value={window.location.href} />

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Full Name</label>
                                <input name="name" type="text" required className="w-full bg-brand-black border border-white/10 rounded-xl p-4 outline-none focus:border-brand-orange transition-colors text-white font-medium" placeholder="Alex Chen" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                                <input name="email" type="email" required className="w-full bg-brand-black border border-white/10 rounded-xl p-4 outline-none focus:border-brand-orange transition-colors text-white font-medium" placeholder="alex@company.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Message Scope</label>
                                <textarea name="message" required rows="4" className="w-full bg-brand-black border border-white/10 rounded-xl p-4 outline-none focus:border-brand-orange transition-colors text-white font-medium" placeholder="Describe the project or role scope..."></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full py-5 flex items-center justify-center gap-3 active:scale-95 transform transition-transform"
                            >
                                Transmit Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
