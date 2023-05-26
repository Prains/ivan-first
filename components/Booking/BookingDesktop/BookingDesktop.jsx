import {cardImage} from "@/images/Main";
import Image from "next/image";
import {LeftArrowIcon} from "@/images/icons/LeftArrow";
import {RightArrowIcon} from "@/images/icons/RightArrow";
import BookingCalendar from "@/components/Booking/BookingCalendar/BookingCalendar";



const BookingDesktop = () => {
    const data = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
    return (
        <div className='hidden lg:block gap-2 w-[880px] h-[642px] bg-[#0C1622] p-[36px] rounded-[12px] mx-auto'>
            <div className='flex gap-[12px]'>
                <Image className='w-[208px] h-[104px]' src={cardImage} alt='картинка со зданием'/>
                <h3 className='text-[24px]'>Товарищество Рябовской мануфактуры</h3>
            </div>
            <BookingCalendar data={data}/>
        </div>
    );
};

export default BookingDesktop;