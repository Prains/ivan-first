import React from 'react';
import BookingDesktop from "@/components/Booking/BookingDesktop/BookingDesktop";
import BookingMobile from "@/components/Booking/BookingMobile/BookingMobile";

const Booking = () => {
    return (
        <section>
            <BookingDesktop />
            <BookingMobile />
        </section>
    );
};

export default Booking;