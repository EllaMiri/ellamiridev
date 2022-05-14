import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-left">
        {/* TODO: Add burgermenu here */}
        <span>ellamiri</span>
      </div>
      <nav className="header-right">
        <ul className="nav-links">
          <li className="list-item">My work</li>
          <li className="list-item">Skills</li>
          <li className="list-item">About me</li>
          <li className="list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
