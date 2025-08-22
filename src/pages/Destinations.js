import React, { useEffect, useMemo, useState } from 'react';
import DestinationCard from '../components/DestinationCard';

export default function Destinations(){
  const [data, setData] = useState({destinations: []});
  const [cat, setCat] = useState('All');

  useEffect(()=>{
    fetch(process.env.PUBLIC_URL + '/assets/data/data.json').then(r=>r.json()).then(setData);
    if (window.AOS) window.AOS.init({ once:true });
  },[]);

  const filtered = useMemo(()=> (data.destinations||[]).filter(d=> cat==='All' || d.cat===cat), [data, cat]);

  useEffect(()=>{
    if (!filtered.length) return;
    const first = filtered[0];
    const map = window.L.map('destMap',{ scrollWheelZoom:false }).setView([first.lat, first.lng], 5);
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }).addTo(map);
    filtered.forEach(d=> window.L.marker([d.lat,d.lng]).addTo(map).bindPopup(`<b>${d.title}</b><br/>${d.cat}`));
    return ()=> map.remove();
  },[cat, filtered]);

  return (
    <main className="container py-5">
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
        <h2 className="section-title mb-0">Destinations</h2>
        <span className="badge text-bg-info-subtle">{filtered.length} results</span>
        <div className="ms-auto d-flex gap-2">
          {['All','Romantic','Beach','Cultural','Historical','Urban'].map(c=> (
            <button key={c} className={`btn btn-sm ${cat===c? 'btn-info' : 'btn-outline-info'}`} onClick={()=>setCat(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="row g-4">
        {filtered.map((d,idx)=> (
          <div className="col-sm-6 col-lg-4" key={d.id} data-aos="fade-up" data-aos-delay={idx*50}>
            <DestinationCard d={d} />
          </div>
        ))}
      </div>
      <div className="mt-4" aria-label="Destination map">
        <div id="destMap" style={{height:360, borderRadius:'1rem', overflow:'hidden'}}></div>
      </div>
    </main>
  )
}
