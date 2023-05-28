import React from 'react';
import ArchiveBookingContainerItem
    from "@/components/Profile/ArchiveBooking/ArchiveBookingContainer/ArchiveBookingContainerItem/ArchiveBookingContainerItem";

const ArchiveBookingContainer = ({userRole, books, place}) => {
    return (
        <div className='flex flex-col justify-start'>
            {userRole === "landlord" ?
            (
                place.books.map((book) => {
                    return (
                        book.book.status === "resolved" && <ArchiveBookingContainerItem place={place.title} key={book.id} bookll={book} userRole={userRole} />
                    )
                })
            )
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