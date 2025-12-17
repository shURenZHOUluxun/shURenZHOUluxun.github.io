import styles from './styles/experience.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Experience() {

    return (
        <div className="experience">
            <h2 className={styles.h2}>Professional Experience</h2>
            <ul className="experience-list">
                <li className={styles.experienceItem}>
                    <div className={styles.description}>
                        <h3 className={styles.h3}>Frontend Intern @ EduTrigger Inc. Toronto(2023-2024) </h3>
                        <ul className={styles.responsibilities}>
                            <li>Built LMS/CMS features, Auth0 authentication, and developer tools using Vue.js and OpenEdx.</li>
                        </ul>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} src="/lms.jpg" alt="learning manage system" width={200} height={300} />
                    </div>
                    
                    {/* <ul>
                        <li>
                            <p>Developed and implemented authentication and authorization functions using Vue.js and Auth0 platform, ensuring a secure and
user-friendly experience for Victoria Eclass users.</p>
                        </li>
                        <li>
                            <p>Utilized Firebase Database to store and analyze chat data, contributing to data-driven decision-making.</p>
                        </li>
                        <li>
                            <p>Built a Learning Management System (LMS) and Content Management System (CMS) platform for an educational client based on the OpenEdx platform.</p>
                        </li>
                        <li>
                            <p>Investigated and documented the installation process and steps to run the platform from scratch, providing a valuable resource for new OpenEdx developers and saving 50% of their time.</p>
                        </li>
                        <li>
                            <p>Investigated and documented the installation process and steps to run the platform from scratch, providing a valuable resource for new OpenEdx developers and saving 50% of their time.</p>
                        </li>
                    </ul>                     */}

                </li>
                {/* give each a picture */}
                <li className={styles.experienceItem}>
                    <div className={styles.description}>
                        <h3 className={styles.h3}> Frontend Intern @ Tencent WeMap (2021-2022) </h3>
                        <ul className={styles.responsibilities}>
                            {/* <li>
                                <p>Built stylized 3D buildings using Three.js and base map data, enhancing map visualization appeal.</p>
                            </li>
                            <li>
                                <p>Developed screenshot feature for Keep’s motion-track sharing via html2canvas, tripling development efficiency.</p>
                            </li>
                            <li>
                                <p>Migrated map engine to a new Three.js-based architecture; optimized logic and reduced module coupling.</p>
                            </li>
                            <li>
                                <p>Integrated map engine with Blue Whale DevOps CI/CD and TKE, cutting deployment time by 70%.</p>
                            </li>
                            <li>
                                <p>Implemented NeRF-based 3D scene reconstruction on Google Colab, reducing runtime cost by 90%.</p>
                            </li> */}
                            <li>
                                <Link 
                                    href="https://lbs.qq.com/visualization/" 
                                    className={styles.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    >WeMap</Link> is Tencent’s 3D mapping engine used in navigation and motion-tracking apps.
                                {/* WeMap is Tencent’s 3D mapping engine used in navigation and motion-tracking apps.: https://lbs.qq.com/visualization/ */}
                            </li>
                            <li>I contributed to advanced 3D map visualization features using Three.js, engine migration, CI/CD automation, and NeRF-based scene reconstruction.</li>
                            {/* <li>Built advanced 3D map visualization features using Three.js, DevOps tooling, and NeRF-based reconstruction to enhance performance and developer efficiency for Tencent WeMap.</li> */}
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