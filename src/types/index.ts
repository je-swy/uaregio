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
}