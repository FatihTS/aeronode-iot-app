import PageHeader from '../components/PageHeader'
import ComingSoonCard from '../components/ComingSoonCard'

export default function ReportsPage() {
  return (
    <>
      <PageHeader title="Raporlar" subtitle="Periyodik su tüketimi ve seviye raporları" />
      <ComingSoonCard
        title="Raporlama modülü yakında"
        description="Depo bazlı haftalık/aylık raporlar ve dışa aktarma seçenekleri burada yer alacak."
      />
    </>
  )
}
