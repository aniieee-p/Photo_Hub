import { useState, useEffect, useCallback } from 'react';
import { Plus, Search, Upload, FolderPlus } from 'lucide-react';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import PhotoGrid from '../components/PhotoGrid';
import AlbumCard from '../components/AlbumCard';
import UploadZone from '../components/UploadZone';
import Modal from '../components/Modal';
import styles from './DashboardPage.module.css';

export default function DashboardPage({ view = 'dashboard' }) {
  const { user } = useAuth();
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState('');
  const [showUpload, setShowUpload] = useState(false);
  const [albumModal, setAlbumModal] = useState(null);
  const [albumForm, setAlbumForm] = useState({ name: '', description: '' });

  const isAlbums = view === 'albums';
  const isFavorites = view === 'favorites';
  const isTrash = view === 'trash';

  const fetchPhotos = useCallback(async () => {
    if (!user) return;
    try {
      const params = {};
      if (isFavorites) params.favorites = true;
      if (isTrash) params.trash = true;
      if (!isFavorites && !isTrash) params.trash = false;
      if (search) params.search = search;
      const { data } = await api.get('/photos', { params });
      setPhotos(data);
    } catch (err) {
      toast.error('Failed to load photos');
    }
  }, [user, view, search]);

  const fetchAlbums = useCallback(async () => {
    if (!user) return;
    try {
      const { data } = await api.get('/albums');
      setAlbums(data);
    } catch {
      toast.error('Failed to load albums');
    }
  }, [user]);

  useEffect(() => { fetchPhotos(); }, [fetchPhotos]);
  useEffect(() => { if (isAlbums) fetchAlbums(); }, [isAlbums, fetchAlbums]);

  const handleFavorite = async (id) => {
    const { data } = await api.patch(`/photos/${id}/favorite`);
    setPhotos(p => p.map(x => x._id === id ? data : x).filter(x => isFavorites ? x.isFavorite : true));
  };

  const handleTrash = async (id) => {
    const { data } = await api.patch(`/photos/${id}/trash`);
    setPhotos(p => p.filter(x => x._id !== id));
    toast.success(data.isTrashed ? 'Moved to trash' : 'Restored');
  };

  const handleDelete = async (id) => {
    await api.delete(`/photos/${id}`);
    setPhotos(p => p.filter(x => x._id !== id));
    toast.success('Deleted permanently');
  };

  const saveAlbum = async () => {
    try {
      if (albumModal === 'create') {
        const { data } = await api.post('/albums', albumForm);
        setAlbums(a => [data, ...a]);
        toast.success('Album created');
      } else {
        const { data } = await api.put(`/albums/${albumModal._id}`, albumForm);
        setAlbums(a => a.map(x => x._id === data._id ? data : x));
        toast.success('Album updated');
      }
      setAlbumModal(null);
      setAlbumForm({ name: '', description: '' });
    } catch {
      toast.error('Failed to save album');
    }
  };

  const deleteAlbum = async (id) => {
    await api.delete(`/albums/${id}`);
    setAlbums(a => a.filter(x => x._id !== id));
    toast.success('Album deleted');
  };

  const openEdit = (album) => {
    setAlbumForm({ name: album.name, description: album.description });
    setAlbumModal(album);
  };

  const titles = {
    dashboard: 'All Photos ✨',
    albums: 'My Albums 📚',
    favorites: 'Favorites 💖',
    trash: 'Trash 🗑️'
  };

  const emptyStates = {
    dashboard: { emoji: '📸', text: "No photos yet!", sub: "Upload your first memory, Anieee 💕" },
    albums: { emoji: '📂', text: "No albums yet!", sub: "Create your first album, Anishaaaa 🌸" },
    favorites: { emoji: '💖', text: "No favorites yet!", sub: "Heart some photos to see them here ✨" },
    trash: { emoji: '🌟', text: "Trash is empty!", sub: "All clean, AnieeBuniee 🦋" },
  };

  const empty = emptyStates[view] || emptyStates.dashboard;

  if (!user) return null;

  return (
    <div className={styles.page}>
      {view === 'dashboard' && (
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <div className={styles.bannerGreet}>Welcome back, Anieee 💖</div>
            <div className={styles.bannerSub}>AnieeBuniee's personal photo space ✨ Your memories, your vibe 🌸</div>
          </div>
          <div className={styles.bannerEmojis}>
            <span>🦋</span><span>🌟</span><span>💜</span>
          </div>
        </div>
      )}
      <div className={styles.topBar}>
        <h2 className={styles.title}>{titles[view]}</h2>
        <div className={styles.actions}>
          {!isAlbums && (
            <div className={styles.searchWrap}>
              <Search size={16} className={styles.searchIcon} />
              <input
                className={styles.search}
                placeholder="Search photos…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          )}
          {!isTrash && !isAlbums && (
            <button className={styles.btn} onClick={() => setShowUpload(o => !o)}>
              <Upload size={16} /> Upload
            </button>
          )}
          {isAlbums && (
            <button className={styles.btn} onClick={() => { setAlbumForm({ name: '', description: '' }); setAlbumModal('create'); }}>
              <FolderPlus size={16} /> New Album
            </button>
          )}
        </div>
      </div>

      {showUpload && !isAlbums && (
        <div className={styles.uploadSection}>
          <UploadZone onUploaded={() => { fetchPhotos(); setShowUpload(false); }} />
        </div>
      )}

      {isAlbums ? (
        albums.length === 0
          ? <div className={styles.empty}>
              <span className={styles.emptyEmoji}>📂</span>
              <span className={styles.emptyText}>No albums yet!</span>
              <span className={styles.emptySub}>Create your first album, Anishaaaa 🌸</span>
            </div>
          : <div className={styles.albumGrid}>
              {albums.map(a => (
                <AlbumCard key={a._id} album={a} onEdit={openEdit} onDelete={deleteAlbum} />
              ))}
            </div>
      ) : (
        photos.length === 0
          ? <div className={styles.empty}>
              <span className={styles.emptyEmoji}>{empty.emoji}</span>
              <span className={styles.emptyText}>{empty.text}</span>
              <span className={styles.emptySub}>{empty.sub}</span>
            </div>
          : <PhotoGrid
              photos={photos}
              onFavorite={handleFavorite}
              onTrash={handleTrash}
              onDelete={handleDelete}
              albums={albums}
            />
      )}

      {albumModal && (
        <Modal
          title={albumModal === 'create' ? 'New Album' : 'Edit Album'}
          onClose={() => setAlbumModal(null)}
        >
          <div className={styles.modalForm}>
            <input
              placeholder="Album name"
              value={albumForm.name}
              onChange={e => setAlbumForm(f => ({ ...f, name: e.target.value }))}
            />
            <input
              placeholder="Description (optional)"
              value={albumForm.description}
              onChange={e => setAlbumForm(f => ({ ...f, description: e.target.value }))}
            />
            <div className={styles.modalActions}>
              <button className={styles.cancelBtn} onClick={() => setAlbumModal(null)}>Cancel</button>
              <button className={styles.saveBtn} onClick={saveAlbum}>Save</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
