import styles from './Hero.module.scss'

interface HeroStat {
  num: string
  label: string
}

const STATS: HeroStat[] = [
  { num: '24',        label: 'області' },
  { num: '₴2.4 трлн', label: 'сукупний ВРП' },
  { num: '340+',      label: 'активних програм' },
  { num: '↑12%',     label: 'ріст інвестицій' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.tag}>
          <div className={styles.tagDot} />
          Оновлено: квітень 2025
        </div>

        <h1 className={styles.title}>
          Економічний розвиток регіонів України
        </h1>

        <p className={styles.description}>
          Прозора аналітика, інвестиційні програми та податкові
          показники по кожному регіону країни
        </p>

        <div className={styles.actions}>
          <button className={styles.btnPrimary}>Переглянути регіони</button>
          <button className={styles.btnGhost}>Завантажити звіт</button>
        </div>

        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}