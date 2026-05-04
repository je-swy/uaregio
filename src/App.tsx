import { useState } from "react";
import type { Region } from "./types";
import { regions } from "./data/regions";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import RegionList from "./components/RegionList/RegionList";

function App() {
  const [selected, setSelected] = useState<Region | null>(regions[0]);

  return (
    <div>
      <Header />
      <Hero />
      <RegionList
        regions={regions}
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}

export default App;
