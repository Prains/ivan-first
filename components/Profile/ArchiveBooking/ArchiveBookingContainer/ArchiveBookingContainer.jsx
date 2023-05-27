import React from 'react';
import ArchiveBookingContainerItem
    from "@/components/Profile/ArchiveBooking/ArchiveBookingContainer/ArchiveBookingContainerItem/ArchiveBookingContainerItem";

const ArchiveBookingContainer = ({userRole, books}) => {
    return (
        <div className='flex flex-col justify-start'>
            {userRole === "landlord" ?
            123
        
            :
            (
                books.map((book) => {
                    return (
                        book.book.status === "resolved" && <ArchiveBookingContainerItem key={book.id} {...book} userRole={userRole} />
                    )
                })
            )}

        </div>
    );
};

export default ArchiveBookingContainer;