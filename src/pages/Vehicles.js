import React, { useEffect, useMemo, useState } from 'react';
import VehicleCard from '../components/VehicleCard';

export default function Vehicles(){
  const [data, setData] = useState({vehicles: []});
  const [filter, setFilter] = useState('All');

  useEffect(()=>{
    fetch(process.env.PUBLIC_URL + '/assets/data/data.json').then(r=>r.json()).then(setData);
    if (window.AOS) window.AOS.init({ once:true });
  },[]);

  const filtered = useMemo(()=> (data.vehicles||[]).filter(v => filter==='All' || v.type===filter), [data, filter]);

  return (
    <main className="container py-5">
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
        <h2 className="section-title mb-0">Vehicles</h2>
        <span className="badge text-bg-info-subtle">{filtered.length} results</span>
        <div className="ms-auto d-flex gap-2">
          {['All','EV','SUV','MPV','Bus'].map(c=> (
            <button key={c} className={`btn btn-sm ${filter===c? 'btn-info' : 'btn-outline-info'}`} onClick={()=>setFilter(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="row g-4">
        {filtered.map((v,idx)=> (
          <div className="col-sm-6 col-lg-4" key={v.id} data-aos="fade-up" data-aos-delay={idx*50}>
            <VehicleCard v={v} />
          </div>
        ))}
      </div>
    </main>
  )
}
