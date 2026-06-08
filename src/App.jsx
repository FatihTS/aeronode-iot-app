import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ProtectedRoute from './auth/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import DepotsPage from './pages/DepotsPage'
import MapPage from './pages/MapPage'
import AlarmsPage from './pages/AlarmsPage'
import ReportsPage from './pages/ReportsPage'
import DevicesPage from './pages/DevicesPage'
import NotificationsPage from './pages/NotificationsPage'
import SettingsPage from './pages/SettingsPage'
import UsersPage from './pages/UsersPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="depolar" element={<DepotsPage />} />
        <Route path="harita" element={<MapPage />} />
        <Route path="alarmlar" element={<AlarmsPage />} />
        <Route path="raporlar" element={<ReportsPage />} />
        <Route path="cihazlar" element={<DevicesPage />} />
        <Route path="bildirimler" element={<NotificationsPage />} />
        <Route path="ayarlar" element={<SettingsPage />} />
        <Route path="kullanicilar" element={<UsersPage />} />
      </Route>
    </Routes>
  )
}

export default App
