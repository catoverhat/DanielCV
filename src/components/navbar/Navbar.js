import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav data-toggled="false" data-transitionable="false">
      <div id="nav-logo-section" className="nav-section">
        <a href="#">
        <i className="fa-solid fa-eye"></i>
        </a>
      </div>
      <div id="nav-mobile-section">
        <div id="nav-link-section" className="nav-section">
          <a href="#">ABOUT</a>
          <a href="#">WORK</a>
        </div>
        <div id="nav-social-section" className="nav-section">
          <a href="#">
            {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" target="_blank">
            {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-codepen"></i>
          </a>
        </div>
        <div id="nav-contact-section" className="nav-section">
          <a href="#">GET IN TOUCH</a>
        </div>
      </div>
      <button id="nav-toggle-button" type="button" onClick="handleNavToggle()">
        <span>Menu</span>
        <i className="fa-solid fa-bars"></i>
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
      </button>
    </nav>
  );
};

export default Navbar;
