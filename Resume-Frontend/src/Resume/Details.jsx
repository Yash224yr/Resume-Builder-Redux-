import React, { useState } from 'react';


function Details() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={`details ${showForm ? 'open' : ''}`}>
      <h2 onClick={toggleForm} className={showForm ? 'active' : ''}>
        Hello
      </h2>
      <div className={`form-container ${showForm ? 'show' : ''}`}>
        <form>
          <div className="info">
            <input type="text" placeholder="Enter Your Title" />
            <input type="email" placeholder="Enter Your Email" />
            <input type="number" placeholder="Enter Your Number" />
            <input type="text" placeholder="Enter Your Location" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Details;
