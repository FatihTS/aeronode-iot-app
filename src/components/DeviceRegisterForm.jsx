import { useState } from 'react'
import { apiJson } from '../api/client'

export default function DeviceRegisterForm({ depots, onRegistered, onClose }) {
  const [depotId, setDepotId] = useState(depots[0]?.id ?? '')
  const [name, setName] = useState('')
  const [devEui, setDevEui] = useState('')
  const [appKey, setAppKey] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const { device } = await apiJson('/devices', {
        method: 'POST',
        body: JSON.stringify({
          devEui: devEui.trim(),
          name: name.trim(),
          appKey: appKey.trim(),
          depotId: Number(depotId),
        }),
      })
      onRegistered(device)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 text-left mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-slate-900">Yeni Cihaz Kaydet</h2>
        <button type="button" onClick={onClose} className="text-sm text-slate-400 hover:text-slate-600">
          Kapat
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-600 mb-1.5">Depo</label>
          <select
            value={depotId}
            onChange={(e) => setDepotId(e.target.value)}
            className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400 bg-white"
          >
            {depots.map((depot) => (
              <option key={depot.id} value={depot.id}>
                {depot.name} — {depot.location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-slate-600 mb-1.5">Cihaz Adı</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Su Seviyesi Sensörü"
            className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-600 mb-1.5">DevEUI</label>
          <input
            value={devEui}
            onChange={(e) => setDevEui(e.target.value)}
            required
            placeholder="0011223344556677"
            maxLength={16}
            className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400 font-mono"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-600 mb-1.5">AppKey</label>
          <input
            value={appKey}
            onChange={(e) => setAppKey(e.target.value)}
            required
            placeholder="00112233445566778899AABBCCDDEEFF"
            maxLength={32}
            className="w-full px-3 py-2.5 text-sm rounded-lg border border-slate-200 outline-none focus:border-blue-400 font-mono"
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
            {submitting ? 'Kaydediliyor...' : "ChirpStack'e Kaydet"}
          </button>
        </div>
      </form>
    </div>
  )
}
