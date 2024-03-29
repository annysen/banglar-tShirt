import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="nav-section">
      <Link to="/">Home</Link>
      <Link to="/review">Order Review</Link>
      <Link to="/grandpa">Grandpa</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
