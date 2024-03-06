import styles from './Footer.module.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
        <Link href="/">
        <p>Go to Homepage</p>
      </Link>
      </footer>
    </>
  )
}
