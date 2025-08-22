import React, { useEffect } from 'react';
import Hero from '../components/Hero';

export default function Home(){
  useEffect(()=>{
    if (window.AOS) window.AOS.init({ once:true, duration:700 });
  },[]);
  return (
    <main>
      <Hero />
      <section className="container py-5">
        <div className="row g-4">
          <div className="col-lg-8" data-aos="fade-right">
            <h2 className="section-title">Plan greener, travel deeper.</h2>
            <p className="section-sub">Choose EV-ready vehicles, local stays, and small-group tours. Your journey, your pace, our expertise.</p>
          </div>
          <div className="col-lg-4 text-lg-end" data-aos="fade-left">
            <a href="#featured" className="btn btn-brand btn-lg">See Featured</a>
          </div>
        </div>
      </section>
    </main>
  )
}
