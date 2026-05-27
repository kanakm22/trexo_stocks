import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='' />
                </div>

                <div className='col-6 p-5 mt-3'>
                    <h1>Largest Stock Broker in India</h1>
                    <p className='mb-5 '>
                        2+ million Trexo clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>

                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks and IPOs</li>
                                <li>direct mutual funds</li>
                                <li>Bonds and government securities</li>
                            </ul>
                        </div>
                        <img src='media\images\pressLogos.png' alt='' style={{width: "90%"}}/>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Awards;

