import React from 'react';

function Pricing() {
  return (
    <div className='container'>
      <div className='row p-5'>
        <div className='col-4'>
          <h2 className='mb-3 '>Unbeatable pricing</h2>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='' style={{ textDecoration: "none" }}>See Pricing &nbsp; <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
        </div>

        <div className='col-2'>
          {/* empty */}
        </div>

        <div className='col-6'>
          <div className='row text-center'>
            <div className='col border p-3'>
              <h1 className='mb-3'>&#8377;0</h1>
              <p className='text-muted'>Free equity delivery
                and direct mutual funds</p>
            </div>
            <div className='col border p-3'>
              <h1 className='mb-3'>&#8377;20</h1>
              <p className='text-muted'>Intraday and
                F&O</p>
            </div>



          </div>


        </div>
      </div>

    </div>
  );
}

export default Pricing;