import styles from './Header.module.scss'

const NAV_ITEMS = ['Огляд', 'Інвестиції', 'Програми', 'Звіти']

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoMark}>
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L9 3L15 9L9 15L3 9Z" stroke="white" strokeWidth="1.5" />
            <circle cx="9" cy="9" r="2.5" fill="white" />
          </svg>
        </div>
        <div>
          <div className={styles.logoText}>УкрРегіон</div>
          <div className={styles.logoSub}>Економічний моніторинг</div>
        </div>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <span
            key={item}
            className={`${styles.navItem} ${item === 'Огляд' ? styles.active : ''}`}
          >
            {item}
          </span>
        ))}
      </nav>

      <div className={styles.badge}>2024 дані</div>
    </header>
  )
}