import { Calendar, RefreshCw } from 'lucide-react'

export default function Header({ lastUpdate }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="text-left">
        <h1 className="text-2xl font-semibold text-slate-900">Genel Bakış</h1>
        <p className="text-sm text-slate-500 mt-0.5">Tüm depoların anlık durumu</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
        >
          <Calendar size={16} />
          {lastUpdate}
        </button>
        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
        >
          <RefreshCw size={16} />
        </button>
        <button
          type="button"
          className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <RefreshCw size={16} />
          Yenile
        </button>
      </div>
    </div>
  )
}
