import type { Region } from "../../types";
import styles from "./DetailPanel.module.scss";

interface Props {
  region: Region;
}

const STAT_DELTAS = ["+14% vs 2023", "+22% vs 2023", "+6 нових у 2024"];

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
    </div>
  );
}
