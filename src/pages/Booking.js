import React, { useEffect, useState } from 'react';
import BookingForm from '../components/BookingForm';

export default function Booking(){
  const [data, setData] = useState({tours: []});

  useEffect(()=>{
    fetch(process.env.PUBLIC_URL + '/assets/data/data.json').then(r=>r.json()).then(setData);
    if (window.AOS) window.AOS.init({ once:true });
  },[]);

  return (
    <main className="container py-5">
      <h2 className="section-title mb-3">Book Your Tour</h2>
      <BookingForm packages={data.tours || []} />
    </main>
  )
}
