import Image from 'next/image';
import styles from'./styles/education.module.css';
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
    return (
        <div className="education">
            <ul className={styles.educationList}>
                <Image src='/UofT_Logo.png' alt="University of Toronto Logo" width={300} height={123.17} />
                <li className={styles.educationItem}>
                    <FaGraduationCap className={styles.icon} />
                    <p>M.Eng. in Mechanical Engineering, University of Toronto</p>
                </li>
                <li className={styles.educationItem}>
                    <FaGraduationCap className={styles.icon} />
                    <p>B.Sc. in Computer Science, University of Toronto</p>
                </li>
            </ul>
            
            {/* <h2 className="h2">Education</h2> */}
            <div className={styles.imageContainer}>
                <Image 
                    className={styles.image} 
                    src='/uoft_grass.webp' 
                    alt="University of Toronto Logo" 
                    width={400} 
                    height={270.66} />
            </div>

            
        </div>
    );
}