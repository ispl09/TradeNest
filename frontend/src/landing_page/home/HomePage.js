import React from 'react';

import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Awards from './Awards';
import Education from './Education';
import Openaccount from '../Openaccount';

function HomePage() {
    return (
        <>  
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education/>
            <Openaccount/>
        </>
    );
}

export default HomePage;