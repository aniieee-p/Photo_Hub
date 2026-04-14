import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud, X } from 'lucide-react';
import api from '../utils/api';
import toast from 'react-hot-toast';
import styles from './UploadZone.module.css';

export default function UploadZone({ albumId, onUploaded }) {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const onDrop = useCallback(accepted => {
    setFiles(prev => [...prev, ...accepted.map(f => Object.assign(f, { preview: URL.createObjectURL(f) }))]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: true,
  });

  const remove = (name) => setFiles(f => f.filter(x => x.name !== name));

  const upload = async () => {
    if (!files.length) return;
    setUploading(true);
    setProgress(0);
    const form = new FormData();
    files.forEach(f => form.append('photos', f));
    if (albumId) form.append('albumId', albumId);
    try {
      await api.post('/photos/upload', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: e => setProgress(Math.round((e.loaded / e.total) * 100)),
      });
      toast.success(`${files.length} photo${files.length > 1 ? 's' : ''} uploaded`);
      setFiles([]);
      onUploaded?.();
    } catch {
      toast.error('Upload failed');
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  return (
    <div className={styles.wrap}>
      <div {...getRootProps()} className={`${styles.zone} ${isDragActive ? styles.active : ''}`}>
        <input {...getInputProps()} />
        <UploadCloud size={32} className={styles.icon} />
        <p>{isDragActive ? 'Drop photos here…' : 'Drag & drop photos, or click to select'}</p>
        <small>JPG, PNG, GIF, WEBP supported</small>
      </div>

      {files.length > 0 && (
        <div className={styles.previews}>
          {files.map(f => (
            <div key={f.name} className={styles.thumb}>
              <img src={f.preview} alt={f.name} />
              <button onClick={() => remove(f.name)}><X size={12} /></button>
            </div>
          ))}
        </div>
      )}

      {uploading && (
        <div className={styles.progressWrap}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }} />
          <span>{progress}%</span>
        </div>
      )}

      {files.length > 0 && !uploading && (
        <button className={styles.uploadBtn} onClick={upload}>
          Upload {files.length} photo{files.length > 1 ? 's' : ''}
        </button>
      )}
    </div>
  );
}
