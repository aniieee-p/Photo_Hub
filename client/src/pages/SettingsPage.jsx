import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api, { mediaUrl } from '../utils/api';
import toast from 'react-hot-toast';
import styles from './SettingsPage.module.css';

export default function SettingsPage() {
  const { user, updateUser } = useAuth();
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '' });
  const [passwords, setPasswords] = useState({ current: '', next: '' });
  const [saving, setSaving] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const setP = (k) => (e) => setPasswords(f => ({ ...f, [k]: e.target.value }));

  const saveProfile = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const { data } = await api.put('/users/me', form);
      updateUser(data);
      toast.success('Profile updated');
    } catch {
      toast.error('Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const uploadAvatar = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('avatar', file);
    try {
      const { data } = await api.post('/users/avatar', fd);
      updateUser(data);
      toast.success('Avatar updated');
    } catch {
      toast.error('Failed to upload avatar');
    }
  };

  const storageGB = ((user?.storageUsed || 0) / 1e9).toFixed(2);

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Settings</h2>

      <div className={styles.section}>
        <h3>Profile</h3>
        <div className={styles.avatarRow}>
          <div className={styles.avatar}>
            {user?.avatar
              ? <img src={mediaUrl(user.avatar)} alt={user.name} />
              : <span>{user?.name?.[0]?.toUpperCase()}</span>}
          </div>
          <label className={styles.avatarBtn}>
            Change Photo
            <input type="file" accept="image/*" onChange={uploadAvatar} hidden />
          </label>
        </div>
        <form onSubmit={saveProfile} className={styles.form}>
          <div className={styles.field}>
            <label>Name</label>
            <input value={form.name} onChange={set('name')} required />
          </div>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" value={form.email} onChange={set('email')} required />
          </div>
          <button type="submit" className={styles.saveBtn} disabled={saving}>
            {saving ? 'Saving…' : 'Save Changes'}
          </button>
        </form>
      </div>

      <div className={styles.section}>
        <h3>Storage</h3>
        <div className={styles.storageInfo}>
          <span>{storageGB} GB used</span>
        </div>
        <div className={styles.storageBar}>
          <div className={styles.storageUsed} style={{ width: `${Math.min((user?.storageUsed || 0) / 1e10 * 100, 100)}%` }} />
        </div>
        <small className={styles.storageLabel}>of 10 GB free storage</small>
      </div>
    </div>
  );
}
