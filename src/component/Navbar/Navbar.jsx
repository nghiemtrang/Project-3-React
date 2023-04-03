import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          {/* nav brand */}
          <div className="nav-brand">
            <img className="nav-img" src="/img/logo.svg" alt="logo" />
            <p className="text-xl">dwelling</p>
          </div>
          {/* nav link */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" />
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#renters">
                Renters
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href ="#">
                Homeowners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">
                Reviews
              </a>
            </li>
          </ul>
          {/* action button */}
          <div className="nav-action">
            <button className="nav-action-btn btn-type-2 btn-sm text-md">
              Register
            </button>
            {/* menu button */}
            <div className="navbar-menu">
              <button className="navbar-menu-btn">
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
