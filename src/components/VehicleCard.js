import React from 'react';

export default function VehicleCard({v}){
  return (
    <article className="card hover-lift h-100 position-relative">
      <span className="vehicle-tag">{v.type}</span>
      <img src={v.img} className="card-img-top" alt={v.name} loading="lazy"/>
      <div className="card-body">
        <h5 className="mb-1">{v.name}</h5>
        <div className="small text-secondary">Seats: {v.seats} · Range: {v.range} · {v.transmission}</div>
      </div>
    </article>
  )
}
