import React from 'react';

function Hero() {
  return (
    <div className='container-fluid' style={{ backgroundColor: '#fbfbfb', borderBottom: '1px solid #eee' }}>
      <div className='container' style={{ padding: '4rem 6rem' }}>

        <div className='row align-items-center mb-4'>
          <div className='col'>
            <h2 style={{ color: '#444' }}>Support Portal</h2>
          </div>
          <div className='col d-flex justify-content-end'>
            <button type="button" class="btn btn-primary">My tickets</button>


          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <div className="input-group input-group-lg" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <span className="input-group-text bg-white border-end-0 text-muted" style={{ paddingLeft: '20px' }}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-2 py-3"
                aria-label="Search input"
                placeholder='Eg: How do I open my account, How do i activate F&O...'
                style={{ fontSize: "17px", color: '#444' }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;