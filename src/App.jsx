import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-brand-black min-h-screen">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />

            <footer className="py-12 px-6 border-t border-white/5 text-center">
                <p className="text-gray-500 text-sm font-medium">
                    &copy; {new Date().getFullYear()} Sameeha Ansari. All Systems Operational.
                </p>
            </footer>
        </div>
    )
}

export default App
