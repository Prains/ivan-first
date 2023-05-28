import ViewBookingMobile from "@/components/Profile/ViewBooking/ViewBookingMobile/ViewBookingMobile";
import ViewBookingDesktop from "@/components/Profile/ViewBooking/ViewBookingDesktop/ViewBookingDesktop";

const ViewBooking = () => {
    const landlord = false
    return (
        <section>
            <ViewBookingMobile />
            <ViewBookingDesktop />

        </section>
    );
};

export default ViewBooking;