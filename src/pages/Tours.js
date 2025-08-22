import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function useQuery(){
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export default function Tours(){
  const [data, setData] = useState({tours: []});
  const q = useQuery().get('q') || '';
  const [sortBy, setSortBy] = useState('pop');

  useEffect(()=>{
    fetch(process.env.PUBLIC_URL + '/assets/data/data.json').then(r=>r.json()).then(setData);
    if (window.AOS) window.AOS.init({ once:true });
  },[]);

  const filtered = useMemo(()=> (data.tours||[])
    .filter(t => (t.title + ' ' + t.dest).toLowerCase().includes(q.toLowerCase()))
    .sort((a,b)=> sortBy==='price' ? a.price-b.price : sortBy==='duration' ? a.duration-b.duration : b.pop-a.pop)
  , [data, q, sortBy]);

  return (
    <main className="container py-5">
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
        <h2 className="section-title mb-0">Tour Packages</h2>
        <span className="badge text-bg-info-subtle">{filtered.length} results</span>
        <div className="ms-auto d-flex gap-2">
          <select className="form-select form-select-sm" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option value="pop">Sort: Popularity</option>
            <option value="price">Sort: Price</option>
            <option value="duration">Sort: Duration</option>
          </select>
        </div>
      </div>
      <div className="row g-4">
        {filtered.map((t,idx)=> (
          <div className="col-md-6 col-lg-4" key={t.id} data-aos="fade-up" data-aos-delay={idx*50}>
            <article className="card hover-lift h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="mb-1">{t.title}</h5>
                    <div className="small text-secondary">{t.dest}</div>
                  </div>
                  <span className="badge text-bg-success">₹{t.price}</span>
                </div>
                <div className="small mt-2">Duration: {t.duration} days</div>
                <ul className="small text-secondary mt-2 mb-3">
                  {t.includes.map((i,ix)=>(<li key={ix}>{i}</li>))}
                </ul>
                <button className="btn btn-outline-info btn-sm" type="button" data-bs-toggle="collapse" data-bs-target={`#it-${t.id}`} aria-expanded="false" aria-controls={`it-${t.id}`}>Packages</button>
                <Link to="/booking" className="btn btn-brand btn-sm ms-2">Book Now</Link>
                <div className="collapse mt-2" id={`it-${t.id}`}>
                  <div className="card card-body">
                    <ol className="mb-0">
                      {t.itinerary.map((d,ix)=>(<li key={ix}>{d}</li>))}
                    </ol>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </main>
  )
}
