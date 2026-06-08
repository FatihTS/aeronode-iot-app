import { Database, Droplet, CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react'

export default function StatCards({ stats }) {
  const cards = [
    {
      label: 'Toplam Depo',
      value: stats.totalDepots,
      sub: 'Aktif',
      subColor: 'text-blue-600',
      icon: Database,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      label: 'Ortalama Seviye',
      value: `%${stats.averageLevel}`,
      sub: 'Tüm depolar',
      subColor: 'text-slate-400',
      icon: Droplet,
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-500',
    },
    {
      label: 'Normal',
      value: stats.normal,
      sub: `%${Math.round((stats.normal / stats.totalDepots) * 100)}`,
      subColor: 'text-emerald-500',
      icon: CheckCircle2,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-500',
    },
    {
      label: 'Düşük Seviye',
      value: stats.low,
      sub: `%${Math.round((stats.low / stats.totalDepots) * 100)}`,
      subColor: 'text-amber-500',
      icon: AlertTriangle,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-500',
    },
    {
      label: 'Kritik Seviye',
      value: stats.critical,
      sub: `%${Math.round((stats.critical / stats.totalDepots) * 100)}`,
      subColor: 'text-red-500',
      icon: AlertCircle,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
      {cards.map(({ label, value, sub, subColor, icon: Icon, iconBg, iconColor }) => (
        <div
          key={label}
          className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3 text-left"
        >
          <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
            <Icon size={20} className={iconColor} />
          </div>
          <div>
            <p className="text-sm text-slate-500">{label}</p>
            <p className="text-xl font-semibold text-slate-900 leading-tight">{value}</p>
            <p className={`text-xs font-medium ${subColor}`}>{sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
