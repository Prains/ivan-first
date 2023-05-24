import React from 'react';
import HeaderAccount from "@/components/HeaderAccount/HeaderAccount";
import IsolatedAccordion from "@/components/ui/IsolatedAccordion/IsolatedAccordion";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import FooterAccount from "@/components/FooterAccount/FooterAccount";
import {cardImage} from "@/images/Main";
import ArchiveBookingItem from "@/components/ArchiveBookingItem/ArchiveBookingItem";

const ArchiveBooking = () => {
    const data = [
        {
            id: 1,
            title: 'ArtplayActive',
            date: '21 мая 18.00 - 22.00',
            image: cardImage,
            type: 'active'
        },
        {
            id: 2,
            title: 'ArtplaySuccessful',
            date: '22 мая 18.00 - 24.00',
            image: cardImage,
            type: 'successful'
        },
        {
            id: 3,
            title: 'ArtplayPending',
            date: '23 мая 18.00 - 20.00',
            image: cardImage,
            type: 'pending'
        },
        {
            id: 4,
            title: 'ArtplayPending',
            date: '23 мая 18.00 - 20.00',
            image: cardImage,
            type: 'pending'
        }
    ]
    return (
        <section className='bg-[#0C1622] h-[100vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px] w-full'>
            <HeaderAccount className='flex items-center justify-between' isVisible='true' text='История брони'/>
                <div className='py-[14px] px-[12px] bg-[#EBF8FF] mt-[18px] rounded-[6px] pb-[60px]'>
                    {
                        data.map(item =>   <ArchiveBookingItem key={item.id} title={item.title} image={item.image} date={item.date}/>)
                    }
                </div>
            <FooterAccount className='w-[95%] absolute bottom-2 h-max flex flex-col justify-between'/>
        </section>
    );
};

export default ArchiveBooking;