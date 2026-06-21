import { Calendar, Droplet, Activity, AlertCircle } from 'lucide-react'

export default function ReportSummaryCards({ period, averageLevel, totalConsumption, totalAlarms }) {
  const cards = [
    {
      label: 'Rapor Dönemi',
      value: period,
      sub: 'Seçili aralık',
      subColor: 'text-slate-400',
      icon: Calendar,
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-500',
    },
    {
      label: 'Ortalama Seviye',
      value: `%${averageLevel}`,
      sub: 'Tüm depolar',
      subColor: 'text-sky-500',
      icon: Droplet,
      iconBg: 'bg-sky-100',
      iconColor: 'text-sky-500',
    },
    {
      label: 'Toplam Tüketim',
      value: `${totalConsumption.toLocaleString('tr-TR')} L`,
      sub: 'Tahmini',
      subColor: 'text-blue-600',
      icon: Activity,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      label: 'Toplam Alarm',
      value: totalAlarms,
      sub: 'Bu dönemde',
      subColor: 'text-red-500',
      icon: AlertCircle,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-500',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
