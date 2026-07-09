import { useState, useEffect } from 'react';
import Masonry from '../Masonry';

// Clean asset tracking for both views
const PREVIEW_PHOTOS = [
  { id: "1", img: "https://picsum.photos/id/1015/500/500" },
  { id: "2", img: "https://picsum.photos/id/1011/500/500" },
  { id: "3", img: "https://picsum.photos/id/1020/500/500" },
  { id: "4", img: "https://picsum.photos/id/1025/500/500" },
  { id: "5", img: "https://picsum.photos/id/1043/500/500" },
  { id: "6", img: "https://picsum.photos/id/1050/500/500" }, // This becomes the blurred backdrop
];

const MASONRY_ITEMS = [
  { id: "m1", img: "https://picsum.photos/id/1015/600/900?grayscale", url: "#", height: 450 },
  { id: "m2", img: "https://picsum.photos/id/1011/600/750?grayscale", url: "#", height: 320 },
  { id: "m3", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "#", height: 500 },
  { id: "m4", img: "https://picsum.photos/id/1025/600/700?grayscale", url: "#", height: 380 },
  { id: "m5", img: "https://picsum.photos/id/1043/600/950?grayscale", url: "#", height: 550 },
  { id: "m6", img: "https://picsum.photos/id/1050/600/650?grayscale", url: "#", height: 300 },
  { id: "m7", img: "https://picsum.photos/id/1062/600/850?grayscale", url: "#", height: 480 },
  { id: "m8", img: "https://picsum.photos/id/1021/600/720?grayscale", url: "#", height: 340 },
  { id: "m9", img: "https://picsum.photos/id/1074/600/900?grayscale", url: "#", height: 460 },
];

const Media = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock scroll bar behind active modal viewports
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isModalOpen]);

  return (
    <div className="media-section">
      {/* Primary Landing Page Grid */}
      <div className="media-grid">
        {PREVIEW_PHOTOS.slice(0, 5).map(photo => (
          <div key={photo.id} className="media-tile">
            <img src={photo.img} alt={`Portfolio Media ${photo.id}`} />
          </div>
        ))}

        {/* 6th Interactive Component Tile */}
        <div 
          className="media-tile media-tile--more" 
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={PREVIEW_PHOTOS[5].img} 
            alt="View More Trigger Backdrop" 
            className="media-tile__blurred-img"
          />
          <div className="media-tile__overlay">
            <span>View more</span>
          </div>
        </div>
      </div>

      {/* Dynamic GSAP Masonry Portal Sheet */}
      <div className={`masonry-modal ${isModalOpen ? 'masonry-modal--open' : ''}`}>
        <button 
          className="masonry-modal__close" 
          onClick={() => setIsModalOpen(false)}
          aria-label="Close Gallery"
        >
          &times;
        </button>
        <div className="masonry-modal__content">
          <h2 className="masonry-modal__title">Media Gallery</h2>
          {isModalOpen && (
            <Masonry
              items={MASONRY_ITEMS}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Media;
