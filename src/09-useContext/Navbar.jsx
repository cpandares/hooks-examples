import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            useContext
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({ isActive })=> `nav-link ${ isActive ? 'active' : ''}` } to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive })=> `nav-link ${ isActive ? 'active' : ''}` } to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({ isActive })=> `nav-link ${ isActive ? 'active' : ''}` } to="/login">
                  Login
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;