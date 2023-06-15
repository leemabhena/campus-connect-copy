import "./styles/Footer.css";

function Footer(props) {
  return (
    <div className="Footer">
      <div className="footer-top"></div>
      <div className="footer-bottom">
        <div className="copy">
          &copy; {new Date().getFullYear()} Campus Connect. All rights reserved.
        </div>
        <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
