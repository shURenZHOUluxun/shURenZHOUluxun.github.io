
import Link from 'next/link';
import styles from '../../components/styles/aboutme.module.css';

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
        <div className={styles.buttonDivider}>
            <Link href="./" className={styles.buttonLink}>
                Education
            </Link>
            <Link href="/aboutme/skills" className={styles.buttonLink}>
                Skills
            </Link>
            <Link href="/aboutme/experience" className={styles.buttonLink}>
                Experience
            </Link>
        </div>
        <div className={styles.childrenDivider}>{children}</div>
    </div>
    
  )
}