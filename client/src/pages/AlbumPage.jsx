import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload } from 'lucide-react';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import PhotoGrid from '../components/PhotoGrid';
import UploadZone from '../components/UploadZone';
import styles from './AlbumPage.module.css';

export default function AlbumPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [showUpload, setShowUpload] = useState(false);

  const fetchData = async () => {
    if (!user) return;
    try {
      const [albumRes, photosRes] = await Promise.all([
        api.get('/albums'),
        api.get('/photos', { params: { album: id, trash: false } }),
      ]);
      const found = albumRes.data.find(a => a._id === id);
      setAlbum(found);
      setPhotos(photosRes.data);
    } catch {
      toast.error('Failed to load album');
    }
  };

  useEffect(() => { fetchData(); }, [id, user]);

  const handleFavorite = async (photoId) => {
    const { data } = await api.patch(`/photos/${photoId}/favorite`);
    setPhotos(p => p.map(x => x._id === photoId ? data : x));
  };

  const handleTrash = async (photoId) => {
    await api.patch(`/photos/${photoId}/trash`);
    setPhotos(p => p.filter(x => x._id !== photoId));
    toast.success('Moved to trash');
  };

  const handleDelete = async (photoId) => {
    await api.delete(`/photos/${photoId}`);
    setPhotos(p => p.filter(x => x._id !== photoId));
    toast.success('Deleted');
  };

  if (!album && !user) return null;
  if (!album) return <div className={styles.loading}>Loading…</div>;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <button className={styles.back} onClick={() => navigate('/albums')}>
          <ArrowLeft size={18} /> Albums
        </button>
        <div className={styles.info}>
          <h2>{album.name}</h2>
          {album.description && <p>{album.description}</p>}
        </div>
        <button className={styles.uploadBtn} onClick={() => setShowUpload(o => !o)}>
          <Upload size={16} /> Upload
        </button>
      </div>

      {showUpload && (
        <div className={styles.uploadSection}>
          <UploadZone albumId={id} onUploaded={() => { fetchData(); setShowUpload(false); }} />
        </div>
      )}

      {photos.length === 0
        ? <div className={styles.empty}>No photos in this album yet.</div>
        : <PhotoGrid photos={photos} onFavorite={handleFavorite} onTrash={handleTrash} onDelete={handleDelete} />}
    </div>
  );
}
