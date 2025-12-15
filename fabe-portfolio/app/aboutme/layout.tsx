'use client';
import Link from 'next/link';
import styles from '../../components/styles/aboutme.module.css';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/aboutme/education', label: 'Education' },
  { href: '/aboutme/skills', label: 'Skills' },
  { href: '/aboutme/experience', label: 'Experience' },
];

export default function AboutMeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
        <div className={styles.buttonDivider}>
          {links.map(({ href , label}) => (
            <Link 
              key={href} 
              href={href} 
              className={`${styles.buttonLink} ${pathname === href ? styles.active : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className={styles.childrenDivider}>{children}</div>
    </div>
    
  )
}