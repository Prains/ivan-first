import React, {useMemo} from 'react';
import FooterAccount from "@/components/FooterAccount/FooterAccount";
import HeaderAccount from "@/components/HeaderAccount/HeaderAccount";
import IsolatedAccordion from "@/components/ui/IsolatedAccordion/IsolatedAccordion";
import {cardImage} from "@/images/Main";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";

const ViewBooking = () => {
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
    const activeArr = useMemo(
        () => { return data.filter((active) => active.type === "active"); }, [data]);
    const successArr = useMemo(
        () => { return data.filter((successful) => successful.type === "successful"); }, [data]);
    const pendingArr = useMemo(
        () => { return data.filter((pending) => pending.type === "pending"); }, [data]);

    return (
        <section className='bg-[#0C1622] h-[100vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px] w-full'>
            <HeaderAccount isVisible='true' text='Просмотр брони'/>
            <div className='bg-[#EBF8FF] mt-[18px]'>
                <IsolatedAccordion isActive={false} isPending={false} data={activeArr} titleAccordeon={'Заявки на бронь'}/>
                <IsolatedAccordion isActive={true} isPending={true} data={successArr} titleAccordeon={'Подтвержденная бронь'}/>
                <IsolatedAccordion isActive={false} isPending={true} data={pendingArr} titleAccordeon={'Отклонённая бронь'}/>
            </div>
            <div>
                <IsolatedButton className='w-full mt-[20px] text-[#E74362] text-[14px] bg-transparent border-[#E74362] border-2 rounded-[6px]'>История брони</IsolatedButton>
            </div>
            <FooterAccount className='w-[95%] absolute bottom-2 h-max flex flex-col justify-between'/>
        </section>
    );
};

export default ViewBooking;