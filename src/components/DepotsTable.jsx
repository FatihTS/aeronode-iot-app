import { useState } from 'react'
import { Search, ChevronDown, Battery, ArrowUp, ArrowDown } from 'lucide-react'

const statusStyles = {
  Normal: 'bg-emerald-100 text-emerald-600',
  Orta: 'bg-amber-100 text-amber-600',
  Düşük: 'bg-orange-100 text-orange-600',
  Kritik: 'bg-red-100 text-red-600',
}

const levelBarColors = {
  Normal: 'bg-blue-500',
  Orta: 'bg-emerald-500',
  Düşük: 'bg-amber-500',
  Kritik: 'bg-red-500',
}

export default function DepotsTable({ depots }) {
  const [query, setQuery] = useState('')

  const filtered = depots.filter((depot) =>
    `${depot.name} ${depot.location}`.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 text-left">
      <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
        <h2 className="font-semibold text-slate-900">Depolar</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Depo adı ara..."
              className="pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400 w-48"
            />
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm text-slate-500 border border-slate-200 rounded-lg px-3 py-2 hover:bg-slate-50"
          >
            Filtrele
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-400 text-xs border-b border-slate-100">
              <th className="text-left font-medium pb-3 pr-4">Depo Adı</th>
              <th className="text-left font-medium pb-3 pr-4">Seviye</th>
              <th className="text-left font-medium pb-3 pr-4">Değişim (24s)</th>
              <th className="text-left font-medium pb-3 pr-4">Son Ölçüm</th>
              <th className="text-left font-medium pb-3 pr-4">Durum</th>
              <th className="text-left font-medium pb-3 pr-4">Pil</th>
              <th className="text-left font-medium pb-3">Sinyal</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((depot) => (
              <tr key={depot.id} className="border-b border-slate-50 last:border-0">
                <td className="py-3 pr-4">
                  <p className="text-slate-800 font-medium leading-tight">{depot.name}</p>
                  <p className="text-xs text-slate-400">{depot.location}</p>
                </td>
                <td className="py-3 pr-4 w-40">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${levelBarColors[depot.status]}`}
                        style={{ width: `${depot.level}%` }}
                      />
                    </div>
                    <span className="text-slate-600 text-xs w-9 text-right">%{depot.level}</span>
                  </div>
                </td>
                <td className="py-3 pr-4">
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-medium ${
                      depot.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
                    }`}
                  >
                    {depot.trend === 'up' ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                    %{depot.change}
                  </span>
                </td>
                <td className="py-3 pr-4 text-slate-500 text-xs">{depot.lastReading}</td>
                <td className="py-3 pr-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[depot.status]}`}>
                    {depot.status}
                  </span>
                </td>
                <td className="py-3 pr-4">
                  <span className="inline-flex items-center gap-1.5 text-slate-500 text-xs">
                    <Battery size={14} />
                    %{depot.battery}
                  </span>
                </td>
                <td className="py-3">
                  <span className="inline-flex items-end gap-0.5 text-emerald-500">
                    {[1, 2, 3, 4].map((bar) => (
                      <span
                        key={bar}
                        className={`w-1 rounded-sm ${bar <= depot.signal ? 'bg-emerald-500' : 'bg-slate-200'}`}
                        style={{ height: `${bar * 3 + 3}px` }}
                      />
                    ))}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-4">
        <button type="button" className="text-blue-600 text-sm font-medium hover:underline">
          Tüm depoları görüntüle →
        </button>
      </div>
    </div>
  )
}
