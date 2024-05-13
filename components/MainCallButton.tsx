"use client"
import { instance } from '@/instance/instance';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt } from "react-icons/fa";

const MainCallButton = () => {
    const { t } = useTranslation('superiority');
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [phone, setPhone] = useState<any>()

    useEffect(() => {

    
        const commentsHandler = async () => {
            await instance.get('/settings').then(data => setPhone(data?.data))
        }
    
        commentsHandler()

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition + windowHeight + 300 >= documentHeight) {
                setIsButtonVisible(true);
            } else {
                setIsButtonVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    return (
        <div>
            <div className='relative'>
                {!isButtonVisible && <a href={`tel:+998${phone?.data?.phone}`} className='block  fixed bottom-5 z-[60] left-1/2 -translate-x-[50%]'>
                    <button className='bg-mainColor animate-bounce w-full py-4 px-6 rounded-lg text-white flex items-center gap-2 mx-auto'><FaPhoneAlt /> <span className='font-medium text-xs sm:text-base'>{t('button')}</span></button>
                </a>}
            </div>
        </div>
    )
}

export default MainCallButton