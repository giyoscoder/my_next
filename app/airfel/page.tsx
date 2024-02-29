"use client"
import React from 'react'
import Showcase from '../../CElements/CShowcase/Showcase'
import { extra_icon_img, icon_remont, icon_setting, icon_boiler, icon_boiler_repair, icon_dilever, icon_two_boiler, icon_wall_repair, repair_icon_img } from '../../public/Assets/Images';
import ContourService from '../../CElements/ContourService/ContourService';
import Company from '../../CElements/Company/Company';
import MainCallButton from '@/components/MainCallButton';
import { Metadata } from 'next';
const DATA = [
    { id: 1, text: 'Профилактика котлов', icon: icon_setting },
    { id: 2, text: 'Ремонт котлов', icon: icon_boiler_repair },
    { id: 3, text: 'Ремонт двух контурных котлов', icon: icon_two_boiler },
    { id: 4, text: 'Обслуживание котлов', icon: icon_boiler },
    { id: 5, text: 'Сервисное Обслуживание газовых котлов airfel', icon: icon_remont },
];


export const metadata: Metadata = {
    title: 'Сервисный центр Airfel: гарантийный и постгарантийный ремонт',
    description: 'Доверьте ремонт вашего котла Airfel профессионалам! Сертифицированный сервисный центр Airfel. Гарантия качества.'
}

const TEXT_LIST = [
    
    'Наш сервисный центр котлов "Service center Airfel" в Ташкенте предлагает широкий спектр услуг для обслуживания и ремонта вашего отопительного оборудования. Мы гордимся нашим огромным опытом и профессионализмом, которые позволяют нам предоставлять высококачественные услуги, соответствующие самым высоким стандартам.', 'В первую очередь, мы предлагаем своим клиентам быстрый и надежный ремонт котлов "Service kotlov Airfel". Наша команда опытных техников обладает глубокими знаниями и умениями в области ремонта отопительного оборудования, что позволяет нам быстро и эффективно устранять любые неисправности. Мы используем только оригинальные запчасти и современное оборудование, чтобы гарантировать долгосрочную и надежную работу вашего котла после ремонта.', 'Кроме ремонта, мы также предлагаем регулярное техническое обслуживание котлов "remont kotlov Airfel". Мы рекомендуем проводить такое обслуживание как минимум раз в год, чтобы гарантировать оптимальную и безопасную работу вашего отопительного оборудования. В ходе обслуживания наши техники проводят тщательную проверку всех систем котла, чистку и настройку, а также профилактические работы для предотвращения возможных поломок и сбоев.', 'Наш сервисный центр "Airfel" также гарантирует быструю реакцию на ваши заявки. Мы понимаем, что неполадки в отопительной системе могут привести к дискомфорту и неудобству, поэтому стараемся оперативно откликаться на все обращения клиентов. Наша команда готова обслужить вас в удобное для вас время, в том числе и в случае срочных ситуаций.', 'Еще одна наша услуга - установка котлов "Airfel". Мы поможем вам выбрать подходящую модель, учитывая особенности вашего дома и ваши потребности в отоплении. Наши опытные монтажники профессионально установят котел, следуя всем необходимым инструкциям и стандартам безопасности.', 'Если у вас возникли проблемы с котлом "Airfel" или вам требуется его обслуживание, обратитесь в наш сервисный центр в Ташкенте. Мы гарантируем высокое качество работы, профессиональный подход и индивидуальный подход к каждому клиенту. Доверьте нам свои потребности в обслуживании котлов "Airfel" и мы с удовольствием вам поможем.']

const TEXT_LIST_TWO = [
    'Почему выбор нашего сервисного центра - это правильное решение для ремонта котлов Airfel в Ташкенте? Мы готовы предложить вам несколько веских причин:',
    'Опытные специалисты: Наша команда состоит из квалифицированных мастеров, которые имеют обширный опыт работы с котлами Airfel. Мы знаем об этом оборудовании все до мельчайших деталей и можем решить любую проблему',
    'Использование оригинальных запчастей: Мы стремимся к качеству во всем, включая используемые запчасти. При проведении ремонта мы используем только оригинальные запчасти Airfel, чтобы гарантировать долгосрочную надежность вашего котла.',
    'Быстрое реагирование: Мы понимаем, что проблемы с котлом могут возникнуть в самый неподходящий момент. Поэтому мы готовы оперативно реагировать на ваши заявки и провести ремонт в кратчайшие сроки.',
    'Гарантия качества: Мы уверены в качестве наших услуг и предоставляем гарантию на выполненные работы. Это демонстрирует наше доверие к своей работе и обеспечивает вас защитой в случае непредвиденных ситуаций.',
    'Поддержка клиентов: Мы ценим каждого клиента и готовы предоставить вам всю необходимую поддержку и консультации. Наша команда всегда готова ответить на ваши вопросы и помочь вам в уходе за котлом после ремонта.',
    'Выбрав наш сервисный центр для ремонта котлов Airfel, вы получаете профессиональный подход, надежность и качество обслуживания. Обратитесь к нам прямо сейчас и доверьте свое оборудование опытным специалистам!'
]

const TEXT_LIST_THREE = [
    'Мы понимаем, что неполадки с котлом могут нарушить ваш комфорт и спокойствие. Поэтому мы предлагаем простой и эффективный процесс ремонта котлов Airfel, который направлен на быстрое восстановление работы вашего оборудования',
    'Прием заявки: Начинается с вашего обращения к нам. Вы можете связаться с нами по телефону или заполнить форму обратной связи на нашем сайте. Мы оперативно реагируем на все запросы и назначаем встречу с нашим мастером в удобное для вас время',
    'Диагностика: Наши опытные специалисты проведут тщательную диагностику вашего котла Airfel, чтобы выявить причину неисправности. Мы используем современное оборудование и методы, чтобы быстро и точно определить проблему.',
    'Обсуждение вариантов: После диагностики мы обсудим с вами возможные варианты ремонта и предложим оптимальное решение. Мы всегда стараемся найти наилучший баланс между качеством ремонта и вашими бюджетными ограничениями.',
    'Выполнение работ: После вашего согласия на ремонт наши мастера приступают к выполнению необходимых работ. Мы работаем быстро и качественно, чтобы как можно скорее вернуть ваш котел Airfel в рабочее состояние.',
    'Проверка работоспособности: По завершении ремонта мы проведем тестирование вашего котла, чтобы убедиться, что все функции работают корректно. Мы не оставляем никаких шансов на повторное возникновение проблемы.',
    'Обратная связь: Важно для нас знать ваше мнение о качестве нашей работы. Мы будем рады услышать ваши отзывы и предложения, чтобы постоянно улучшать качество наших услуг.',
    'Надеемся, что наш процесс ремонта котлов Airfel сделает вашу жизнь намного комфортнее. Обратитесь к нам прямо сейчас, и мы с удовольствием поможем вам вернуть ваш котел в рабочее состояние!'
]



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
                <Company text='Преимущества выбора нашего сервисного центра для ремонта котлов Airfel в Ташкенте' data={TEXT_LIST_TWO} />
                <Company text='Процесс ремонта котлов Airfel: Шаги к вашему комфорту' data={TEXT_LIST_THREE} />
            </section>
            <MainCallButton />
        </div>
    )
}

export default Airfel