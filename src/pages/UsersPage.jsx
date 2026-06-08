import PageHeader from '../components/PageHeader'
import { useAuth } from '../auth/AuthContext'

export default function UsersPage() {
  const { user } = useAuth()

  return (
    <>
      <PageHeader title="Kullanıcılar" subtitle="Sisteme erişimi olan hesaplar" />
      <div className="bg-white rounded-xl border border-slate-200 p-5 text-left">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-slate-400 text-xs border-b border-slate-100">
              <th className="text-left font-medium pb-3 pr-4">Kullanıcı Adı</th>
              <th className="text-left font-medium pb-3">Rol</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-50 last:border-0">
              <td className="py-3 pr-4 text-slate-800 font-medium">{user?.username}</td>
              <td className="py-3 text-slate-500">{user?.role}</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-slate-400 mt-4">
          Kullanıcı yönetimi (ekleme, rol atama) ileride buraya eklenecek.
        </p>
      </div>
    </>
  )
}
