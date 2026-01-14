import { Link } from "react-router-dom";
import logo from "../assets/realestateLogo-Trans.png";
import "../assets/css/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false); // close menu when a link is clicked
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top real-navbar">
  <div className="container-fluid px-3">

    {/* BRAND */}
    <Link className="navbar-brand d-flex align-items-center brand-wrap" to="/">
      <img src={logo} alt="Logo" className="logo-img" />

      <div className="company-logo">
        <div className="logo-line">
          <span className="highlight">A</span>SHOKRAJ
        </div>
        <div className="logo-line sub-name">
          <span className="highlight">R</span>EALS
        </div>
      </div>
    </Link>

    {/* BURGER */}
    <button
      className="navbar-toggler custom-toggler"
      type="button" onClick={toggleMenu}
      data-bs-toggle="collapse"
      data-bs-target="#menu"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* MENU */}
    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="menu">
      <ul className="navbar-nav ms-auto gap-lg-3">
        <li className="nav-item">
          <Link className="nav-link menu-color"onClick={handleMenuClick} to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link menu-color"onClick={handleMenuClick} to="/contact">CONTACT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link menu-color"onClick={handleMenuClick} to="/admin">ADMIN</Link>
        </li>
      </ul>
    </div>

  </div>
</nav>

    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    //   <div className="container">
    //     <Link className="navbar-brand d-flex" to="/">
    //       <img
    //         src={logo}
    //         alt="Real Estate Logo"
    //         className="me-0 logo-img"
    //       />
    //       <div className="company-logo">
    //         <div>
    //           <span className="highlight">A</span>SHOKRAJ
    //         </div>
    //         <div className="sub-name"><span className="highlight">R</span>EALS</div>
    //       </div>
    //     </Link>

    //     <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="menu">
    //       <ul className="navbar-nav ms-auto text-right">
    //         <li className="nav-item">
    //           <Link className="nav-link menu-color" to="/">HOME</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link menu-color" to="/contact">CONTACT</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link menu-color" to="/admin">ADMIN</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
