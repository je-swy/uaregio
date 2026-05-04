import styles from "./Footer.module.scss";

const LINKS = ["Про проєкт", "Джерела даних", "API", "Контакти"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <div className={styles.logoMark}>
              <svg
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9L9 3L15 9L9 15L3 9Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="9" r="2.5" fill="white" />
              </svg>
            </div>
            <span className={styles.logoText}>УкрРегіон</span>
          </div>
          <span className={styles.copy}>
            © 2026 Прототип. Всі дані є ілюстративними.
          </span>
        </div>

        <div className={styles.right}>
          {LINKS.map((link) => (
            <span key={link} className={styles.link}>
              {link}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.sources}>
        Дані: Держстат України · Міністерство фінансів · USAID · UNICEF ·
        Євросоюз · 2026
      </div>
    </footer>
  );
}
