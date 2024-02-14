'use client'
import React from 'react'
import Showcase from '../../CElements/CShowcase/Showcase'
import ContourService from '../../CElements/ContourService/ContourService'
import { extra_icon_img, icon_remont, icon_setting, icon_boiler, icon_boiler_repair, icon_dilever, icon_two_boiler, icon_wall_repair, repair_icon_img } from '../../public/Assets/Images';
import Company from '../../CElements/Company/Company';
import MainCallButton from '@/components/MainCallButton';

const DATA = [
  { id: 1, text: 'Бесплатный выезд мастеров', icon: icon_dilever },
  { id: 2, text: 'Обслуживание котлов', icon: icon_boiler },
  { id: 3, text: 'Профилактика котлов', icon: icon_setting },
  { id: 4, text: 'Ремонт котлов', icon: icon_boiler_repair },
  { id: 5, text: 'Ремонт двух контурных котлов', icon: icon_two_boiler },
  { id: 6, text: 'Ремонт настенных котлов', icon: icon_wall_repair },
  { id: 7, text: 'Ремонт напольных котлов', icon: icon_remont },
]

const TEXT_LIST = ['Сервисный центр котлов unit: предоставление квалифицированных и надежных услуг по системам отопления, вентиляции и кондиционирования воздуха.',
  'Добро пожаловать в сервисный центр котлов unit, ваш надежный поставщик комплексных решений в области HVAC. Имея многолетний опыт и стремление к совершенству, мы гордимся тем, что являемся идеальным сервисным центром для решения всех ваших задач по отоплению, вентиляции и кондиционированию воздуха.', 'В Сервисном Центре Котлов unit мы понимаем важность создания комфортной и энергоэффективной среды для вашего дома или рабочего места. Наша команда высококвалифицированных технических специалистов обладает знаниями и опытом для работы с различными системами HVAC, включая продукцию unit. Если вам требуются услуги по установке, техническому обслуживанию или ремонту, мы предоставим вам всю необходимую информацию.', 'Наши услуги начинаются с подробной консультации, позволяющей понять ваши конкретные требования и предложить индивидуальные решения. Мы верим в предоставление прозрачных и честных рекомендаций, гарантируя, что вы примете обоснованные решения относительно вашей системы отопления, вентиляции и кондиционирования. Наши специалисты тщательно оценят вашу существующую установку с учетом таких факторов, как пространство, характер использования и цели энергоэффективности, чтобы порекомендовать вам наиболее подходящие варианты.', 'Установка является важнейшим аспектом любой системы отопления, вентиляции и кондиционирования, и наши квалифицированные специалисты хорошо разбираются в тонкостях продукции unit. Мы используем передовые технологии и новейшие инструменты для обеспечения точной и эффективной установки. Будьте уверены, ваша система будет готова к оптимальной работе в кратчайшие сроки с минимальным нарушением вашей повседневной жизни.', 'Регулярное техническое обслуживание необходимо для обеспечения бесперебойной и эффективной работы вашей системы отопления, вентиляции и кондиционирования воздуха. Наши услуги по техническому обслуживанию включают комплексные проверки, очистку и калибровку для обеспечения максимальной производительности и продления срока службы вашего оборудования. Мы предлагаем гибкие планы обслуживания, адаптированные к вашим конкретным потребностям с учетом таких факторов, как возраст системы, частота использования и рекомендации производителя.', 'К сожалению, даже в самых хорошо обслуживаемых системах время от времени случаются сбои. Когда вы столкнулись с чрезвычайной ситуацией в системе отопления, вентиляции и кондиционирования воздуха, наша специализированная ремонтная группа находится на расстоянии одного телефонного звонка. Благодаря быстрому реагированию и хорошо укомплектованному сервисному автомобилю мы стремимся устранить любые неудобства, вызванные неожиданными сбоями системы. Наши специалисты обучены оперативно диагностировать и решать проблемы, используя оригинальные детали Airfel, чтобы обеспечить ремонт высочайшего качества.', 'Удовлетворение потребностей клиентов лежит в основе всего, что мы делаем. С момента вашего обращения к нам до завершения оказания наших услуг мы стремимся превзойти ваши ожидания. Наша дружная и профессиональная команда всегда готова ответить на ваши вопросы, дать рекомендации и предложить постоянную поддержку. Мы верим в построение долгосрочных отношений с нашими клиентами, зарабатывая их доверие благодаря превосходному обслуживанию и надежным решениям.'
]

const Unit = () => {
  return (
    <div className='container'>
      <Showcase title='Service Center Unit' about='Постгарантийное обслуживание' />
      <section id='about'>
        <h1 className='text-darkColor text-[32px] text-center md:text-[48px] font-russo font-normal leading-[44px] md:leading-[96px] -tracking-[1.6px] '>Наши услуги</h1>
        <div className='grid md:grid-cols-2 mx-auto text-center justify-center gap-6 md:gap-8 mt-12 md:mt-14'>
          {DATA?.map(({ id, text, icon }) => <ContourService key={id} text={text} icon={icon} />)}
        </div>
      </section>
      <section>
        <Company text='О компании' data={TEXT_LIST} />
      </section>
      <MainCallButton/>
    </div>
  )
}

export default Unit