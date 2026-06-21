import { Download } from 'lucide-react'
import { downloadCsv } from '../utils/csv'

const levelBarColors = {
  Normal: 'bg-blue-500',
  Orta: 'bg-emerald-500',
  Düşük: 'bg-amber-500',
  Kritik: 'bg-red-500',
}

function levelStatus(avg) {
  if (avg >= 70) return 'Normal'
  if (avg >= 30) return 'Orta'
  if (avg >= 10) return 'Düşük'
  return 'Kritik'
}

export default function ReportsTable({ reports, period }) {
  function handleExport() {
    const filename = `aeronode-rapor-${period.toLowerCase().replace(/\s+/g, '-')}.csv`
    downloadCsv(
      filename,
      ['Depo', 'Konum', 'Ortalama Seviye (%)', 'Min (%)', 'Maks (%)', 'Alarm Sayısı', 'Tüketim (L)'],
      reports.map((r) => [r.name, r.location, r.avgLevel, r.minLevel, r.maxLevel, r.alarmCount, r.consumption]),
    )
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 text-left">
      <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
        <h2 className="font-semibold text-slate-900">Depo Bazlı Rapor</h2>
        <button
          type="button"
          onClick={handleExport}
          className="flex items-center gap-1.5 text-sm text-blue-600 border border-blue-200 rounded-lg px-3 py-1.5 hover:bg-blue-50"
        >
          <Download size={14} />
          CSV Dışa Aktar
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-400 text-xs border-b border-slate-100">
              <th className="text-left font-medium pb-3 pr-4">Depo</th>
              <th className="text-left font-medium pb-3 pr-4">Ortalama Seviye</th>
              <th className="text-left font-medium pb-3 pr-4">Min / Maks</th>
              <th className="text-left font-medium pb-3 pr-4">Alarm Sayısı</th>
              <th className="text-left font-medium pb-3">Tüketim</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r) => {
              const status = levelStatus(r.avgLevel)
              return (
                <tr key={r.id} className="border-b border-slate-50 last:border-0">
                  <td className="py-3 pr-4">
                    <p className="text-slate-800 font-medium leading-tight">{r.name}</p>
                    <p className="text-xs text-slate-400">{r.location}</p>
                  </td>
                  <td className="py-3 pr-4 w-40">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${levelBarColors[status]}`}
                          style={{ width: `${r.avgLevel}%` }}
                        />
                      </div>
                      <span className="text-slate-600 text-xs w-9 text-right">%{r.avgLevel}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4 text-slate-500 text-xs">
                    %{r.minLevel} – %{r.maxLevel}
                  </td>
                  <td className="py-3 pr-4">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                        r.alarmCount > 0 ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'
                      }`}
                    >
                      {r.alarmCount}
                    </span>
                  </td>
                  <td className="py-3 text-slate-600 text-xs">{r.consumption.toLocaleString('tr-TR')} L</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
