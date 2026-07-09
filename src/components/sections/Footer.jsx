import { Share2, Mail } from 'lucide-react';

const Footer = () => {
  // TODO: wire these up — share should open a share sheet / copy link,
  // contact should open a mailto: or a contact form.
  const handleShare = () => {};
  const handleContact = () => {};

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
    </footer>
  );
};

export default Footer;
