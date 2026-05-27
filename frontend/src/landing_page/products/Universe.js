import React from 'react';

function Universe() {
  return (
    <div className='container mt-5'>
      <div className='row text-center'>
        <h2 className='mb-4 '>The Trexo Universe</h2>
        <p className='text-muted mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
      </div>

      <div className='row p-5'>
        <div className='col '>
          <img src="media/images/sensibullLogo.svg" alt='' style={{ width: "50%" }} className='mb-3' />
          <p className='text-muted ' style={{ fontSize: "13px", padding: "0 35% 0 0" }}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more</p>
        </div>

        <div className='col'>
          <img src="media/images/streakLogo.png" alt='' style={{ width: "40%" }} className='mb-3' />
          <p className='text-muted ' style={{ fontSize: "13px", padding: "0 35% 0 0" }}>Systematic trading platform
            that allows you to create and backtest
            strategies without coding.</p>
        </div>

        <div className='col'>
          <img src="media/images/smallcaseLogo.png" alt='' style={{ width: "50%" }} className='mb-3' />
          <p className='text-muted ' style={{ fontSize: "13px", padding: "0 35% 0 0" }}>Thematic investing platform
            that helps you invest in diversified
            baskets of stocks on ETFs.</p>
        </div>

      </div>
      <div className='row  p-5 '>
        <div className='col'>
          <img src="media/images/goldenpiLogo.png" alt='' style={{ width: "50%" }} className='mb-3' />
          <p className='text-muted ' style={{ fontSize: "13px", padding: "0 35% 0 0" }}>Investment research platform
            that offers detailed insights on stocks,
            sectors, supply chains, and more.</p>
        </div>

        <div className='col'>
          <img src="media/images/dittoLogo.png" alt='' style={{ width: "35%" }} className='mb-3' />
          <p className='text-muted ' style={{ fontSize: "13px", padding: "0 35% 0 0" }}>Personalized advice on life
            and health insurance. No spam
            and no mis-selling.</p>
        </div>
        <div className='col'></div>


      </div>

      <div className='row'>

      </div>
    </div>
  );
}

export default Universe;