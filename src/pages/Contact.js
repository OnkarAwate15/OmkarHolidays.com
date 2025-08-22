import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Contact(){
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(()=>{
    if (window.AOS) window.AOS.init({ once:true });
  },[]);

  function onSubmit(data){
    const el = document.getElementById('contactToast');
    if (el){
      const toast = new window.bootstrap.Toast(el);
      toast.show();
    }
    reset();
  }

  return (
    <main className="container py-5">
      <h2 className="section-title mb-3">Contact Us</h2>
      <div className="row g-4">
        <div className="col-lg-7">
          <form onSubmit={handleSubmit(onSubmit)} className="card p-3 rounded-4 shadow-sm">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input className={`form-control ${errors.name?'is-invalid':''}`} {...register('name',{required:true})} />
                {errors.name && <div className="invalid-feedback">Name is required.</div>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className={`form-control ${errors.email?'is-invalid':''}`} {...register('email',{required:true, pattern: /.+@.+\..+/})} />
                {errors.email && <div className="invalid-feedback">Valid email required.</div>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Inquiry Type</label>
                <select className="form-select" {...register('type',{required:true})}>
                  <option value="">Choose…</option>
                  <option>Booking</option>
                  <option>Support</option>
                  
                </select>
              </div>
              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea className={`form-control ${errors.message?'is-invalid':''}`} rows="4" {...register('message',{required:true, minLength:10})}></textarea>
                {errors.message && <div className="invalid-feedback">Please enter at least 10 characters.</div>}
              </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
              <button className="btn btn-brand btn-lg">Send</button>
            </div>
          </form>
        </div>
        <div className="col-lg-5">
          <div className="card p-3 h-100">
            <h6>Contact Details</h6>
            <p className="small mb-1"><i className="fa-solid fa-phone"></i> +91 9764718235</p>
            <p className="small mb-1"><i className="fa-solid fa-envelope"></i> OmkarHolidays76@gmail.com</p>
            <p className="small"><i className="fa-solid fa-location-dot"></i> Pune, Maharashtra, India</p>
          </div>
        </div>
      </div>

      {/* Toast for success */}
      <div className="toast position-fixed bottom-0 end-0 m-3" role="status" id="contactToast" aria-live="polite" aria-atomic="true">
        <div className="toast-header">
          <i className="fa-solid fa-circle-check text-success me-2"></i>
          <strong className="me-auto">Message sent</strong>
          <small>Just now</small>
          <button type="button" className="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          Thanks for reaching out! We’ll reply soon.
        </div>
      </div>
    </main>
  )
}
