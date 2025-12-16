import { Link } from "react-router-dom";
import logo from "../assets/realestateLogo-Trans.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
       <Link className="navbar-brand d-flex align-items-center" to="/">
  <img
    src={logo}
    alt="Real Estate Logo"
    height="40"
    className="me-2"
  />
  <span className="fw-bold">Real Estate</span>
</Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
