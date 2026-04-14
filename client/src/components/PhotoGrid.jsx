import { useState } from 'react';
import { Heart, Trash2 } from 'lucide-react';
import { mediaUrl } from '../utils/api';
import styles from './PhotoGrid.module.css';

export default function PhotoGrid({ photos, onFavorite, onTrash, onDelete }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className={styles.grid}>
        {photos.map(photo => (
          <div key={photo._id} className={styles.card} onClick={() => setSelected(photo)}>
            <img src={mediaUrl(photo.url)} alt={photo.filename} loading="lazy" />
            <div className={styles.overlay}>
              <button
                className={`${styles.action} ${photo.isFavorite ? styles.favActive : ''}`}
                onClick={e => { e.stopPropagation(); onFavorite(photo._id); }}
                title="Favorite"
              >
                <Heart size={15} fill={photo.isFavorite ? 'currentColor' : 'none'} />
              </button>
              <button
                className={styles.action}
                onClick={e => { e.stopPropagation(); onTrash(photo._id); }}
                title={photo.isTrashed ? 'Restore' : 'Trash'}
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className={styles.lightbox} onClick={() => setSelected(null)}>
          <div className={styles.lightboxInner} onClick={e => e.stopPropagation()}>
            <img src={mediaUrl(selected.url)} alt={selected.filename} />
            <div className={styles.lightboxInfo}>
              <span>{selected.filename}</span>
              <div className={styles.lightboxActions}>
                <button onClick={() => { onFavorite(selected._id); setSelected(null); }}>
                  <Heart size={16} /> {selected.isFavorite ? 'Unfavorite' : 'Favorite'}
                </button>
                <button onClick={() => { onTrash(selected._id); setSelected(null); }}>
                  <Trash2 size={16} /> {selected.isTrashed ? 'Restore' : 'Trash'}
                </button>
                {selected.isTrashed && (
                  <button className={styles.deleteBtn} onClick={() => { onDelete(selected._id); setSelected(null); }}>
                    <Trash2 size={16} /> Delete forever
                  </button>
                )}
              </div>
            </div>
            <button className={styles.closeBtn} onClick={() => setSelected(null)}>✕</button>
          </div>
        </div>
      )}
    </>
  );
}
