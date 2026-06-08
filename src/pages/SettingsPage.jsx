import PageHeader from '../components/PageHeader'
import ComingSoonCard from '../components/ComingSoonCard'

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="Ayarlar" subtitle="Sistem ve hesap tercihleri" />
      <ComingSoonCard
        title="Ayarlar sayfası yakında"
        description="Eşik değerleri, ölçüm aralıkları ve entegrasyon ayarları burada yapılandırılacak."
      />
    </>
  )
}
