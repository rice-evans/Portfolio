import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Masonry from '../Masonry';

// Clean asset tracking for both views
const PREVIEW_PHOTOS = [
  { id: "1", img: "/Gallery1.jpeg" },
  { id: "2", img: "/Gallery2.jpg" },
  { id: "3", img: "Gallery3.jpg" },
  { id: "4", img: "Gallery4.jpg" },
  { id: "5", img: "Gallery5.JPG" },
  { id: "6", img: "Gallery6.jpg" }, // This becomes the blurred backdrop
];

const MASONRY_ITEMS = [
  { id: "m1", img: "/Gallery1.jpeg", url: "#", height: 450 },
  { id: "m2", img: "/Gallery2.jpg", url: "#", height: 320 },
  { id: "m3", img: "Gallery3.jpg", url: "#", height: 500 },
  { id: "m4", img: "Gallery4.jpg", url: "#", height: 380 },
  { id: "m5", img: "Gallery5.JPG", url: "#", height: 550 },
  { id: "m6", img: "Gallery6.jpg", url: "#", height: 300 },
  { id: "m7", img: "Gallery7.jpeg", url: "#", height: 480 },
  { id: "m8", img: "Gallery8.jpg", url: "#", height: 340 },
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
    // FIX: Using section class names ensures full width distribution 
    <div className="section media-section">
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
        {/* FIX: Now using the true SVG icon component instead of a text glyph */}
        <button 
          className="masonry-modal__close" 
          onClick={() => setIsModalOpen(false)}
          aria-label="Close Gallery"
        >
          <X size={20} strokeWidth={2.5} />
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
