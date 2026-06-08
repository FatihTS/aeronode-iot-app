import PageHeader from '../components/PageHeader'
import { Cpu, Battery } from 'lucide-react'
import { depots } from '../data/mockData'

export default function DevicesPage() {
  return (
    <>
      <PageHeader title="Cihazlar" subtitle="Depolara bağlı sensör ve iletişim modülleri" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {depots.map((depot) => (
          <div key={depot.id} className="bg-white rounded-xl border border-slate-200 p-4 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Cpu size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800 leading-tight">{depot.name} Sensörü</p>
                <p className="text-xs text-slate-400">{depot.location}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Battery size={14} />
                Pil: %{depot.battery}
              </span>
              <span>Son ölçüm: {depot.lastReading}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
