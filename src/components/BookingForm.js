import React from 'react';
import { useForm } from 'react-hook-form';

export default function BookingForm({ packages = [] }){
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm();

  function onSubmit(data){
    const modalEl = document.getElementById('confirmModal');
    if (modalEl){
      const m = new window.bootstrap.Modal(modalEl);
      m.show();
    }
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="card p-3 rounded-4 shadow-sm">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input className={`form-control ${errors.name ? 'is-invalid':''}`} {...register('name', { required:true, minLength: 3 })} placeholder="Your name"/>
            {errors.name && <div className="invalid-feedback">Please enter your name (min 3 chars).</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className={`form-control ${errors.email ? 'is-invalid':''}`} {...register('email', { required:true, pattern: /.+@.+\..+/ })} placeholder="you@example.com"/>
            {errors.email && <div className="invalid-feedback">Enter a valid email.</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Travel Date</label>
            <input type="date" className={`form-control ${errors.date ? 'is-invalid':''}`} {...register('date', { required:true })}/>
            {errors.date && <div className="invalid-feedback">Select a date.</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Package</label>
            <select className={`form-select ${errors.package ? 'is-invalid':''}`} {...register('package', { required:true })}>
              <option value="">Choose…</option>
              {packages.map(p=> <option key={p.id} value={p.title}>{p.title} — {p.dest}</option>)}
            </select>
            {errors.package && <div className="invalid-feedback">Choose a package.</div>}
          </div>
          <div className="col-12">
            <label className="form-label">Notes</label>
            <textarea className="form-control" rows="3" placeholder="Special requests (optional)" {...register('notes')}></textarea>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-brand btn-lg" type="submit">Confirm Booking</button>
        </div>
      </form>

      {/* Confirmation Modal */}
      <div className="modal fade" id="confirmModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4">
            <div className="modal-body p-5 text-center">
              <div className="display-6 text-success mb-3"><i className="fa-solid fa-circle-check"></i></div>
              <h5 className="mb-1">Booking Request Submitted</h5>
              <p className="text-secondary mb-0">We’ll email your confirmation shortly. Thanks for choosing OmkarHolidays!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
