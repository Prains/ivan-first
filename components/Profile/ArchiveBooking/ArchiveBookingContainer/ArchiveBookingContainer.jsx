import React from 'react';
import ArchiveBookingContainerItem
    from "@/components/Profile/ArchiveBooking/ArchiveBookingContainer/ArchiveBookingContainerItem/ArchiveBookingContainerItem";

const ArchiveBookingContainer = ({landlord, data}) => {
    return (
        <div className='flex flex-col justify-start'>
            <h3 className='mt-[20px] font-medium text-[24px]'>Artplay</h3>

            {
                data.map((item) =>  <ArchiveBookingContainerItem key={item.id} {...item} landlord={landlord}/>)
            }

        </div>
    );
};

export default ArchiveBookingContainer;