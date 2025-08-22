import React, { useEffect } from 'react';

export default function About(){
  useEffect(()=>{
    if (window.AOS) window.AOS.init({ once:true });
  },[]);

  return (
    <main className="container py-5">
      <h2 className="section-title">About Us</h2>
      <p className="section-sub">OmkarHolidays is a boutique travel agency focused on curated, sustainable experiences.</p>
      <div className="row g-4 mt-2">
        <div className="col-md-7" data-aos="fade-right">
          <ul className="timeline list-unstyled">
            <li className="mb-3"><strong>2015</strong> — Founded with a mission to craft small-group journeys.</li>
            <li className="mb-3"><strong>2019</strong> — Launched BharatBenz-Buses trips and eco stays.</li>
            <li className="mb-3"><strong>2024</strong> — 10,000+ happy travelers and counting.</li>
          </ul>
        </div>
        <div className="col-md-5" data-aos="fade-left">
          <div className="row g-3">
            {['Aryan','Hridhaan','Shivani','Sakshi'].map((n,i)=>(
              <div className="col-6" key={i}>
                <div className="card hover-lift text-center p-3">
                  <div className="rounded-circle bg-info-subtle d-inline-flex align-items-center justify-content-center mb-2" style={{width:64,height:64}}>
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <strong>{n}</strong>
                  <div className="small text-secondary">Travel Expert</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
