import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Hero(){
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const barRef = useRef(null);
  const navigate = useNavigate();

  useEffect(()=>{
    // gsap is loaded globally via index.html
    if (window.gsap){
      window.gsap.fromTo(titleRef.current, {y:40, opacity:0}, {y:0, opacity:1, duration:1, ease:'power3.out'});
      window.gsap.fromTo(subRef.current, {y:20, opacity:0}, {y:0, opacity:1, delay:.25, duration:1, ease:'power3.out'});
      window.gsap.fromTo(barRef.current, {y:20, opacity:0}, {y:0, opacity:1, delay:.45, duration:.9, ease:'power3.out'});
    }
  },[]);

  function onSubmit(e){
    e.preventDefault();
    const q = e.currentTarget.query.value.trim();
    navigate(`/tours?q=${encodeURIComponent(q)}`);
  }

  return (
    <header className="hero d-flex align-items-center">
      <video className="hero-bg" src="https://videos.pexels.com/video-files/857195/857195-hd_1280_720_25fps.mp4" autoPlay muted loop playsInline aria-hidden="true"></video>
      <div className="container content">
        <div className="col-lg-8">
          <h1 ref={titleRef} className="display-4 fw-bold">Your Next Chapter <span className="text-info">Starts</span> now.</h1>
          <p ref={subRef} className="lead">Curated destinations, flexible tours, Ready vehicles, and a Booking flow that feels like magic.</p>
          <div ref={barRef} className="p-3 rounded-4 search-bar">
            <form onSubmit={onSubmit} className="row g-2 align-items-center" role="search" aria-label="Search tours or destinations">
              <div className="col-md">
                <label htmlFor="search" className="visually-hidden">Search</label>
                <input name="query" id="search" type="text" className="form-control form-control-lg" placeholder="Search your next destinations or Tours" />
              </div>
              <div className="col-auto">
                <button className="btn btn-light btn-lg" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </form>
          </div>
          <div className="mt-3 d-flex gap-2">
            <Link to="/tours" className="btn btn-brand btn-lg"><i className="fa-solid fa-suitcase-rolling me-2"></i>Explore Tours</Link>
            <Link to="/destinations" className="btn btn-outline-light btn-lg">Destinations</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
