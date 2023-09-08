import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBagShopping} from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFigma,
  faFacebook,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    
    <div className="footerSection">
      <div className="mainFirstSection">
        <div className="firstSection">
          <h1>S-Kart</h1>
          <div className="footerBrands">
            <FontAwesomeIcon className="socialMediaName" icon={faInstagram} />
            <FontAwesomeIcon className="socialMediaName" icon={faFacebook} />
            <FontAwesomeIcon className="socialMediaName" icon={faTelegram} />
            <FontAwesomeIcon className="socialMediaName" icon={faWhatsapp}  />
          </div>
        </div>
      </div>

      <div className="secondSection">
        <p>Support</p>
        <div className="supportDetails">
          <p>anything</p>
          <p>Contact us</p>
          <p>office location</p>
          <p>anything</p>
          <p>anything</p>
        </div>
      </div>
      <div className="thirdSection">
        <p>third section</p>
        <p>anything</p>
          <p>Contact us</p>
          <p>office location</p>
          <p>anything</p>
          <p>anything</p>
      </div>
      <div className="fourthSection">
        <p>Get in touch with us</p>
        <input type="name" placeholder="Enter your email address" />
        <Link to="/SignIn">
                <button>Sign up</button>

        </Link>
        <hr />

      </div>
    </div>
    
   
  );
};

export default Footer;
