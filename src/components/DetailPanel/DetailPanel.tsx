import type { Region } from "../../types";
import styles from "./DetailPanel.module.scss";

interface Props {
  region: Region;
}

const STAT_DELTAS = ["+14% vs 2023", "+22% vs 2023", "+6 нових у 2024"];

const CATEGORY_COLORS: Record<string, string> = {
  Інфраструктура: "#378ADD",
  Освіта: "#7F77DD",
  "Соціальний розвиток": "#D4537E",
  Агро: "#1D9E75",
};

export default function DetailPanel({ region }: Props) {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.icon}>{region.icon}</div>
        <div>
          <div className={styles.title}>{region.name}</div>
          <div className={styles.sub}>{region.description}</div>
        </div>
      </div>

      <div className={styles.stats}>
        {region.metrics.map((m, i) => (
          <div key={m.label} className={styles.stat}>
            <div className={styles.statLabel}>{m.label}</div>
            <div className={styles.statValue}>{m.value}</div>
            <div className={styles.statDelta}>{STAT_DELTAS[i]}</div>
          </div>
        ))}
      </div>

      <div className={styles.programsTitle}>Ключові програми розвитку</div>
      <div className={styles.programList}>
        {region.programs.map((program) => (
          <div key={program} className={styles.programItem}>
            <div className={styles.programDot} />
            {program}
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.programsTitle}>
        Міжнародні програми та міста-побратими
      </div>

      {region.twinCities?.length > 0 && (
        <div className={styles.twinCities}>
          {region.twinCities.map((city) => (
            <span key={city} className={styles.twinCity}>
              {city}
            </span>
          ))}
        </div>
      )}

      <div className={styles.cityProgramList}>
        {region.cityPrograms.map((p) => (
          <div key={p.title} className={styles.cityCard}>
            <div className={styles.cityCardTop}>
              <span
                className={styles.categoryBadge}
                style={{
                  backgroundColor: `${CATEGORY_COLORS[p.category] ?? "#888"}18`,
                  color: CATEGORY_COLORS[p.category] ?? "#888",
                }}
              >
                {p.category}
              </span>
              <span className={styles.cityCardYear}>{p.year}</span>
            </div>
            <div className={styles.cityCardTitle}>{p.title}</div>
            <div className={styles.cityCardDesc}>{p.description}</div>
            <div className={styles.cityCardDonor}>Донор: {p.donor}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
