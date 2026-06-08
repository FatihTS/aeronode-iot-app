import { Construction } from 'lucide-react'

export default function ComingSoonCard({ title, description }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-10 text-center flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
        <Construction size={20} className="text-slate-400" />
      </div>
      <p className="font-medium text-slate-700">{title}</p>
      <p className="text-sm text-slate-400 max-w-sm">{description}</p>
    </div>
  )
}
