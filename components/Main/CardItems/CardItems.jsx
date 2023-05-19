"use client"
import CardBlock from "@/components/Main/CardBlock/CardBlock";
import {imageCard} from "@/images/Main";

const CardItems = () => {
    const data = [
        {
            id: 1,
            imageUrl: imageCard,
            imageAlt: 'Rear view of modern home with pool',
            title: 'Artplay123',
            subtitle: 'Творческий и деловой квартал',
            rating: 4,
            address: 'ул. Нижняя Сыромятническая, д. 10',
            startDay: 'Пн',
            endDay: 'Вс',
            startTime: '10:00',
            endTime: '21:00'
        },
        {
            id: 2,
            imageUrl: imageCard,
            imageAlt: 'Rear view of modern home with pool',
            title: 'Artplay',
            subtitle: 'Творческий и деловой квартал',
            rating: 4,
            address: 'ул. Нижняя Сыромятническая, д. 10',
            startDay: 'Пн',
            endDay: 'Вс',
            startTime: '10:00',
            endTime: '21:00'
        },
        {
            id: 3,
            imageUrl: imageCard,
            imageAlt: 'Rear view of modern home with pool',
            title: 'Artplay',
            subtitle: 'Творческий и деловой квартал',
            rating: 4,
            address: 'ул. Нижняя Сыромятническая, д. 10',
            startDay: 'Пн',
            endDay: 'Вс',
            startTime: '10:00',
            endTime: '21:00'
        }
    ]
    return (
        <section className='max-w-[290px] my-0 mx-auto'>
            {
                data.map((item) => (
                    <CardBlock key={item.id} property={item}/>
                ))
            }
        </section>
    );
};

export default CardItems;