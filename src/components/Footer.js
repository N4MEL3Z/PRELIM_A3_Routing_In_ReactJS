import React from "react";

const Footer = () => (
  <footer className="footer bg-dark text-white py-5 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h5>CONTACT US</h5>
          <p>Telephone Numbers: (02) 8856-9328 | 8856-9324</p>
          <p>Fax Number: 861-5100</p>
          <p>
            Address:{" "}
            <span className="text-info">
              Lyceum Alabang – Main Bldg. Km. 30 National Road, Tunasan,
              Muntinlupa City
            </span>
          </p>
          <p>
            Follow us on Facebook:{" "}
            <span className="text-info">Lyceum of Alabang, Inc</span>
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <h5>EXTERNAL LINKS</h5>
          <p>
            <a href="#" className="text-info">
              Commission on Higher Education (CHED)
            </a>
          </p>
          <p>
            <a href="#" className="text-info">
              Technical Education and Skills Development Authority (TESDA)
            </a>
          </p>
          <p>
            <a href="#" className="text-info">
              Private Education Assistance Committee (PEAC)
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h5>OTHER LINKS</h5>
          <p>
            <a href="#" className="text-white">
              LOA Publications
            </a>
          </p>
          <p>
            <a href="#" className="text-white">
              Academic Calendar
            </a>
          </p>
          <p>
            <a href="#" className="text-white">
              Facilities
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
