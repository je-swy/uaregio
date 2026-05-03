import type { Region } from "../../types";
import styles from "./RegionCard.module.scss";

interface Props {
  region: Region;
  isSelected: boolean;
  onClick: () => void;
}

export default function RegionCard({ region, isSelected, onClick }: Props) {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
    >
      <div
        className={styles.accent}
        style={{ backgroundColor: region.color }}
      />

      <div className={styles.cardTop}>
        <div
          className={styles.icon}
          style={{ backgroundColor: `${region.color}18` }}
        >
          {region.icon}
        </div>
        <span className={styles.rank}>#{region.rank} за ВРП</span>
      </div>

      <h3 className={styles.name}>{region.name}</h3>
      <p className={styles.description}>{region.description}</p>

      <div className={styles.metrics}>
        {region.metrics.map((m) => (
          <div key={m.label} className={styles.metric}>
            <span className={styles.metricLabel}>{m.label}</span>
            <div className={styles.barWrap}>
              <div
                className={styles.barFill}
                style={{
                  width: `${m.percent}%`,
                  backgroundColor: region.color,
                }}
              />
            </div>
            <span className={styles.metricValue}>{m.value}</span>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <span
          className={styles.tag}
          style={{
            backgroundColor: `${region.color}18`,
            color: region.color,
          }}
        >
          {region.tag}
        </span>
        <span className={styles.arrow}>Деталі →</span>
      </div>
    </div>
  );
}
