'use client'
import React from 'react';
import { extra_icon_img, icon_elector, icon_remont, icon_setting, icon_boiler, icon_boiler_repair, icon_dilever, icon_two_boiler, icon_wall_repair, repair_icon_img, icon_clean, } from '../../public/Assets/Images';
import Showcase from '../../CElements/CShowcase/Showcase'
import ContourService from '../../CElements/ContourService/ContourService';
import Company from '../../CElements/Company/Company';
import MainCallButton from '@/components/MainCallButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Профессиональный ремонт газовых котлов в Ташкенте | Сервисный Центр Ferroli',
    description: 'Нужен надежный ремонт газовых котлов в Ташкенте? Обращайтесь в Сервисный Центр Ferroli! Наши специалисты обеспечат быстрое и качественное обслуживание вашего оборудования.'
}

const DATA = [
    { id: 1, text: 'Ремонт котлов', icon: icon_boiler },
    { id: 2, text: 'Обслуживание котлов', icon: icon_boiler },
    { id: 3, text: 'Профилактика котлов', icon: icon_setting },
    { id: 4, text: 'Чистка котла', icon: icon_clean },
    { id: 5, text: 'Ремонт напольных котлов', icon: icon_remont },
    { id: 6, text: 'Ремонт настенных котлов', icon: icon_wall_repair },
];
const TEXT_DATA = [
    'Наш сервисный центр по ремонту котлов Ferroli готов предложить вам высококачественное обслуживание и решение любых проблем, связанных с вашим отопительным оборудованием. Благодаря нашему богатому опыту и профессиональной команде специалистов, мы готовы взять на себя ответственность за техническое обслуживание, ремонт и диагностику котлов Ferroli.',
    'Мы осознаем важность надежности и эффективности вашего отопительного оборудования, поэтому предлагаем только высокотехнологичные и проверенные временем решения для устранения возникших проблем. Наша команда специалистов обладает широкими знаниями и опытом работы с котлами Ferroli, что позволяет нам оперативно и качественно выполнять любые технические работы.', 'Мы предлагаем не только ремонт и обслуживание котлов Ferroli, но и оказываем консультации по выбору оптимальной модели котла под ваши нужды. Независимо от типа или сложности проблемы, наша команда специалистов предоставит вам профессиональное обслуживание, чтобы обеспечить бесперебойную работу вашего оборудования.', 'Доверьте нам ремонт и обслуживание котлов Ferroli, и вы сможете быть уверены, что ваше отопление будет функционировать на высшем уровне. Наш сервисный центр гарантирует качество выполняемых работ, применение оригинальных деталей и комплектующих, а также выгодные цены на все виды услуг.', 'Мы всегда готовы помочь вам с ремонтом котлов Ferroli и обеспечить их надежную и эффективную работу. Не откладывайте важные технические работы на потом – обратитесь к нам, и мы сделаем все возможное, чтобы ваш котел Ferroli работал безупречно и обеспечивал комфортное отопление в вашем доме или офисе.'
]

const TEXT_DATA_TWO = [
    'Наш сервисный центр предоставляет высококачественные услуги по ремонту котлов Ferroli в Ташкенте. Мы специализируемся на обслуживании и ремонте оборудования данного бренда, обеспечивая нашим клиентам надежность и эффективность работы их котлов. Наши услуги включают в себя',
    'Диагностика неисправностей: Наши опытные специалисты проведут тщательную диагностику вашего котла Ferroli, чтобы точно определить причину возникшей проблемы.',
    'Ремонт и замена деталей: Мы осуществляем качественный ремонт и замену деталей вашего котла Ferroli, используя только оригинальные запчасти, чтобы обеспечить его надежную работу',
    'Техническое обслуживание: Мы также предлагаем услуги по плановому техническому обслуживанию котлов Ferroli, чтобы предотвратить возможные поломки и обеспечить их бесперебойную работу',
    'Консультации по эксплуатации: Наши эксперты готовы поделиться своими знаниями и дать вам ценные советы по правильной эксплуатации вашего котла Ferroli, чтобы продлить его срок службы и улучшить его эффективность.',
    'Мы стремимся к высокому уровню профессионализма и качества в каждом из предоставленных нами сервисов. Обратившись к нам, вы можете быть уверены, что ваш котел Ferroli находится в надежных руках. Не стесняйтесь связаться с нами для решения любых проблем с вашим оборудованием Ferroli!'
]

