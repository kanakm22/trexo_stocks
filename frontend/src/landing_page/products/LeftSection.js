import React from 'react';

function LeftSection({
  imageUrl,
  productName,
  productDesc,
  tryDemoLink,
  learnMoreLink,
  tryDemo,
  learnMore
}
) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <img src={imageUrl} alt='' style={{ width: "90%" }} className='p-4' />
        </div>
        <div className='col p-5 mb-5'>
          <h4 className='mb-4 mt-5'>{productName}</h4>
          <p className='text-muted' >{productDesc}</p>
          <p><a href={tryDemo} style={{ textDecoration: "none" }}>{tryDemo}</a>
            <a href={learnMore} style={{ textDecoration: "none" }} className='p-4'>{learnMore} </a></p>
          <div>
            <img src='media/images/googlePlayBadge.svg' alt='' style={{marginRight: "2em"}}/>
            <img src='media/images/appStoreBadge.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;