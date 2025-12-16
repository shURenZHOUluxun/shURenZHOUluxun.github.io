import styles from './styles/experience.module.css';
import Image from 'next/image';

export default function Experience() {

    return (
        <div className="experience">
            <h2 className={styles.h2}>Professional Experience</h2>
            <ul className="experience-list">
                <li className={styles.experienceItem}>
                    <p>EduTrigger Inc. Jul 2023 - Feb 2024 Front-end intern Toronto </p>
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
                    <p> Front-end WeMap-Tencent (2021-2022) https://lbs.qq.com/visualization/</p>
                    <Image className={styles.image} src="/wemap.jpg" alt="WeMap-Tencent" width={400} height={300} />
                    <Image className={styles.image} src="/wemap2.png" alt="WeMap-Tencent" width={400} height={300} />
                </li>
                   
            </ul>
        </div>
    );
}   