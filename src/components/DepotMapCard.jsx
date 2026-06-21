import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { divIcon } from 'leaflet'
import { Maximize2 } from 'lucide-react'

const statusColors = {
  normal: '#22c55e',
  low: '#f59e0b',
  critical: '#ef4444',
  center: '#2563eb',
}

function clusterIcon(cluster) {
  const color = statusColors[cluster.status] ?? statusColors.normal
  const size = cluster.status === 'center' ? 34 : 30
  const html =
    cluster.status === 'center'
      ? `<div style="width:${size}px;height:${size}px;border-radius:9999px 9999px 9999px 0;transform:rotate(45deg);background:${color};display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>`
      : `<div style="width:${size}px;height:${size}px;border-radius:9999px;background:${color};color:#fff;font-size:13px;font-weight:600;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.25)">${cluster.count}</div>`

  return divIcon({
    html,
    className: '',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  })
}

export default function DepotMapCard({ clusters }) {
  const center = [39.93, 32.85]

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 text-left flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-slate-900">Depoların Konumu</h2>
      </div>

      <div className="relative flex-1 rounded-lg overflow-hidden min-h-[260px]">
        <MapContainer
          center={center}
          zoom={9}
          scrollWheelZoom={false}
          zoomControl={false}
          className="w-full h-full min-h-[260px]"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {clusters.map((cluster) => (
            <Marker key={cluster.id} position={cluster.coords} icon={clusterIcon(cluster)} />
          ))}
        </MapContainer>

        <button
          type="button"
          className="absolute bottom-3 right-3 z-[1000] w-8 h-8 bg-white rounded-md shadow flex items-center justify-center text-slate-500 hover:text-slate-700"
        >
          <Maximize2 size={15} />
        </button>
      </div>
    </div>
  )
}
