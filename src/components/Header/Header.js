import { Link } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBagShopping} from '@fortawesome/react-fontawesome'
import { faInstagram,faFigma } from "@fortawesome/free-brands-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderLogo">
        <Link to="/" className="headOfBrandName">
          <FontAwesomeIcon className="brandName" icon={faFigma} />
        </Link>
      </div>
      <div className="HeaderTags">
        <Link to="/shop">SHOP</Link>
        <Link to="/shop">CONTACT</Link>
        <Link to="/SignIn">SING IN</Link>
        <Link to="/CartPage">
                <FontAwesomeIcon className="ShopIcon" icon={faBagShopping} bounce />
        </Link>
        
      </div>
     
    </div>
  );
};

export default Header;
