import {cardImage} from "@/images/Main";
import ArchiveBookingMobileItem from "@/components/Profile/ArchiveBooking/ArchiveBookingMobileItem/ArchiveBookingMobileItem";
import IsolatedAccordeonLandLord from "@/components/ui/IsolatedAccordeonLandLord/IsolatedAccordeonLandLord";
import React from "react";

const ArchiveBookingMobile = () => {
    const landlord = true
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
        <section className='block lg:hidden bg-[#0C1622] h-[100vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px] w-full'>
            {
                landlord ?
                    <>
                        <IsolatedAccordeonLandLord isAccept={true} isActive={false} isPending={false} data={data}
                                                   titleAccordeon={'Artplay'}/>
                        <IsolatedAccordeonLandLord isAccept={false} isActive={true} isPending={true} data={data}
                                                   titleAccordeon={'Artplay(2)'}/>
                    </> :
                    <>
                        <div className='py-[14px] px-[12px] bg-[#EBF8FF] mt-[18px] rounded-[6px] pb-[60px]'>
                            {
                                data.map(item =>   <ArchiveBookingMobileItem key={item.id} title={item.title} image={item.image} date={item.date}/>)
                            }
                        </div>
                    </>
            }
        </section>
    );
};

export default ArchiveBookingMobile;