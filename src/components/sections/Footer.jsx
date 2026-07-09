import { useState, useEffect } from 'react';
import { Share2, Mail, X, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [profileUrl, setProfileUrl] = useState('https://rhysprofile.com'); // Default fallback URL

  // Grab the real browser URL dynamically once mounted
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setProfileUrl(window.location.href);
    }
  }, []);

  // Lock background body scroll bar when share overlay sheet is active
  useEffect(() => {
    if (isShareOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isShareOpen]);

  const handleShare = () => {
    setIsShareOpen(true);
  };

  const handleContact = () => {
    window.location.href = 'mailto:contact@rhysprofile.com';
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Clear copied status toast after 2s
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Automated third-party application messaging configurations
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&su=Check out this profile&body=Here is the profile link: ${encodeURIComponent(profileUrl)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=Check out this profile: ${encodeURIComponent(profileUrl)}`;

  return (
    <footer className="footer">
      {/* Container to group buttons neatly on the left side */}
      <div className="footer__actions">
        <button type="button" className="footer__btn footer__btn--primary" onClick={handleShare}>
          <Share2 size={16} strokeWidth={1.8} />
          Share profile
        </button>
        <button type="button" className="footer__btn footer__btn--ghost" onClick={handleContact}>
          <Mail size={16} strokeWidth={1.8} />
          Contact me
        </button>
      </div>

      {/* Aligned copyright text blocks on the right side */}
      <div className="footer__copyright">
        Rhys Putra Evans, 2026
      </div>

      {/* ---------- SHARE PROFILE MODAL OVERLAY ---------- */}
      {isShareOpen && (
        <div className="share-overlay" onClick={() => setIsShareOpen(false)}>
          <div className="share-modal" onClick={(e) => e.stopPropagation()}>
            
            <button 
              className="share-modal__close" 
              onClick={() => setIsShareOpen(false)}
              aria-label="Close Share Modal"
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            <h3 className="share-modal__title">Share Profile</h3>

            {/* Link Box Container (Shrinks slightly on hover via App.css rules) */}
            <div 
              className={`share-modal__link-box ${copied ? 'share-modal__link-box--copied' : ''}`}
              onClick={handleCopy}
            >
              <span className="share-modal__url">{profileUrl}</span>
              <span className="share-modal__tooltip">
                {copied ? 'Copied!' : '(Click to Copy)'}
              </span>
            </div>

            <p className="share-modal__label">Share this link via</p>

            {/* Sharing App Icons Row Layout */}
            <div className="share-modal__apps">
              <a 
                href={gmailUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="share-modal__app-btn share-modal__app-btn--gmail"
                title="Share via Gmail"
              >
                <Mail size={20} />
              </a>
              
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="share-modal__app-btn share-modal__app-btn--whatsapp"
                title="Share via WhatsApp"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.067 1.01 11.44 1.01 6.008 1.01 1.585 5.378 1.581 10.806c-.001 1.698.443 3.36 1.286 4.81l-.995 3.636 3.776-.989zm11.415-4.98c-.3-.149-1.774-.874-2.048-.974-.274-.1-.474-.149-.674.149-.2.3-.774.974-.95 1.174-.175.2-.35.225-.65.075-1.04-.52-1.92-1.04-2.67-2.34-.195-.34-.04-.52.11-.67.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.025-.53-.075-.15-.675-1.624-.925-2.225-.244-.588-.493-.508-.674-.517-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 0-.375-.275-1.15-1.175-1.15-2.875 0-1.7 1.225-3.35 1.399-3.575.175-.225 2.41-3.68 5.839-5.16 2.42-1.045 3.32-.835 4.51-.72.63.06 2.048.835 2.338 1.64.29.805.29 1.495.14 1.785-.15.29-.55.44-.85.59z"/>
                </svg>
              </a>

              <button 
                type="button"
                onClick={handleCopy} 
                className="share-modal__app-btn share-modal__app-btn--link"
                title="Copy link to clipboard"
              >
                <LinkIcon size={20} />
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
