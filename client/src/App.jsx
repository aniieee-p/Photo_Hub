import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import AlbumPage from './pages/AlbumPage';
import SettingsPage from './pages/SettingsPage';
import AppShell from './components/AppShell';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', height: '100vh', gap: '16px',
      background: 'var(--bg)', color: 'var(--accent)',
      fontFamily: "'Pacifico', cursive", fontSize: '1.1rem'
    }}>
      <span style={{ fontSize: '3rem', animation: 'spin 1.5s linear infinite', display: 'inline-block' }}>🌸</span>
      Loading your space, Anieee…
      <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
    </div>
  );
  return user ? children : <Navigate to="/auth" replace />;
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Toaster position="top-right" toastOptions={{ style: { background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' } }} />
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<PrivateRoute><AppShell /></PrivateRoute>}>
              <Route index element={<DashboardPage />} />
              <Route path="albums" element={<DashboardPage view="albums" />} />
              <Route path="albums/:id" element={<AlbumPage />} />
              <Route path="favorites" element={<DashboardPage view="favorites" />} />
              <Route path="trash" element={<DashboardPage view="trash" />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
