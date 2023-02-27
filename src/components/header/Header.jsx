import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link className="header__link" to="/">
          cocktail gallery
        </Link>
      </div>
      <div className="header__right">
        <Link to="/about" className="header__rightTitle">
          about
        </Link>
      </div>
    </div>
  );
}

export default Header;
