import { AlertTriangle, ShieldCheck } from 'lucide-react'

const severityStyles = {
  critical: {
    bg: 'bg-red-50',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
  },
  warning: {
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
  },
}

export default function AlarmsPanel({ alarms, systemStatus }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-5 text-left">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-900">Son Alarmlar</h2>
          <button type="button" className="text-blue-600 text-sm font-medium hover:underline">
            Tümünü Gör
          </button>
        </div>

        <ul className="space-y-3">
          {alarms.map((alarm) => {
            const style = severityStyles[alarm.severity] ?? severityStyles.warning
            return (
              <li key={alarm.id} className={`flex items-start gap-3 rounded-lg p-3 ${style.bg}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${style.iconBg}`}>
                  <AlertTriangle size={16} className={style.iconColor} />
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

      <div className="bg-white rounded-xl border border-slate-200 p-5 text-left">
        <h2 className="font-semibold text-slate-900 mb-4">Sistem Durumu</h2>
        <div className="flex items-center gap-3 bg-emerald-50 rounded-lg p-3">
          <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
            <ShieldCheck size={18} className="text-emerald-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-emerald-600 leading-tight">Tüm sistemler çalışıyor</p>
            <p className="text-xs text-slate-400 mt-0.5">Son güncelleme: {systemStatus.lastUpdate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
