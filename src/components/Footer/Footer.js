import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {`${new Date().getFullYear()} Explorer Russia`}</p>
    </footer>
  );
}

export default Footer;
