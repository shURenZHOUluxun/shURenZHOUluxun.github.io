import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiProfileFill } from "react-icons/ri";
import styles from './styles/aboutmehome.module.css';
import { style } from "motion/react-client";

export default function AboutMe() {
    return (
        <div id={styles.aboutme}>
            {/* <h2 className="h2">About Me</h2> */}
            <p className={styles.description}>Hello! I&apos;m Fabe Jiayi Zeng, 
                a software engineer passionate about web development and design. 
                This is my personal website where I share my projects and interests.
            </p>
            <ul className={styles.contactInfo}>
                <li className={styles.contactitem}>
                    <MdEmail className={styles.icon}/>
                    <p>Email: zengjiayifabe@outlook.com</p>
                </li>
                <li className={styles.contactitem}>
                    <a href="https://www.linkedin.com/in/jiayi-zeng-0207/" rel="noopener noreferrer" target="_blank">
                        <FaLinkedin className={styles.icon}/>
                        <p>LinkedIn: Click Here</p>
                    </a>
                    </li>
                <li className={styles.contactitem}>
                    <a href="https://github.com/shURenZHOUluxun" rel="noopener noreferrer" target="_blank">
                        <FaGithub className={styles.icon}/>
                        <p>Github: Click Here</p>
                    </a>
                </li>
                <li className={styles.contactitem}>
                    <a href="/Fabe_Zeng_CV.pdf" download="Fabe_Zeng_CV.pdf" rel="noopener noreferrer">
                        <RiProfileFill className={styles.icon}/>
                        <p>Download CV: Click Here</p>
                    </a>
                </li>
            </ul>
            <Image alt="about me" width={400} height={400} src="https://content.codecademy.com/articles/github-pages-via-web-app/happy-ice-cream.gif" />
        </div>
    );

}