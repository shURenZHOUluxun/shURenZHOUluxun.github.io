import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"

export default function Contact() {
    return (
        <>
            <h1>
                Get in Touch 
            </h1>
               
            <a href="https://www.linkedin.com/in/jiayi-zeng-0207/" rel="noopener noreferrer" target="_blank">
                <FaLinkedin />
                <p>LinkedIn: Click Here</p>
            </a>


            <a href="https://github.com/shURenZHOUluxun" rel="noopener noreferrer" target="_blank">
                <FaGithub />
                <p>Github: Click Here</p>
            </a>
            
        </>
    )
}