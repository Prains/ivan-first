import React from 'react';
import ActiveItem from "@/components/Profile/ActiveItem/ActiveItem";

const ArchiveBookingContainer = () => {
    return (
        <div className='flex flex-col justify-start'>
            <h3 className='mt-[20px] font-medium text-[24px]'>Artplay</h3>
            <ActiveItem />
            <ActiveItem />
            <ActiveItem />

        </div>
    );
};

export default ArchiveBookingContainer;