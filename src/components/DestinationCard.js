import React from 'react';
import { Link } from 'react-router-dom';

export default function DestinationCard({d}){
  return (
    <article className="card hover-lift h-100">
      <img src={d.img} className="card-img-top" alt={d.title} loading="lazy"/>
      <div className="card-body">
        <span className="badge badge-soft">{d.cat}</span>
        <h5 className="mt-2">{d.title}</h5>
        <p className="small text-secondary">{d.blurb}</p>
        <Link to={`/tours?q=${encodeURIComponent(d.title)}`} className="stretched-link">View tours</Link>
      </div>
    </article>
  )
}
