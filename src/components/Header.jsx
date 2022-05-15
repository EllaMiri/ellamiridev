import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-left">
        {/* TODO: Add burgermenu here */}
        <Link style={{ textDecoration: "none" }} to="/">
          <span>ellamiri</span>
        </Link>
      </div>
      <nav className="header-right">
        <ul className="nav-links">
          <Link style={{ textDecoration: "none" }} to="MyWork">
            <li className="list-item">My work</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="Skills">
            <li className="list-item">Skills</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="AboutMe">
            <li className="list-item">About Me</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="Contact">
            <li className="list-item">Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
