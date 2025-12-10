import Image from "next/image";

export default function AboutMe() {
    return (
        <div id="about-me">
            <h2 className="h2">About Me</h2>
            <p className="description">Hello! I&apos;m Fabe Jiayi Zeng, a software engineer passionate about web development and design. This is my personal website where I share my projects and interests.</p>
            <ul className="Contact-info">
            <li className="contact-item">Email: zengjiayifabe@outlook.com</li>
            <li className="contact-item"><a href="https://www.linkedin.com/in/jiayi-zeng-0207/">LinkedIn: Click Here</a></li>
            <li className="contact-item"><a href="https://github.com/shURenZHOUluxun">Github: Click Here</a></li>
            </ul>
            {/* <Image alt="about me" width={400} height={400} src="https://content.codecademy.com/articles/github-pages-via-web-app/happy-ice-cream.gif" /> */}
        </div>
    );

}