import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 border-top'>
                <h1 className='text-center'>
                    People
                </h1>
            </div>

            <div className='row p-5 text-muted fs-6'
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-6 p-3 text-center'>
                    <img src="media/ishika.jpeg" style={{ borderRadius: "90%", width: "50%" }} />
                    <h4 className='mt-5'>Ishika Paul</h4>
                    <h6 className='mt-3'>Founder, CEO</h6>
                </div>
                <div className='col-6 p-5'>
                    <p>
                        Ishika bootstrapped and founded TradeNest in 2026 to overcome the
                        hurdles he faced during his decade long stint as a trader. Today,
                        TradeNest has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        She is a member of the SEBI Secondary Market Advisory Committee
                        (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is her zen.</p>
                    <p>
                        Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
                        <a href="">Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;