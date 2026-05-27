import React from 'react';
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'


function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection imageUrl={'media/images/kite.png'}
        productName={<h4>Kite</h4>}
        productDesc={<p>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.</p>}
        tryDemoLink={"#"}
        learnMoreLink={"#"}
        tryDemo={"Try Demo→"}
        learnMore={"Learn More→"} />

      <RightSection productName={"Console"}
        productDesc={"The central dashboard for your Trexo account. Gain insights into your trades and investments with in-depth reports and visualisations."}
        learnMoreLink={"#"}
        learnMore={"Learn More→"}
        imageUrl={'media/images/console.png'}
      />

      <LeftSection imageUrl={'media/images/coin.png'}
        productName={<h4>Coin</h4>}
        productDesc={<p>Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>}
        tryDemoLink={"#"}
        tryDemo={"Coin→"}
      />

      <RightSection productName={"Kite Connect API"}
        productDesc={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."}
        learnMoreLink={"#"}
        learnMore={"Kite Connect→"}
        imageUrl={'media/images/landing.svg'}
      />

      <LeftSection imageUrl={'media/images/varsity.png'}
        productName={<h4>Varsity mobile</h4>}
        productDesc={<p>An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.</p>}

      />

      <p className='fs-5 text-center mt-5 mb-5'>Want to know more about our technology stack? Check out the<a href='#' style={{ textDecoration: "none" }}>Trexo.tech</a>  blog.</p>


      <Universe />
    </>
  );
}

export default ProductPage;