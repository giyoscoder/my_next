"use client"
import React from 'react'
import Showcase from '../../CElements/CShowcase/Showcase'
import { extra_icon_img, icon_remont, icon_setting, icon_boiler, icon_boiler_repair, icon_dilever, icon_two_boiler, icon_wall_repair, repair_icon_img } from '../../public/Assets/Images';
import ContourService from '../../CElements/ContourService/ContourService';
import Company from '../../CElements/Company/Company';
import MainCallButton from '@/components/MainCallButton';

const DATA = [
    { id: 1, text: 'Профилактика котлов', icon: icon_setting },
    { id: 2, text: 'Ремонт котлов', icon: icon_boiler_repair },
    { id: 3, text: 'Ремонт двух контурных котлов', icon: icon_two_boiler },
    { id: 4, text: 'Обслуживание котлов', icon: icon_boiler },
    { id: 5, text: 'Сервисное Обслуживание газовых котлов airfel', icon: icon_remont },
];

const TEXT_LIST = ['Наш сервисный центр котлов "Service center Airfel" в Ташкенте предлагает широкий спектр услуг для обслуживания и ремонта вашего отопительного оборудования. Мы гордимся нашим огромным опытом и профессионализмом, которые позволяют нам предоставлять высококачественные услуги, соответствующие самым высоким стандартам.',
    'В первую очередь, мы предлагаем своим клиентам быстрый и надежный ремонт котлов "Service kotlov Airfel". Наша команда опытных техников обладает глубокими знаниями и умениями в области ремонта отопительного оборудования, что позволяет нам быстро и эффективно устранять любые неисправности. Мы используем только оригинальные запчасти и современное оборудование, чтобы гарантировать долгосрочную и надежную работу вашего котла после ремонта.', 'Кроме ремонта, мы также предлагаем регулярное техническое обслуживание котлов "remont kotlov Airfel". Мы рекомендуем проводить такое обслуживание как минимум раз в год, чтобы гарантировать оптимальную и безопасную работу вашего отопительного оборудования. В ходе обслуживания наши техники проводят тщательную проверку всех систем котла, чистку и настройку, а также профилактические работы для предотвращения возможных поломок и сбоев.', 'Наш сервисный центр "Airfel" также гарантирует быструю реакцию на ваши заявки. Мы понимаем, что неполадки в отопительной системе могут привести к дискомфорту и неудобству, поэтому стараемся оперативно откликаться на все обращения клиентов. Наша команда готова обслужить вас в удобное для вас время, в том числе и в случае срочных ситуаций.', 'Еще одна наша услуга - установка котлов "Airfel". Мы поможем вам выбрать подходящую модель, учитывая особенности вашего дома и ваши потребности в отоплении. Наши опытные монтажники профессионально установят котел, следуя всем необходимым инструкциям и стандартам безопасности.', 'Если у вас возникли проблемы с котлом "Airfel" или вам требуется его обслуживание, обратитесь в наш сервисный центр в Ташкенте. Мы гарантируем высокое качество работы, профессиональный подход и индивидуальный подход к каждому клиенту. Доверьте нам свои потребности в обслуживании котлов "Airfel" и мы с удовольствием вам поможем.']

const Airfel = () => {
    return (
        <div className='container'>
            <Showcase title='Service Center Airfel' about='Постгарантийное обслуживание' />
            <section id='about'>
                <h2 className='text-darkColor text-[32px] text-center md:text-[48px] font-russo font-normal leading-[44px] md:leading-[96px] -tracking-[1.6px] '>Наши услуги</h2>
                <div className='grid md:grid-cols-2 mx-auto text-center justify-center gap-6 md:gap-8 mt-12 md:mt-14'>
                    {DATA?.map(({ id, text, icon }) => <ContourService key={id} text={text} icon={icon} />)}
                </div>
            </section>
            <section>
                <Company text='О компании' data={TEXT_LIST} />
            </section>
            <MainCallButton />
        </div>
    )
}

export default Airfel