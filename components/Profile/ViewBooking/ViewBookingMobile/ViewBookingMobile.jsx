import  {useMemo} from 'react';
import IsolatedAccordion from "@/components/ui/IsolatedAccordion/IsolatedAccordion";
import {cardImage} from "@/images/Main";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import IsolatedAccordionLandLord from "@/components/ui/IsolatedAccordeonLandLord/IsolatedAccordeonLandLord";

const ViewBookingMobile = () => {
    const landlord = true
    const data = [
        {
            id: 1,
            title: 'ArtplayActive',
            date: '21 мая 18.00 - 22.00',
            image: cardImage,
            type: 'active',
            landlord: true
        },
        {
            id: 2,
            title: 'ArtplaySuccessful',
            date: '22 мая 18.00 - 24.00',
            image: cardImage,
            type: 'successful',
            landlord: false
        },
        {
            id: 3,
            title: 'ArtplayPending',
            date: '23 мая 18.00 - 20.00',
            image: cardImage,
            type: 'pending',
            landlord: false
        },
        {
            id: 4,
            title: 'ArtplayPending',
            date: '23 мая 18.00 - 20.00',
            image: cardImage,
            type: 'pending',
            landlord: false
        }
    ]
    const activeArr = useMemo(
        () => {
            return data.filter((active) => active.type === "active");
        }, [data]);
    const successArr = useMemo(
        () => {
            return data.filter((successful) => successful.type === "successful");
        }, [data]);
    const pendingArr = useMemo(
        () => {
            return data.filter((pending) => pending.type === "pending");
        }, [data]);

    return (
        <section
            className='block lg:hidden bg-[#0C1622] h-[100vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px] w-full'>
            {landlord ?
                <>
                    <div className='bg-[#EBF8FF] mt-[18px] rounded-[6px]'>
                        <h3 className='text-black pt-[11px] font-medium text-[20px] px-[16px]'>Artplay</h3>
                            <IsolatedAccordionLandLord data={activeArr}
                                               titleAccordeon={'Заявки на бронь'}/>
                            <IsolatedAccordionLandLord data={successArr}
                                               titleAccordeon={'Подтвержденная бронь'}/>
                            <IsolatedAccordionLandLord  data={pendingArr}
                                               titleAccordeon={'Отклонённая бронь'}/>


                    </div>
                    <div>
                        <IsolatedButton
                            className='w-full mt-[20px] text-[#E74362] text-[14px] bg-transparent border-[#E74362] border-2 rounded-[6px]'>Архив
                            брони</IsolatedButton>
                    </div>
                </>
                :
                <>
                    <div className='bg-[#EBF8FF] mt-[18px]'>
                        <IsolatedAccordion isActive={false} isPending={false} data={activeArr}
                                           titleAccordeon={'Заявки на бронь'}/>
                        <IsolatedAccordion isActive={true} isPending={true} data={successArr}
                                           titleAccordeon={'Подтвержденная бронь'}/>
                        <IsolatedAccordion isActive={false} isPending={true} data={pendingArr}
                                           titleAccordeon={'Отклонённая бронь'}/>
                    </div>
                    <div>
                        <IsolatedButton
                            className='w-full mt-[20px] text-[#E74362] text-[14px] bg-transparent border-[#E74362] border-2 rounded-[6px]'>История
                            брони</IsolatedButton>
                    </div>
                </>
            }
        </section>
    );
};

export default ViewBookingMobile;