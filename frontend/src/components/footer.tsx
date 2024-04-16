import logo from "../assets/logo.svg";
import twitterIcon from "../assets/twitter.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";
import youtubeIcon from "../assets/youtube.svg";
import tiktokIcon from "../assets/tiktok.svg";
import arrowUp from "../assets/arrow-up.svg";

function Footer() {
  return (
    <footer>
      <div className="go_top">
        <a href="#home">
          <img src={arrowUp} alt="" />
        </a>
      </div>
      <div className="footer-container" id="contact">
        <div className="footer">
          {/* <a href="#home"> */}
          <img src={logo} alt="" />
          {/* </a> */}
          <div className="footer-center">
            <div className="top">
              <span>Politique de Confidentialité</span>
              <span>Conditions d’utilisation et mentions légales</span>
              <span>
                Conditions générales du programme de fidélité Muse Coffee Shop
              </span>
              <span>Cookies</span>
            </div>
            <span className="copyright">
              © 2024 Muse Coffee Shop. Tous droits réservés. Site fictif.
            </span>
          </div>
          <div className="footer-right">
            <div className="icon-container">
              <a href="https://twitter.com/" target="_blank">
                <img src={twitterIcon} alt="" />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={facebookIcon} alt="" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagramIcon} alt="" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <img src={linkedinIcon} alt="" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img src={youtubeIcon} alt="" />
              </a>
              <a href="https://www.tiktok.com/" target="_blank">
                <img src={tiktokIcon} alt="" />
              </a>
            </div>
            <span>info@musecoffeeshop.com</span>
            <span>04 99 99 99 99</span>
            <a className="a_button">Nous rejoindre</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
