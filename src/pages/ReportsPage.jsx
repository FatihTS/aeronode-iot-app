import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ReportSummaryCards from '../components/ReportSummaryCards'
import LevelHistoryCard from '../components/LevelHistoryCard'
import ReportsTable from '../components/ReportsTable'
import { depotReports, levelHistory, summaryStats } from '../data/mockData'

const periods = ['Son 7 Gün', 'Son 30 Gün', 'Bu Ay']

export default function ReportsPage() {
  const [period, setPeriod] = useState(periods[0])

  const totalConsumption = depotReports.reduce((sum, r) => sum + r.consumption, 0)
  const totalAlarms = depotReports.reduce((sum, r) => sum + r.alarmCount, 0)

  return (
    <>
      <PageHeader title="Raporlar" subtitle="Depo bazlı performans ve tüketim raporları" />

      <div className="flex justify-end mb-4">
        <div className="relative">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="appearance-none text-sm text-slate-600 border border-slate-200 rounded-lg pl-3 pr-8 py-2 outline-none focus:border-blue-400 bg-white"
          >
            {periods.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          />
        </div>
      </div>

      <ReportSummaryCards
        period={period}
        averageLevel={summaryStats.averageLevel}
        totalConsumption={totalConsumption}
        totalAlarms={totalAlarms}
      />

      <div className="mb-6">
        <LevelHistoryCard data={levelHistory} />
      </div>

      <ReportsTable reports={depotReports} period={period} />
    </>
  )
}
