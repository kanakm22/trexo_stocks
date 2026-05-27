import React from 'react';

function Team() {
  return (
    <div className='container'>
      <h4 className='text-center mb-3'>People</h4>
      <div className='row'>
        <div className='col text-center '>
          <img src='media/images/nithinKamath.jpg' alt='' style={{ borderRadius: "100%", width: "60%" }} className='p-3' />
          <div className='text-center'>
            <p>Nithin Kamath</p>
            <p className='text-muted'>Founder, CEO</p>
          </div>

        </div>

        <div className='col p-5 mt-3'>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a href='#' style={{textDecoration: "none"}}>Homepage</a> /<a href='#' style={{textDecoration: "none"}}>TradingQnA</a> /<a href='#' style={{textDecoration: "none"}}>Twitter</a></p>

        </div>

      </div>

    </div>
  );
}

export default Team;