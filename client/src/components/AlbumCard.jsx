import { useNavigate } from 'react-router-dom';
import { MoreVertical, Pencil, Trash2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { mediaUrl } from '../utils/api';
import styles from './AlbumCard.module.css';

export default function AlbumCard({ album, onEdit, onDelete }) {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setMenu(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  return (
    <div className={styles.card} onClick={() => navigate(`/albums/${album._id}`)}>
      <div className={styles.cover}>
        {album.coverPhoto
          ? <img src={mediaUrl(album.coverPhoto)} alt={album.name} />
          : <span className={styles.placeholder}>📁</span>}
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{album.name}</span>
        <div className={styles.menuWrap} ref={ref}>
          <button className={styles.menuBtn} onClick={e => { e.stopPropagation(); setMenu(o => !o); }}>
            <MoreVertical size={16} />
          </button>
          {menu && (
            <div className={styles.dropdown}>
              <button onClick={e => { e.stopPropagation(); onEdit(album); setMenu(false); }}>
                <Pencil size={14} /> Rename
              </button>
              <button className={styles.danger} onClick={e => { e.stopPropagation(); onDelete(album._id); setMenu(false); }}>
                <Trash2 size={14} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
