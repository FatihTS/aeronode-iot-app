import PageHeader from '../components/PageHeader'
import ComingSoonCard from '../components/ComingSoonCard'

export default function NotificationsPage() {
  return (
    <>
      <PageHeader title="Bildirimler" subtitle="E-posta ve SMS bildirim tercihleri" />
      <ComingSoonCard
        title="Bildirim ayarları yakında"
        description="Kritik seviye uyarıları için e-posta/SMS bildirim kuralları burada yönetilecek."
      />
    </>
  )
}
