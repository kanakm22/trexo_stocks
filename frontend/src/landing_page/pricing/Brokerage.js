import React from 'react';

function Brokerage() {
  return (
    <div className='container'>
      <div className='row'>

        <div className='col'>
          <div className='text-center'>
            <img src='media/images/pricingMF.svg' alt='' style={{ width: "80%" }} /></div>
          <h4 className='text-center mb-4'>Free equity delivery</h4>
          <p className='text-muted text-center'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

        <div className='col'>
          <div className='text-center'>
            <img src='media/images/intradayTrades.svg' alt='' style={{ width: "80%" }} /></div>
          <h4 className='text-center mb-4'>Intraday and F&O trades</h4>
          <p className='text-muted text-center'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        <div className='col'>
          <div className='text-center'>
            <img src='media/images/pricingMF.svg' alt='' style={{ width: "80%" }} /></div>
          <h4 className='text-center mb-4'>Free direct MF</h4>
          <p className='text-muted text-center'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
        




      </div>
    </div>
  );
}

export default Brokerage;