export const summaryStats = {
  totalDepots: 12,
  averageLevel: 58,
  normal: 8,
  low: 2,
  critical: 2,
}

export const levelDistribution = [
  { name: '%70 - %100 (Yüksek)', value: 4, color: '#3b82f6' },
  { name: '%30 - %70 (Orta)', value: 4, color: '#22c55e' },
  { name: '%10 - %30 (Düşük)', value: 2, color: '#f59e0b' },
  { name: '%0 - %10 (Kritik)', value: 2, color: '#ef4444' },
]

export const levelHistory = [
  { date: '14 May', 'Depo 1': 88, 'Depo 2': 58, 'Depo 3': 28, 'Depo 4': 12 },
  { date: '15 May', 'Depo 1': 84, 'Depo 2': 55, 'Depo 3': 24, 'Depo 4': 10 },
  { date: '16 May', 'Depo 1': 86, 'Depo 2': 60, 'Depo 3': 30, 'Depo 4': 14 },
  { date: '17 May', 'Depo 1': 80, 'Depo 2': 52, 'Depo 3': 22, 'Depo 4': 9 },
  { date: '18 May', 'Depo 1': 83, 'Depo 2': 57, 'Depo 3': 26, 'Depo 4': 11 },
  { date: '19 May', 'Depo 1': 85, 'Depo 2': 50, 'Depo 3': 20, 'Depo 4': 8 },
  { date: '20 May', 'Depo 1': 82, 'Depo 2': 45, 'Depo 3': 18, 'Depo 4': 6 },
]

export const depots = [
  {
    id: 1,
    name: 'Depo 1',
    location: 'Gölbaşı - Çiftlik Alanı',
    level: 82,
    change: 5,
    trend: 'up',
    status: 'Normal',
    battery: 85,
    signal: 4,
    lastReading: '20.05.2025 14:25',
    coords: [39.85, 32.75],
  },
  {
    id: 2,
    name: 'Depo 2',
    location: 'Keçiören - Tepe Mahallesi',
    level: 45,
    change: 3,
    trend: 'down',
    status: 'Orta',
    battery: 62,
    signal: 3,
    lastReading: '20.05.2025 14:20',
    coords: [40.01, 33.2],
  },
  {
    id: 3,
    name: 'Depo 3',
    location: 'Kazan - Kuzey Bölgesi',
    level: 18,
    change: 7,
    trend: 'down',
    status: 'Düşük',
    battery: 40,
    signal: 2,
    lastReading: '20.05.2025 14:15',
    coords: [40.18, 32.4],
  },
  {
    id: 4,
    name: 'Depo 4',
    location: 'Çankaya - Merkez',
    level: 6,
    change: 2,
    trend: 'down',
    status: 'Kritik',
    battery: 25,
    signal: 4,
    lastReading: '20.05.2025 14:10',
    coords: [39.93, 32.85],
  },
  {
    id: 5,
    name: 'Depo 5',
    location: 'Polatlı - Güney Bölgesi',
    level: 65,
    change: 4,
    trend: 'up',
    status: 'Orta',
    battery: 70,
    signal: 4,
    lastReading: '20.05.2025 14:05',
    coords: [39.68, 33.0],
  },
]

export const mapClusters = [
  { id: 'c1', count: 3, status: 'normal', coords: [40.18, 32.45] },
  { id: 'c2', count: 3, status: 'normal', coords: [40.08, 33.35] },
  { id: 'c3', count: 3, status: 'normal', coords: [40.28, 33.5] },
  { id: 'c4', count: 2, status: 'low', coords: [39.83, 32.3] },
  { id: 'c5', count: 1, status: 'center', coords: [39.93, 32.85] },
  { id: 'c6', count: 2, status: 'critical', coords: [39.63, 33.25] },
  { id: 'c7', count: 3, status: 'normal', coords: [39.68, 32.8] },
]

export const recentAlarms = [
  {
    id: 1,
    title: 'Depo 4 - Kritik Seviye',
    message: "Su seviyesi %10'un altında",
    time: '14:10',
    severity: 'critical',
  },
  {
    id: 2,
    title: 'Depo 3 - Düşük Seviye',
    message: "Su seviyesi %20'nin altında",
    time: '14:15',
    severity: 'warning',
  },
  {
    id: 3,
    title: 'Depo 8 - Kritik Seviye',
    message: "Su seviyesi %10'un altında",
    time: '13:50',
    severity: 'critical',
  },
]

export const systemStatus = {
  allOperational: true,
  lastUpdate: '20.05.2025 14:30',
}
