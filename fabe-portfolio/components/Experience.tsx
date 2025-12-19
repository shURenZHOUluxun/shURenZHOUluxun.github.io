import styles from './styles/experience.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Experience() {

    return (
        <div className={styles.experience}>
            <h2 className={styles.h2}>Professional Experience</h2>
            <ul className="experience-list">
                <li className={styles.experienceItem}>
                    <div className={styles.description}>
                        <h3 className={styles.h3}>AI Evaluation Specialist <br/>@ Outlier AI <br/> (2025) </h3>
                        <ul className={styles.responsibilities}>
                            <li>Evaluated 500+ model responses, including outputs in multiple programming languages, across 7 quality dimensions with 95%+ consistency.</li>
                        </ul>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} src="/outlier.svg" alt="outlier ai company" width={400} height={300} />
                    </div>
                </li>
                <li className={styles.experienceItem}>
                    <div className={styles.description}>
                        <h3 className={styles.h3}>Frontend Intern<br/> @ EduTrigger Inc. Toronto <br/> (2023-2024) </h3>
                        <ul className={styles.responsibilities}>
                            <li>Built LMS/CMS features, Auth0 authentication, and developer tools using Vue.js and OpenEdx.</li>
                        </ul>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} src="/lms.jpg" alt="learning manage system" width={200} height={300} />
                    </div>

                </li>
                {/* give each a picture */}
                <li className={styles.experienceItem}>
                    <div className={styles.description}>
                        <h3 className={styles.h3}> Frontend Intern<br/> @ Tencent WeMap <br />(2021-2022) </h3>
                        <ul className={styles.responsibilities}>
                            <li>
                                <Link 
                                    href="https://lbs.qq.com/visualization/" 
                                    className={styles.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    >WeMap</Link> is Tencent’s 3D mapping engine used in navigation and motion-tracking apps.
                            </li>
                            <li>I contributed to advanced 3D map visualization features using Three.js, engine migration, CI/CD automation, and NeRF-based scene reconstruction.</li>
                        </ul>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} src="/wemap.jpg" alt="WeMap-Tencent" width={400} height={300} />
                        <Image className={styles.image} src="/wemap2.png" alt="WeMap-Tencent" width={400} height={300} />
                    </div>
                    
                    
                </li>
                   
            </ul>
        </div>
    );
}   