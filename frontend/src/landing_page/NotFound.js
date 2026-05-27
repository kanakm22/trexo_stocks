import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return ( 
    <>
      <div className='container p-5'>
        <div className='row text-center'>
          <h1 className='mt-5 mb-3'>404 NOT FOUND</h1>
          <p className='text-muted' >
            Sorry, the page you are looking for does not exist..
          </p>
          <Link to='/'><button className='p-2 btn' style={{ width: "20%", margin: "0 auto", backgroundColor: "#0d6efd", color: "#fff" }}>Go Home</button></Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;