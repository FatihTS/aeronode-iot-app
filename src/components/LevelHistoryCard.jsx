import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { ChevronDown } from 'lucide-react'

const series = [
  { key: 'Depo 1', color: '#3b82f6' },
  { key: 'Depo 2', color: '#22c55e' },
  { key: 'Depo 3', color: '#f59e0b' },
  { key: 'Depo 4', color: '#ef4444' },
]

export default function LevelHistoryCard({ data }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 text-left">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-slate-900">Seviye – Zaman Grafiği</h2>
        <button
          type="button"
          className="flex items-center gap-1.5 text-sm text-slate-500 border border-slate-200 rounded-lg px-3 py-1.5 hover:bg-slate-50"
        >
          Son 7 Gün
          <ChevronDown size={14} />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eef0f3" vertical={false} />
          <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fontSize: 12, fill: '#94a3b8' }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}%`}
            domain={[0, 100]}
          />
          <Tooltip formatter={(value) => `%${value}`} />
          {series.map(({ key, color }) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={color}
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>

      <div className="flex items-center gap-5 mt-2 text-xs text-slate-500">
        {series.map(({ key, color }) => (
          <span key={key} className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
            {key}
          </span>
        ))}
      </div>
    </div>
  )
}
