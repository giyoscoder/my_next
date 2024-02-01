import React from 'react';
import Showcase from '../components/Showcase';
import Superiority from '../components/Superiority';
import Cooperation from '../components/Cooperation';
import Services from '../components/Services';
import Catogeries from '../components/Catogeries';
import ContourService from '../components/ContourService';
import Experience from '../components/Experience';
import Comments from '../components/Comments';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <section>
            {/* <Navbar /> */}
            <Showcase />
            <Superiority />
            <Cooperation />
            <Services />
            <Catogeries />
            <ContourService />
            <Experience />
            <Comments />
            {/* <Contact /> */}
            {/* <Footer /> */}
        </section>
    )
}

export default Main