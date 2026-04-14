import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Sun, Moon, Settings, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { mediaUrl } from '../utils/api';
import styles from './Navbar.module.css';

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <button className={styles.menuBtn} onClick={onMenuClick} aria-label="Toggle menu">
          <Menu size={20} />
        </button>
        <span className={styles.logo}>
          <span className={styles.logoEmoji}>🌸</span>
          AnieeBuniee's PhotoHub
        </span>
        <div className={styles.stickers}>
          <span className={styles.sticker + ' ' + styles.sticker1}>✨ Anieee</span>
          <span className={styles.sticker + ' ' + styles.sticker2}>💜 Anishaaaa</span>
          <span className={styles.sticker + ' ' + styles.sticker3}>🌟 AnieeBuniee</span>
        </div>
      </div>
      <div className={styles.right}>
        <button className={styles.iconBtn} onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className={styles.avatarWrap} ref={ref}>
          <button className={styles.avatar} onClick={() => setOpen(o => !o)}>
            {user?.avatar
              ? <img src={mediaUrl(user.avatar)} alt={user.name} />
              : <span>{user?.name?.[0]?.toUpperCase()}</span>}
          </button>
          {open && (
            <div className={styles.dropdown}>
              <div className={styles.dropUser}>
                <strong>{user?.name}</strong>
                <small>{user?.email}</small>
              </div>
              <hr className={styles.divider} />
              <button onClick={() => { navigate('/settings'); setOpen(false); }}>
                <Settings size={15} /> Settings
              </button>
              <button onClick={logout} className={styles.danger}>
                <LogOut size={15} /> Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
