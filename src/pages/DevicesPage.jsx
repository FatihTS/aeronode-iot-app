import { useEffect, useState, useCallback } from 'react'
import { Cpu, Plus, Trash2 } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import DeviceRegisterForm from '../components/DeviceRegisterForm'
import { apiJson } from '../api/client'

export default function DevicesPage() {
  const [devices, setDevices] = useState([])
  const [depots, setDepots] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState('')

  const loadDevices = useCallback(async () => {
    try {
      const { devices: list } = await apiJson('/devices')
      setDevices(list)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadDevices()
    apiJson('/depots')
      .then(({ depots: list }) => setDepots(list))
      .catch(() => {})
  }, [loadDevices])

  async function handleDelete(id) {
    if (!window.confirm('Bu cihazı silmek istediğinize emin misiniz?')) return
    try {
      await apiJson(`/devices/${id}`, { method: 'DELETE' })
      loadDevices()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <PageHeader
          title="Cihazlar"
          subtitle="LoRaWAN cihazlarını ChirpStack üzerinden kaydedin ve depolarla eşleştirin"
        />
        <button
          type="button"
          onClick={() => setShowForm((v) => !v)}
          disabled={depots.length === 0}
          className="flex items-center gap-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg px-3.5 py-2 hover:bg-blue-700 disabled:opacity-50"
        >
          <Plus size={16} />
          Cihaz Kaydet
        </button>
      </div>

      {depots.length === 0 && (
        <p className="text-sm text-amber-600 bg-amber-50 rounded-lg px-3 py-2 mb-4">
          Cihaz kaydetmeden önce Depolar sayfasından en az bir depo eklemelisiniz.
        </p>
      )}

      {showForm && (
        <DeviceRegisterForm
          depots={depots}
          onClose={() => setShowForm(false)}
          onRegistered={() => {
            setShowForm(false)
            loadDevices()
          }}
        />
      )}

      {error && <p className="text-sm text-red-500 bg-red-50 rounded-lg px-3 py-2 mb-4">{error}</p>}

      {loading ? (
        <p className="text-sm text-slate-400">Yükleniyor...</p>
      ) : devices.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-10 text-center text-slate-400">
          Henüz kayıtlı cihaz yok.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {devices.map((device) => {
            const depot = depots.find((d) => d.id === device.depot_id)
            return (
              <div key={device.id} className="bg-white rounded-xl border border-slate-200 p-4 text-left">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Cpu size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800 leading-tight">{device.name}</p>
                      <p className="text-xs text-slate-400">
                        {depot ? `${depot.name} — ${depot.location}` : 'Depo bulunamadı'}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(device.id)}
                    className="text-slate-300 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <p className="text-xs text-slate-400 font-mono">DevEUI: {device.dev_eui}</p>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
