import { NavLink } from 'react-router-dom'
import {
  Database,
  LayoutDashboard,
  Warehouse,
  Map,
  Bell,
  FileText,
  Cpu,
  MessageSquare,
  Settings,
  Users,
  LogOut,
} from 'lucide-react'
import { useAuth } from '../auth/AuthContext'

const navItems = [
  { label: 'Genel Bakış', icon: LayoutDashboard, path: '/' },
  { label: 'Depolar', icon: Warehouse, path: '/depolar' },
  { label: 'Harita', icon: Map, path: '/harita' },
  { label: 'Alarmlar', icon: Bell, path: '/alarmlar', badge: 3 },
  { label: 'Raporlar', icon: FileText, path: '/raporlar' },
  { label: 'Cihazlar', icon: Cpu, path: '/cihazlar' },
  { label: 'Bildirimler', icon: MessageSquare, path: '/bildirimler' },
  { label: 'Ayarlar', icon: Settings, path: '/ayarlar' },
  { label: 'Kullanıcılar', icon: Users, path: '/kullanicilar' },
]

export default function Sidebar() {
  const { user, logout } = useAuth()
  const initials = user?.username?.slice(0, 2).toUpperCase() ?? '??'

  return (
    <aside className="w-64 shrink-0 bg-slate-900 text-slate-300 flex flex-col h-full">
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
          <Database size={18} className="text-white" />
        </div>
        <div className="text-left">
          <p className="text-white font-semibold leading-tight">AeroNode IoT</p>
          <p className="text-xs text-slate-400 leading-tight">Su Deposu İzleme Sistemi</p>
        </div>
      </div>

      <nav className="flex-1 px-3 mt-2 space-y-1">
        {navItems.map(({ label, icon: Icon, path, badge }) => (
          <NavLink
            key={label}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <Icon size={18} />
            <span className="flex-1 text-left">{label}</span>
            {badge && (
              <span className="text-xs font-semibold bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 pb-4 pt-2 border-t border-slate-800 space-y-1">
        <div className="flex items-center gap-3 px-3 py-2.5">
          <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-white text-sm font-semibold">
            {initials}
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm text-white leading-tight">{user?.username}</p>
            <p className="text-xs text-slate-400 leading-tight">{user?.role}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <LogOut size={18} />
          <span className="flex-1 text-left">Çıkış Yap</span>
        </button>
      </div>
    </aside>
  )
}
