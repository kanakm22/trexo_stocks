import React from 'react';

function RightSection({
  imageUrl,
  productName,
  productDesc,
  learnMoreLink,
  learnMore
}) {
    return ( 
        <div className='container'>
          <div className='row'>
            <div className='col p-5 mt-5 '>
              <h4 className='mb-3 mt-5'>{productName}</h4>
              <p className='text-muted mt-3'>{productDesc}</p>
              <p><a href={learnMore} style={{textDecoration:"none"}}>{learnMore}</a></p>
            </div>
            <div className='col'>
              <img src={imageUrl} alt='' style={{ width: "100%" }} className='p-4' />
            </div>
          </div>
        </div>
     );
}

export default RightSection;