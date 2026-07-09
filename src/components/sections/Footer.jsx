import { Share2, Mail } from 'lucide-react';

const Footer = () => {
  // TODO: wire these up — share should open a share sheet / copy link,
  // contact should open a mailto: or a contact form.
  const handleShare = () => {};
  const handleContact = () => {};

  return (
    <footer className="footer">
      <button type="button" className="footer__btn footer__btn--primary" onClick={handleShare}>
        <Share2 size={16} strokeWidth={1.8} />
        Share profile
      </button>
      <button type="button" className="footer__btn footer__btn--ghost" onClick={handleContact}>
        <Mail size={16} strokeWidth={1.8} />
        Contact me
      </button>
    </footer>
  );
};

export default Footer;
