// 'use client'
import React from 'react'
import Showcase from '../../CElements/CShowcase/Showcase';
import { icon_clean, icon_filter, icon_faulty, icon_ventilation, icon_elector, icon_setting, } from '../../public/Assets/Images';
import ContourService from '../../CElements/ContourService/ContourService';
import Company from '../../CElements/Company/Company';
import MainCallButton from '@/components/MainCallButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Экспертный ремонт котлов Kiturami в Ташкенте | Сервисный Центр',
    description: 'Ищете квалифицированный ремонт газовых котлов Kiturami в Ташкенте? Наш Сервисный Центр специализируется на обслуживании котлов и гарантирует высокое качество работы'
}

const DATA = [
    { id: 1, text: 'Чистка горелки котла', icon: icon_clean },
    { id: 3, text: 'Замена теплообменника', icon: icon_filter },
    { id: 3, text: 'Профилактика котлов', icon: icon_setting },
    { id: 4, text: 'Замена вентилятора', icon: icon_ventilation },
    { id: 5, text: 'Замена циркуляционного насоса', icon: icon_faulty },
    { id: 6, text: 'Ремонт электро котла', icon: icon_elector },
];

const TEXT_LIST = ['Сервисный центр котлов Kiturami - это профессиональная организация, специализирующаяся на обслуживании и ремонте отопительных котлов ведущего производителя Kiturami. Наш центр обладает богатым опытом и высококвалифицированными специалистами, которые готовы предоставить качественную техническую поддержку для вашего котла.',
    'Мы позаботимся о всех ваших потребностях, связанных с обслуживанием и ремонтом, и гарантируем быстрое и эффективное решение любых проблем. Все наши специалисты проходят обязательное обучение и регулярно обновляют свои знания, чтобы быть в курсе последних технических инноваций и современных методов ремонта.', 'Мы стремимся предоставить нашим клиентам полное удовлетворение и комфорт, поэтому в нашем сервисном центре осуществляется не только качественный ремонт и обслуживание, но и предоставляются консультации по оптимальному использованию и эксплуатации котлов Kiturami', 'Мы гордимся нашим отличным сервисом и постоянно превосходим ожидания наших клиентов. Наша цель - обеспечить надежность, эффективность и долговечность работы вашего котла Kiturami.', 'Обратившись в наш сервисный центр, вы можете быть уверены, что ваш котел находится в надежных руках опытных профессионалов. Мы стремимся к тому, чтобы обеспечить безопасность и комфорт вашего дома, делая все возможное для того, чтобы ваша система отопления работала безупречно и наилучшим образом служила вам.', 'Выбирая сервисный центр котлов Kiturami, вы выбираете надежного партнера по обслуживанию вашего отопительного оборудования. Свяжитесь с нами сегодня, и мы поможем вам с любыми вопросами, связанными с вашим котлом Kiturami.']

const TEXT_LIST_TWO = [
    'Наш сервисный центр предлагает профессиональные услуги по ремонту котлов Kiturami в Ташкенте. Мы специализируемся на обслуживании и восстановлении работы оборудования данного бренда, предоставляя высокое качество услуг и надежность результата. Услуги, которые мы предоставляем, включают в себя',
    'Диагностика неисправностей: Наши опытные мастера проводят тщательную проверку вашего котла Kiturami, чтобы выявить любые неисправности и определить причину возникших проблем',
    'Ремонт и замена деталей: Мы осуществляем качественный ремонт и замену комплектующих вашего котла Kiturami, используя только оригинальные запчасти и материалы, чтобы обеспечить его надежную работу.',
    'Техническое обслуживание: Мы также предлагаем услуги по плановому техническому обслуживанию котлов Kiturami, чтобы поддерживать их в отличном состоянии и предотвращать возможные поломки.',
    'Консультации по эксплуатации: Наши эксперты готовы поделиться своим опытом и советами по правильной эксплуатации вашего котла Kiturami, чтобы обеспечить его эффективную и безопасную работу.',
    'Мы стремимся к предоставлению наилучших услуг на рынке ремонта котлов в Ташкенте. Обратившись к нам, вы можете быть уверены, что ваш котел Kiturami находится в заботливых руках профессионалов. Доверьте нам свое оборудование, и мы обеспечим его надежность и долговечность!'
]

