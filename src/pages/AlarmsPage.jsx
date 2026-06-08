import PageHeader from '../components/PageHeader'
import { AlertTriangle } from 'lucide-react'
import { recentAlarms } from '../data/mockData'

const severityStyles = {
  critical: { bg: 'bg-red-50', iconBg: 'bg-red-100', iconColor: 'text-red-500' },
  warning: { bg: 'bg-amber-50', iconBg: 'bg-amber-100', iconColor: 'text-amber-500' },
}

export default function AlarmsPage() {
  return (
    <>
      <PageHeader title="Alarmlar" subtitle="Tüm depolardan gelen uyarılar ve kritik bildirimler" />
      <div className="bg-white rounded-xl border border-slate-200 p-5 text-left">
        <ul className="space-y-3">
          {recentAlarms.map((alarm) => {
            const style = severityStyles[alarm.severity] ?? severityStyles.warning
            return (
              <li key={alarm.id} className={`flex items-start gap-3 rounded-lg p-3 ${style.bg}`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${style.iconBg}`}>
                  <AlertTriangle size={17} className={style.iconColor} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800 leading-tight">{alarm.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{alarm.message}</p>
                </div>
                <span className="text-xs text-slate-400 shrink-0">{alarm.time}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
