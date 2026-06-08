import PageHeader from '../components/PageHeader'
import DepotsTable from '../components/DepotsTable'
import { depots } from '../data/mockData'

export default function DepotsPage() {
  return (
    <>
      <PageHeader title="Depolar" subtitle="Tüm su depolarının listesi ve durumu" />
      <DepotsTable depots={depots} />
    </>
  )
}
