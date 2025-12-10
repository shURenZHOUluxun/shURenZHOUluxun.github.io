import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skillstemp";

export default function HomePage() {
    return (
        <div className="body">
            <Header />
            <h1>Hello! Bonjour! I&apos;m Fabe</h1>
            <p>Welcome to my website!</p>
            <AboutMe />
            <Education/>
            <Skills />
            <Projects />
            <Experience />
            <Footer />
        </div>
    );
}