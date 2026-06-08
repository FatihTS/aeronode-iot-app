import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

export default function LevelDistributionCard({ data, average }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 text-left">
      <h2 className="font-semibold text-slate-900 mb-4">Su Seviyesi Dağılımı</h2>

      <div className="flex items-center gap-6">
        <div className="relative w-44 h-44 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={2}
                strokeWidth={0}
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-semibold text-slate-900">%{average}</span>
            <span className="text-xs text-slate-400">Ortalama</span>
          </div>
        </div>

        <ul className="space-y-3 text-sm">
          {data.map((entry) => (
            <li key={entry.name} className="flex items-start gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                style={{ backgroundColor: entry.color }}
              />
              <div>
                <p className="text-slate-600 leading-tight">{entry.name}</p>
                <p className="text-slate-400 text-xs">{entry.value} Depo</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
