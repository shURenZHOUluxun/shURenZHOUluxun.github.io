import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from './styles/aboutme.module.css';

export default function AboutMe() {
    return (
        <div id={styles.aboutme}>
            <h2 className="h2">About Me</h2>
            <p className="description">Hello! I&apos;m Fabe Jiayi Zeng, a software engineer passionate about web development and design. This is my personal website where I share my projects and interests.</p>
            <ul className="Contact-info">
                <li className={styles.contactitem}>
                    <MdEmail className={styles.icon}/>
                    <p>Email: zengjiayifabe@outlook.com</p>
                </li>
                <li className={styles.contactitem}>
                    <a href="https://www.linkedin.com/in/jiayi-zeng-0207/">
                        <FaLinkedin className={styles.icon}/>
                        <p>LinkedIn: Click Here</p>
                    </a>
                    </li>
                <li className={styles.contactitem}>
                    <a href="https://github.com/shURenZHOUluxun" >
                        <FaGithub className={styles.icon}/>
                        <p>Github: Click Here</p>
                    </a>
                </li>
            </ul>
            <Image alt="about me" width={400} height={400} src="https://content.codecademy.com/articles/github-pages-via-web-app/happy-ice-cream.gif" />
        </div>
    );

}