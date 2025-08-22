import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
  return (
    <footer className="mt-5 pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <span className="navbar-brand d-flex align-items-center gap-2">
              <i className="fa-solid fa-compass fa-lg" aria-hidden="true"></i>
              <span>Omkar<span className="brand-dot">Holidays</span></span>
            </span>
            <p className="mt-3">We craft memorable journeys with handpicked stays, local hosts, and planet-friendly transport.</p>
            <div className="d-flex gap-3 fs-5 mt-3">
              <a href="#" aria-label="Google" className="text-white-50"><i class="fa-brands fa-google"></i></a>
              <a href="#" aria-label="Instagram" className="text-white-50"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="YouTube" className="text-white-50"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="text-white">Explore</h6>
            <ul className="list-unstyled small mt-3">
              <li><Link className="link-light link-underline-opacity-0" to="/destinations">Destinations</Link></li>
              <li><Link className="link-light link-underline-opacity-0" to="/tours">Tours</Link></li>
              <li><Link className="link-light link-underline-opacity-0" to="/vehicles">Vehicles</Link></li>
              <li><Link className="link-light link-underline-opacity-0" to="/booking">Book</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="text-white">Contact</h6>
            <p className="small mt-3 mb-1"><i className="fa-solid fa-phone"></i> +91 9764718235</p>
            <p className="small mb-1"><i className="fa-solid fa-envelope"></i> OmkarHolidays76@gmail.com</p>
            <p className="small"><i className="fa-solid fa-location-dot"></i> Pune, Maharashtra, India</p>
          </div>
        </div>
         <hr className="border-secondary my-4"/>
<div className="text-center">
  <div className="small text-white-50">
  Developed By Onkar Awate
  </div>
  <div className="small text-white-50 mt-1">
    © {new Date().getFullYear()} OmkarHolidays. All rights reserved.
  </div>
</div>

      </div>
    </footer>
  )
}
