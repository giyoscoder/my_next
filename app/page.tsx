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
import { showcase_img } from '../public/Assets/Images';
import { service_img } from '../public/Assets/Images'
import { repair_icon_img, prevention_icon_img, service_icon_img } from '@/public/Assets/Images';
import { first_slider_one, first_slider_two, first_slider_three, third_slider_one, third_slider_two, fourth_slider_one } from '../public/Assets/Images/index';

const DATA_SERVICES = [
    { id: 1, icon: repair_icon_img, title: 'repair', about: 'repair_text' },
    { id: 2, icon: prevention_icon_img, title: 'prevention', about: 'prevention_text' },
    { id: 3, icon: service_icon_img, title: 'boiler', about: 'boiler_text' },
]

const DATA_CATOGERIES = [
    { text: 'contour', data: [first_slider_one, first_slider_two, first_slider_three] },
    { text: 'contour_wall', data: [third_slider_one, first_slider_two, first_slider_three] },
    { text: 'contour_prevention', data: [third_slider_one, third_slider_two] },
    { text: 'contour_floor', data: [fourth_slider_one, fourth_slider_one, fourth_slider_one] },
    { text: 'contour_gas', data: [fourth_slider_one, fourth_slider_one, fourth_slider_one] },
]

const Main = () => {

    return (
        <section>
            <Showcase title={'title'} about={'about'} img={showcase_img} />
            <Superiority img={service_img} />
            <Cooperation />
            <Services data={DATA_SERVICES} />
            <Catogeries about='about' data={DATA_CATOGERIES}/>
            <ContourService />
            <Experience />
            <Comments />
            <MainCallButton />
        </section>
    )
}

export default Main