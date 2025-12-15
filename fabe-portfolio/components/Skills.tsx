import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaReact, FaNode, FaJava, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { BiSolidFileCss, BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiCplusplus, SiMongodb} from "react-icons/si";
import styles from './styles/skills.module.css';
import { TbSql, TbBrandMysql, TbBrandThreejs } from "react-icons/tb";
import Animation from "./animation/SlideUpAnimation";

export default function Skills() {
    return (
        <Animation>
            <div className={styles.skills}>
                <h2 className="h2">Skills</h2>
                <ul className={styles.skillList}>
                    <li className={styles.skillItem}>
                        <p>Programming Languages</p>
                        <IoLogoJavascript title="JavaScript" className={styles.icon}/>
                        <BiLogoTypescript title="TypeScript" className={styles.icon}/>
                        <FaPython title="Python" className={styles.icon}/>
                        <FaJava title="Java" className={styles.icon}/>
                        <SiCplusplus title="C++" className={styles.icon}/>
                        
                    </li>
                    <li className={styles.skillItem}>
                        <p>Databases</p>
                        <TbSql title="SQL" className={styles.icon}/>
                        <TbBrandMysql title="MySQL" className={styles.icon}/>
                        <SiMongodb title="MongoDB" className={styles.icon}/>
                    </li>
                    
                    
                    
                    <li className={styles.skillItem}>
                        <p>Tools</p>
                        <FaGitAlt title="Git" className={styles.icon}/>
                        <FaDocker title="Docker" className={styles.icon}/>
                        <FaAws title="AWS" className={styles.icon}/>
                    </li>
                    <li className={styles.skillItem}>
                        <p>Web Development</p>
                        <TiHtml5 title="HTML" className={styles.icon}/>
                        <BiSolidFileCss title="CSS" className={styles.icon}/>
                        <FaReact title="React.js" className={styles.icon}/>
                        <FaNode title="Node.js" className={styles.icon}/>
                        <SiNextdotjs title="Next.js" className={styles.icon}/>
                        <TbBrandThreejs title="Three.js" className={styles.icon}/>
                    </li>
                </ul>
            </div>
        </Animation>
    );
};