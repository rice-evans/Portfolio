import { Image as ImageIcon } from 'lucide-react';

// Add real image URLs here (e.g. files placed in /public) — the tiles below are placeholders
// until you do. Add or remove entries to change the grid size.
const PHOTOS = [null, null, null, null, null, null];

const Media = () => {
  return (
    <div className="media-grid">
      {PHOTOS.map((src, i) => (
        <div className="media-tile" key={i}>
          {src ? <img src={src} alt="" /> : <ImageIcon size={18} strokeWidth={1.5} />}
        </div>
      ))}
    </div>
  );
};

export default Media;
