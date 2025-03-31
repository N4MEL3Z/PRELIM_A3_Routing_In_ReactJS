import React from "react";

const Home = () => (
  <div className="container text-center mt-5">
    <header className="hero py-5">
      <h1>Welcome to Lyceum</h1>
      <p className="lead">Your journey to knowledge begins here.</p>
      <button className="btn btn-warning mt-3 px-4 py-2">Learn More</button>
    </header>
    <div className="educational-statement p-5 mt-4 bg-light rounded">
      <h2 className="mb-4">LYCEUM OF ALABANG EDUCATIONAL STATEMENT</h2>
      <div className="section philosophy mb-3">
        <h3 className="text-primary">PHILOSOPHY</h3>
        <p>
          Providing quality instruction and innovation for future generations
          with moral and spiritual values.
        </p>
      </div>
      <div className="section vision mb-3">
        <h3 className="text-success">VISION</h3>
        <p>
          To become a leading institution in advancing knowledge, skills, and
          values for national development.
        </p>
      </div>
      <div className="section mission">
        <h3 className="text-danger">MISSION</h3>
        <p>
          Deliver world-class education through competent personnel, high-end
          facilities, and industry-based courses.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
