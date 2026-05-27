import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          <img src='media/images/education.svg' alt='' style={{ width: "75%" }} />
        </div>

        <div className='col'>
          <h2 className='mb-3'>Free and open market education</h2>
          <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <Link to='/' className='' style={{ textDecoration: "none" }}>Varsity &nbsp; <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>

          <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <Link to='/' style={{ textDecoration: "none" }}>TradingQ&A &nbsp; <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
        </div>
      </div>
    </div>
  );
}

export default Education;