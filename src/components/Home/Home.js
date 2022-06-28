import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact';
import Education from '../Education/Education';
import Portfolio from '../Portfolio/Portfolio';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Education></Education>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;