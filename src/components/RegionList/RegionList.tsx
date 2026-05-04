import { useState } from "react";
import type { Region } from "../../types";
import RegionCard from "../RegionCard/RegionCard";
import styles from "./RegionList.module.scss";

interface Props {
  regions: Region[];
  selected: Region | null;
  onSelect: (region: Region) => void;
}

const FILTERS = ["Всі", "Захід", "Центр", "Південь", "Північ"];

export default function RegionList({ regions, selected, onSelect }: Props) {
  const [activeFilter, setActiveFilter] = useState("Всі");

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Регіони</h2>
        <span className={styles.sectionLink}>Всі регіони →</span>
      </div>
      <p className={styles.sectionSub}>
        Оберіть регіон для детального перегляду показників
      </p>

      <div className={styles.filterRow}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.chip} ${activeFilter === f ? styles.active : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {regions.map((region) => (
          <RegionCard
            key={region.id}
            region={region}
            isSelected={selected?.id === region.id}
            onClick={() => onSelect(region)}
          />
        ))}
      </div>
    </section>
  );
}
