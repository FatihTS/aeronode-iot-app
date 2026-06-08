import PageHeader from '../components/PageHeader'
import DepotMapCard from '../components/DepotMapCard'
import { mapClusters } from '../data/mockData'

export default function MapPage() {
  return (
    <>
      <PageHeader title="Harita" subtitle="Depoların coğrafi konumları" />
      <div className="h-[calc(100vh-180px)]">
        <DepotMapCard clusters={mapClusters} />
      </div>
    </>
  )
}
