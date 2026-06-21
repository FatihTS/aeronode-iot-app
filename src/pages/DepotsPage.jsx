import { useEffect, useState, useCallback } from 'react'
import { Plus } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import DepotsTable from '../components/DepotsTable'
import DepotRegisterForm from '../components/DepotRegisterForm'
import { apiJson } from '../api/client'

export default function DepotsPage() {
  const [depots, setDepots] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [error, setError] = useState('')

  const loadDepots = useCallback(async () => {
    try {
      const { depots: list } = await apiJson('/depots')
      setDepots(list)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadDepots()
  }, [loadDepots])

  async function handleDelete(depot) {
    if (!window.confirm(`"${depot.name}" silinsin mi?`)) return
    try {
      await apiJson(`/depots/${depot.id}`, { method: 'DELETE' })
      loadDepots()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <PageHeader title="Depolar" subtitle="Tüm su depolarının listesi ve durumu" />
        <button
          type="button"
          onClick={() => setShowForm((v) => !v)}
          className="flex items-center gap-1.5 text-sm font-medium text-white bg-blue-600 rounded-lg px-3.5 py-2 hover:bg-blue-700"
        >
          <Plus size={16} />
          Depo Ekle
        </button>
      </div>

      {showForm && (
        <DepotRegisterForm
          onClose={() => setShowForm(false)}
          onRegistered={() => {
            setShowForm(false)
            loadDepots()
          }}
        />
      )}

      {error && <p className="text-sm text-red-500 bg-red-50 rounded-lg px-3 py-2 mb-4">{error}</p>}

      {loading ? (
        <p className="text-sm text-slate-400">Yükleniyor...</p>
      ) : (
        <DepotsTable depots={depots} onDelete={handleDelete} />
      )}
    </>
  )
}