const TEXT_LIST_THREE = [
    ' Почему выбор нашего сервисного центра - это оптимальное решение для ремонта котлов Kiturami в Ташкенте? Мы гордимся предоставлением высококачественных услуг и стремимся удовлетворить потребности каждого клиента. Вот несколько преимуществ, которые вы получаете, обратившись к нам:',
    'Опытные специалисты: Наша команда состоит из опытных и профессионально обученных мастеров, которые обладают глубокими знаниями о котлах Kiturami. Мы имеем богатый опыт работы с данной маркой оборудования и знаем, как эффективно решать любые проблемы.',
    'Использование оригинальных запчастей: Мы ценим качество и надежность ремонта, поэтому используем только оригинальные запчасти Kiturami. Это гарантирует долговечность и безопасность вашего котла после ремонта',
    'Быстрое реагирование и оперативность: Мы понимаем, что проблемы с котлом могут привести к неудобствам, поэтому готовы оперативно реагировать на ваши запросы и проводить ремонт в кратчайшие сроки',
    ' Гарантия качества: Мы уверены в качестве нашей работы и предоставляем гарантию на выполненные ремонтные работы. Это демонстрирует наше доверие к своим специалистам и обеспечивает вас защитой в случае возникновения проблем',
    ' Личное отношение к каждому клиенту: Мы ценим каждого клиента и готовы предоставить вам индивидуальный подход и качественное обслуживание. Наша дружелюбная команда всегда готова ответить на ваши вопросы и помочь вам с вашим котлом Kiturami.',
    'Обратившись к нам, вы можете быть уверены в надежности и качестве ремонта вашего котла Kiturami. Доверьте свое оборудование профессионалам и наслаждайтесь его бесперебойной работой!'
]

const TEXT_LIST_FOUR = [
    ' Мы понимаем, что неполадки с котлом могут вызывать беспокойство и неудобства в вашей жизни. Поэтому мы предлагаем простой и эффективный процесс ремонта котлов Kiturami, который направлен на восстановление работы вашего оборудования и ваше спокойствие.',
    ' Прием заявки: Ваше обращение к нам является первым шагом к решению проблемы с котлом Kiturami. Вы можете связаться с нами по телефону или оставить заявку на нашем сайте. Мы оперативно реагируем на все запросы и назначаем встречу с нашими специалистами.',
    ' Диагностика проблемы: Наши опытные мастера проводят тщательную диагностику вашего котла Kiturami, чтобы точно определить причину возникших неполадок. Мы используем современное оборудование и методы, чтобы выявить любые проблемы и разработать план ремонта.',
    ' Обсуждение вариантов ремонта: После диагностики мы обсудим с вами возможные варианты ремонта и предложим оптимальное решение. Мы всегда стараемся найти наилучший баланс между качеством ремонта и вашими потребностями.',
    ' Выполнение работ: После вашего согласия на ремонт, наши мастера приступают к выполнению необходимых работ. Мы работаем быстро и качественно, чтобы как можно скорее вернуть ваш котел Kiturami в рабочее состояние',
    'Проверка работоспособности: По завершении ремонта мы проведем тестирование вашего котла Kiturami, чтобы убедиться, что все функции работают корректно. Мы уделяем особое внимание безопасности и надежности вашего оборудования.',
    ' Обратная связь: Важно для нас знать ваше мнение о качестве нашей работы. Мы всегда открыты для обратной связи и готовы учесть ваши пожелания, чтобы улучшить качество наших услуг.',
    ' Надеемся, что наш процесс ремонта котлов Kiturami принесет вам уверенность в надежности вашего оборудования и спокойствие в вашем доме. Обратитесь к нам прямо сейчас, и мы с удовольствием поможем вам вернуть ваш котел в рабочее состояние!'
]


const Kiturami = () => {
    return (
        <div className='container'>
            <Showcase title='Service Center Kiturami' about='Постгарантийное обслуживание' />
            <section id='about'>
                <h2 className='text-darkColor text-[32px] text-center md:text-[48px] font-russo font-normal leading-[44px] md:leading-[96px] -tracking-[1.6px] '>Наши услуги</h2>
                <div className='grid md:grid-cols-2 mx-auto text-center justify-center gap-6 md:gap-8 mt-12 md:mt-14'>
                    {DATA.map(({ id, text, icon }) => <ContourService key={id} text={text} icon={icon} />)}
                </div>
            </section>
            <section>
                <Company text='О компании' data={TEXT_LIST} />
                <Company text='Наши услуги' data={TEXT_LIST_TWO} />
                <Company text='Преимущества выбора нашего сервисного центра для ремонта котлов Kiturami в Ташкенте' data={TEXT_LIST_THREE} />
                <Company text='Процесс ремонта котлов Kiturami: Шаги к вашему спокойствию' data={TEXT_LIST_FOUR} />
            </section>
            {/* <MainCallButton /> */}
        </div>
    )
}

export default Kiturami