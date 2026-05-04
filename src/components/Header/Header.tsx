import { useState, useEffect } from "react";
import styles from "./Header.module.scss";

const NAV_ITEMS: string[] = ["Огляд", "Інвестиції", "Програми", "Звіти"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className={styles.header}>
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
        <div>
          <div className={styles.logoText}>УкрРегіон</div>
          <div className={styles.logoSub}>Економічний моніторинг</div>
        </div>
      </div>

      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <span
            key={item}
            className={`${styles.navItem} ${item === "Огляд" ? styles.active : ""}`}
          >
            {item}
          </span>
        ))}
      </nav>

      <div className={styles.right}>
        <div className={styles.badge}>2024 дані</div>
        <button
          className={styles.burger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          <span
            className={`${styles.burgerLine} ${isOpen ? styles.open : ""}`}
          />
          <span
            className={`${styles.burgerLine} ${isOpen ? styles.open : ""}`}
          />
          <span
            className={`${styles.burgerLine} ${isOpen ? styles.open : ""}`}
          />
        </button>
      </div>
      <div
        className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ""}`}
      >
        {NAV_ITEMS.map((item) => (
          <span
            key={item}
            className={`${styles.mobileNavItem} ${item === "Огляд" ? styles.active : ""}`}
            onClick={() => setIsOpen(false)}
          >
            {item}
          </span>
        ))}
      </div>
    </header>
  );
}
