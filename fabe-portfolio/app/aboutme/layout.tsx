
import styles from '../components/styles/aboutme.module.css'

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
        <div className={styles.divider}>
            <button className="back-button">Education</button>
        </div>
        <div>{children}</div>
    </div>
    
  )
}