import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookImage, Heart, Trash2, X } from 'lucide-react';
import styles from './Sidebar.module.css';

const links = [
  { to: '/', icon: '🏠', label: 'Dashboard', end: true },
  { to: '/albums', icon: '📚', label: 'Albums' },
  { to: '/favorites', icon: '💖', label: 'Favorites' },
  { to: '/trash', icon: '🗑️', label: 'Trash' },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className={styles.overlay} onClick={onClose} />}
      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        <div className={styles.header}>
          <span className={styles.title}>✨ My Space</span>
          <button className={styles.close} onClick={onClose}><X size={16} /></button>
        </div>
        <nav className={styles.nav}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
              onClick={onClose}
            >
              <span style={{ fontSize: '1.1rem' }}>{l.icon}</span>
              <span>{l.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className={styles.footer}>
          <div className={styles.footerText}>
            🌸 AnieeBuniee 🌸<br />
            made with 💖 for Anieee
          </div>
        </div>
      </aside>
    </>
  );
}
