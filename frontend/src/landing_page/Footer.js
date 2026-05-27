import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}  >
      <div className='container border-top '>
        <div className='row mt-3'>
          <div className='col text-center '>
            <img src='media/images/logo.png' alt='' style={{ width: "10%" }} className='mb-2' />
            <p className='text-muted'>© 2010 - 2026, Trexo Broking Ltd. <br></br>
              All rights reserved.</p>
          </div>



        </div>

      </div>
    </footer>
  );
}

export default Footer; 