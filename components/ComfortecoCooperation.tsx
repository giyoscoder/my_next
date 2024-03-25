"use client"
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import artel from '@/public/Assets/Images/artel.png';
import lg from '@/public/Assets/Images/lg.png';
import symsung from '@/public/Assets/Images/symsung.png';
import shivaki from '@/public/Assets/Images/shivaki.png';
import avalon from '@/public/Assets/Images/avalon.png';
import gree from '../public/Assets/Images/gree.png';

const DATA = [artel, lg, symsung, shivaki, avalon, gree];

const ComfortecoCooperation = () => {
    const { t } = useTranslation('cooperation');

    return (
        <section className='bg-[#F9FAFB] py-16 md:py-[42px] mt-16 md:mt-24'>
            <div className="container">
                <p className='text-center text-lightColor text-lg md:text-base font-jura font-normal leading-6 '>{t('title')}</p>
                {/* <div className='flex flex-wrap gap-8  lg:flex-nowrap items-center justify-evenly lg:justify-between mt-8'>
                    {cooperateImg.map(img => <div key={img}><img src={img} alt='ariston_img' /></div>)} 
                </div> */}
                <Swiper
                    slidesPerView={5}
                    centeredSlides={true}
                    spaceBetween={60}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 60
                        }
                    }}
                    autoplay={{
                        delay: 300,
                        disableOnInteraction: true,
                        waitForTransition: true
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper cooperation_slider"
                >
                    {DATA.map((a: any) => <SwiperSlide key={a}><img src={a} alt="img" /></SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    )
}

export default ComfortecoCooperation