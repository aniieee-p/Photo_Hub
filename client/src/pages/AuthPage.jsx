import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import toast from 'react-hot-toast';
import styles from './AuthPage.module.css';

export default function AuthPage() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'login') {
        await login(form.email, form.password);
      } else {
        await signup(form.name, form.email, form.password);
      }
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <button className={styles.themeBtn} onClick={toggle}>
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <div className={styles.card}>
        <div className={styles.brand}>
          <span className={styles.logo}>🌸</span>
          <h1>AnieeBuniee's PhotoHub</h1>
          <p>✨ Your personal photo space, Anieee 💖</p>
        </div>

        <div className={styles.tabs}>
          <button className={mode === 'login' ? styles.active : ''} onClick={() => setMode('login')}>Sign In</button>
          <button className={mode === 'signup' ? styles.active : ''} onClick={() => setMode('signup')}>Sign Up</button>
        </div>

        <form onSubmit={submit} className={styles.form}>
          {mode === 'signup' && (
            <div className={styles.field}>
              <label>Full Name</label>
              <input type="text" placeholder="[name]" value={form.name} onChange={set('name')} required />
            </div>
          )}
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="[email]" value={form.email} onChange={set('email')} required />
          </div>
          <div className={styles.field}>
            <label>Password</label>
            <input type="password" placeholder="••••••••" value={form.password} onChange={set('password')} required minLength={6} />
          </div>
          <button type="submit" className={styles.submit} disabled={loading}>
            {loading ? 'Please wait…' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}