const TEXT_DATA_THREE = [
    'Почему выбор нашего сервисного центра - это оптимальное решение для ремонта котлов Ferroli в Ташкенте? Мы готовы предложить вам несколько веских причин:',
    'Опытные специалисты: Наша команда состоит из высококвалифицированных и опытных мастеров, которые имеют глубокие знания о котлах Ferroli. Мы постоянно совершенствуем свои навыки и следим за последними технологическими новинками, чтобы обеспечить нашим клиентам самый качественный и профессиональный сервис',
    'Использование оригинальных запчастей: Мы понимаем важность надежности и долговечности вашего оборудования, поэтому при ремонте котлов Ferroli мы используем только оригинальные детали и комплектующие. Это гарантирует долгосрочную эффективность и безопасность работы вашего котла.',
    'Быстрое реагирование: Мы ценим ваше время, поэтому готовы оперативно реагировать на ваши запросы и назначать встречи с нашими мастерами в удобное для вас время. Мы стараемся минимизировать время простоя вашего котла, обеспечивая быстрый и эффективный ремонт.',
    'Гарантия качества: Мы уверены в качестве нашей работы и предоставляем гарантию на выполненные ремонтные работы. Это демонстрирует наше доверие к своим специалистам и обеспечивает вас защитой в случае непредвиденных ситуаций.',
    'Личное отношение к каждому клиенту: Мы ценим каждого клиента и стремимся обеспечить ему максимальный комфорт и удовлетворение. Наша дружелюбная и заботливая команда всегда готова ответить на ваши вопросы и помочь вам с любыми проблемами касательно вашего котла Ferroli.',
    'Обратившись к нам, вы получаете не просто ремонт котла, а полноценное решение всех ваших проблем с оборудованием Ferroli. Доверьте свой котел нашим профессионалам, и вы получите надежность, качество и профессионализм на высшем уровне!'
]

const TEXT_DATA_FOUR = [
    'Мы понимаем, что проблемы с котлом могут стать источником беспокойства и дискомфорта. Поэтому мы разработали простой и эффективный процесс ремонта котлов Ferroli, который направлен на восстановление работы вашего оборудования и ваше спокойствие.',
    'Прием заявки: Ваше обращение к нам начинает процесс ремонта. Вы можете связаться с нами по телефону или заполнить форму на нашем сайте. Мы оперативно реагируем на все запросы и назначаем встречу с нашими специалистами.',
    'Диагностика проблемы: Наши опытные мастера проводят тщательную диагностику вашего котла Ferroli, чтобы точно определить причину неисправности. Мы используем современное оборудование и методы, чтобы выявить любые проблемы.',
    'Обсуждение вариантов ремонта: После диагностики мы обсудим с вами возможные варианты ремонта и предложим оптимальное решение. Мы всегда стараемся найти наилучший баланс между качеством ремонта и вашими потребностями.',
    'Выполнение работ: После вашего согласия на ремонт, наши мастера приступают к выполнению необходимых работ. Мы работаем быстро и качественно, чтобы как можно скорее вернуть ваш котел Ferroli в рабочее состояние.',
    'Проверка работоспособности: По завершении ремонта мы проведем тестирование вашего котла Ferroli, чтобы убедиться, что все функции работают корректно. Мы уделяем особое внимание тому, чтобы обеспечить безопасность и надежность вашего оборудования.',
    'Обратная связь: Важно для нас знать ваше мнение о качестве нашей работы. Мы всегда открыты для обратной связи и готовы учесть ваши пожелания, чтобы улучшить качество наших услуг.',
    'Надеемся, что наш процесс ремонта котлов Ferroli принесет вам уверенность в надежности вашего оборудования и спокойствие в вашем доме. Обратитесь к нам прямо сейчас, и мы с удовольствием поможем вам вернуть ваш котел в рабочее состояние!'
]

const Ferroli = () => {
    return (
        <div className='container'>
            <Showcase title='Service Center Ferroli' about='Постгарантийное обслуживание' />
            <section className='about'>
                <h2 className='text-darkColor text-[32px] text-center md:text-[48px] font-russo font-normal leading-[44px] md:leading-[96px] -tracking-[1.6px] '>Наши услуги</h2>
                <div className='grid md:grid-cols-2 mx-auto text-center justify-center gap-6 md:gap-8 mt-12 md:mt-14'>
                    {DATA?.map(({ id, text, icon }) => <ContourService key={id} text={text} icon={icon} />)}
                </div>
            </section>
            <section>
                <Company text='О компании' data={TEXT_DATA}/>
                <Company text='Профессиональный ремонт котлов Ferroli в Ташкенте: Наши услуги' data={TEXT_DATA_TWO}/>
                <Company text='Преимущества выбора нашего сервисного центра для ремонта котлов Ferroli в Ташкенте' data={TEXT_DATA_THREE}/>
                <Company text='Процесс ремонта котлов Ferroli: Шаги к вашему спокойствию' data={TEXT_DATA_FOUR}/>
            </section>
            <MainCallButton/>
        </div>
    )
}

export default Ferroli