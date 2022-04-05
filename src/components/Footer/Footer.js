import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {`${new Date().getFullYear()} Rates & Routes Russia`}</p>
    </footer>
  );
}

export default Footer;
