export interface CityProgram {
  title: string
  donor: string
  category: string
  description: string
  year: number
}

export interface RegionMetric {
  label: string
  value: string
  percent: number
}

export interface Region {
  id: string
  name: string
  description: string
  icon: string
  tag: string
  rank: number
  color: string
  metrics: RegionMetric[]
  programs: string[]
  cityPrograms: CityProgram[]
  twinCities: string[]
}