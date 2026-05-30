import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Award from './Award';
import Education from './Education';
import Openaccount from '../Openaccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return (
        <>  
            <Navbar/>
            <Hero />
            <Award />
            <Stats />
            <Pricing />
            <Education/>
            <Openaccount/>
            <Footer/>
        </>
    );
}

export default HomePage;