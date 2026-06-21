import { useState } from 'react'
import { apiJson } from '../api/client'

export default function DepotRegisterForm({ onRegistered, onClose }) {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const { depot } = await apiJson('/depots', {
        method: 'POST',
        body: JSON.stringify({ name: name.trim(), location: location.trim() }),
      })
      onRegistered(depot)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 text-left mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-slate-900">Yeni Depo Ekle</h2>
        <button type="button" onClick={onClose} className="text-sm text-slate-400 hover:text-slate-600">
          Kapat
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-600 mb-1.5">Depo Adı</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Depo 6"
            className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-600 mb-1.5">Konum</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            placeholder="Sincan - Batı Bölgesi"
            className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
          />
        </div>

        {error && (
          <p className="sm:col-span-2 text-sm text-red-500 bg-red-50 rounded-lg px-3 py-2">{error}</p>
        )}

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2.5 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {submitting ? 'Kaydediliyor...' : 'Depo Ekle'}
          </button>
        </div>
      </form>
    </div>
  )
}
