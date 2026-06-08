import Header from '../components/Header'
import StatCards from '../components/StatCards'
import LevelDistributionCard from '../components/LevelDistributionCard'
import LevelHistoryCard from '../components/LevelHistoryCard'
import DepotMapCard from '../components/DepotMapCard'
import DepotsTable from '../components/DepotsTable'
import AlarmsPanel from '../components/AlarmsPanel'
import {
  summaryStats,
  levelDistribution,
  levelHistory,
  depots,
  mapClusters,
  recentAlarms,
  systemStatus,
} from '../data/mockData'

export default function DashboardPage() {
  return (
    <>
      <Header lastUpdate="20 Mayıs 2025 14:30" />

      <StatCards stats={summaryStats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <LevelDistributionCard data={levelDistribution} average={summaryStats.averageLevel} />
        <LevelHistoryCard data={levelHistory} />
        <DepotMapCard clusters={mapClusters} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <DepotsTable depots={depots} />
        </div>
        <AlarmsPanel alarms={recentAlarms} systemStatus={systemStatus} />
      </div>
    </>
  )
}
