import React from 'react';
import ArchiveBookingDesktop from "@/components/Profile/ArchiveBooking/ArchiveBookingDesktop/ArchiveBookingDesktop";
import ArchiveBookingMobile from "@/components/Profile/ArchiveBooking/ArchiveBookingMobile/ArchiveBookingMobile";
const ArchiveBooking = () => {
    const landlord = true

    // архив брони
    return (
        <div>
            <ArchiveBookingDesktop />
            <ArchiveBookingMobile />
        </div>
    );
};

export default ArchiveBooking;