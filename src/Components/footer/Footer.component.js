import "../../Styles/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage:
          "linear-gradient(to top, #CE0505 0%, #CE0505 1%, #EB2929 100%)"
      }}
      id="footer"
    >
      <p id="footText">&copy; Ask Developer</p>
      <div id="footMain">
        <div className="footDiv">
          <p>About Foodies</p>
          <p>Refund & Cancellation</p>
        </div>
        <div className="footDiv">
          <p>Contact Us</p>
          <p>Help & Support</p>
        </div>
        <div className="footDiv noBorder">
          <p>Partner with Us</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <hr />
      <div className="social">
        <Link href="www.facebook.com" to="/">
          <i className="bi bi-facebook"></i>
        </Link>
        <Link href="www.twitter.com" to="/">
          <i className="bi bi-twitter"></i>
        </Link>
        <Link href="www.instagram.com" to="/">
          <i className="bi bi-instagram"></i>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
