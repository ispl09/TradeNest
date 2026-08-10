import React from 'react';

function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row mb-5 mt-5 text-center'>
                <h1>The TradeNest Universe</h1>
                <p>Extend your trading and invetment experience even further with our partner platforms</p>

                <div className='col-4 p-3 mt-4'>
                    <img style={{width:"50%"}} src="media/smallcaseLogo.png"></img>
                    <p className="text-muted mt-2 stext-small">Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-4'>
                    <img style={{width:"33%"}} src="media/streakLogo.png"></img>
                    <p className="text-muted mt-3 text-small">Algo & strategy platform platform</p>
                </div>
                <div className='col-4 p-3 mt-4'>
                    <img className='mb-1' style={{width:"37%"}} src="media/sensibullLogo.svg"></img>
                    <p className="text-muted mt-4 text-small">Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"45%"}} src="media/zerodhaFundhouse.png"></img>
                    <p className="text-muted mt-2 text-small">Asset management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/goldenpiLogo.png"></img>
                    <p className="text-muted mt-3 text-small">Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img style={{width:"23%"}} src="media/dittoLogo.png"></img>
                    <p className="text-muted mt-4 text-small">Insurance</p>
                </div>
                <button mt-3 className='p-2 mt-4 mb-5 btn btn-primary fs-6' style={{width:"17%", margin: "0 auto"}}>Signup Now</button>
            </div>
       </div>
       
    );
}

export default Universe;