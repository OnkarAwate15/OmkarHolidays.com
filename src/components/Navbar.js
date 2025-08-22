import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top border-bottom">
      <div className="container">
        <Link to="/" className="d-flex align-items-center navbar-brand">
          <span className="navbar-brand d-flex align-items-center gap-2">
            <i className="fa-solid fa-compass fa-lg" aria-hidden="true"></i>
            <span>Omkar<span className="brand-dot">Holidays</span></span>
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"
          aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item"><NavLink end to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/destinations" className="nav-link">Destinations</NavLink></li>
            <li className="nav-item"><NavLink to="/tours" className="nav-link">Tour Packages</NavLink></li>
            <li className="nav-item"><NavLink to="/vehicles" className="nav-link">Vehicles</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            <li className="nav-item ms-lg-2">
              <Link to="/booking" className="btn btn-brand px-3">Book Optics</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
