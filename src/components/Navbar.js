import { Link } from "react-router-dom";
import logo from "../assets/realestateLogo-Trans.png";
import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
       <Link className="navbar-brand d-flex align-items-center" to="/">
  <img
    src={logo}
    alt="Real Estate Logo"
    height="80"
    className="me-2"
  />
  <div className="company-logo">
  <div>
    <span className="highlight">A</span>SHOKRAJ
  </div>
  <div className="sub-name"><span className="highlight">R</span>EALS</div>
</div>
</Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link menu-color" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-color" to="/contact">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-color" to="/admin">ADMIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
