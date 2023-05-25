
import {cardImage} from "@/images/Main";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import ActualBookingItem from "@/components/Profile/ActualBooking/ActualBookingItem/ActualBookingItem";
import {userRed} from "@/images/icons/userRed/userRed";
import BookingItem from "@/components/Profile/BookingItem/BookingItem";
const ViewBooking = () => {
    const data = [
        {
            id: 1,
            name: 'Серый Волк',
            date: '21 мая 18.00 - 22.00',
            image: userRed,
        },
        {
            id: 2,
            name: 'Иван Царевич',
            date: '22 мая 18.00 - 24.00',
            image: userRed,
        }, {
            id: 3,
            name: 'Иван Царевич',
            date: '22 мая 18.00 - 24.00',
            image: userRed,
        },
    ]

    return (
        <section className='bg-[#0C1622] h-[100vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px] w-full'>
            <div className='h-[90vh] bg-[#EBF8FF] rounded-[6px] px-[12px] py-[16px]'>
                <div className='mt-[16px]'>
                    {
                        data.map(item => <ActualBookingItem key={item.id} name={item.name} date={item.date} image={item.image}/>)
                    }
                </div>
            </div>
            <div>
                <IsolatedButton className='w-full mt-[20px] text-[#E74362] text-[14px] bg-transparent border-[#E74362] border-2 rounded-[6px]'>Ваши площадки</IsolatedButton>
            </div>
        </section>
    );
};

export default ViewBooking;