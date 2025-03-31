import React from "react";

const Contact = () => (
  <div className="container text-center my-5">
    <div className="card p-4 shadow-lg rounded">
      <div className="card-body">
        <h2 className="text-primary">CONTACT US</h2>
        <p className="text-muted">Please fill this form in a decent manner</p>
        <form>
          <div className="mb-3 text-start">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label">E-Mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark w-100">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;
