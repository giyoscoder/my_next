// 'use client'
import React from 'react';
import Showcase from '../components/Showcase';
import Superiority from '../components/Superiority';
import Cooperation from '../components/Cooperation';
import Services from '../components/Services';
import Catogeries from '../components/Catogeries';
import ContourService from '../components/ContourService';
import Experience from '../components/Experience';
import Comments from '../components/Comments';
import MainCallButton from '@/components/MainCallButton';

const Main = () => {
    return (
        <section>
            <Showcase />
            <Superiority />
            <Cooperation />
            <Services />
            <Catogeries />
            <ContourService />
            <Experience />
            <Comments />
            <MainCallButton />
        </section>
    )
}

export default Main