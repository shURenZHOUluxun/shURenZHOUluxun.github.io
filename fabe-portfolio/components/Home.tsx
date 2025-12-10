import AboutMe from "./AboutMe";

export default function HomePage() {
    return (
        <div className="body">
        <header>
            <div className="logo">JZ</div>
            <nav>
            <a href="#">Home</a>
            <a href="#about-me">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#footer">Contact</a>
            </nav>
        </header>
        <h1>Hello! Bonjour! I&apos;m Fabe</h1>
        <p>Welcome to my website!</p>
        <AboutMe />
        <div className="education">
            <h2 className="h2">Education</h2>
            <ul className="education-list">
            <li className="education-item">M.Eng. in Mechanical Engineering, University of Toronto</li>
            <li className="education-item">B.Sc. in Computer Science, University of Toronto</li>
            </ul>
        </div>
        <div className="skills">
            <h2 className="h2">Skills</h2>
            <ul className="skills-list">
            <li className="skill-item">Programming Languages: Python, JavaScript, Java, C++</li>
            <li className="skill-item">Web Development: HTML, CSS, React, Node.js</li>
            <li className="skill-item">Databases: MySQL, MongoDB</li>
            <li className="skill-item">Tools: Git, Docker, AWS</li>
            </ul>
        </div>
        <div id="projects">
            <h2 className="h2">My Projects</h2>
            <ul className="project-list"> 
            <li className="project-item"><a href="./games/rockPaperScissors.html">Project 1: Rock Paper Scissors Game</a></li>
            <li className="project-item"><a>Project 2: E-commerce Platform</a></li>
            <li className="project-item"><a>Project 3: Blogging Application</a></li>
            <li className="project-item"><a>Project 4: Mario Game</a></li>
            <li className="project-item"><a>Project 5: Redit Client</a></li>
            </ul>
        </div>
        <div className="experience">
            <h2 className="h2">Professional Experience</h2>
            <ul className="experience-list">
            <li className="experience-item">Software Engineer Intern at Tech Company A (Summer 2023)</li>
            <li className="experience-item">Research Assistant at University of Toronto (2022-2023)</li>
            </ul>
        </div>

        <footer id="footer">
            <h3 className="h3">Get in Touch</h3>
            <p>Email: zengjiayifabe@outlook.com</p>
            <a href="https://www.linkedin.com/in/jiayi-zeng-0207/">LinkedIn: Click Here</a>
            <a href="https://github.com/shURenZHOUluxun">Github: Click Here</a>
        </footer>
        </div>

    );
}