import Image from "next/image";
import {cardImage} from "@/images/Main";
import StarRating from "@/components/ui/StarRating/StarRating";
import IsolatedTextArea from "@/components/ui/IsolatedTextArea/IsolatedTextArea";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";

const BookingReviews = () => {
    return (
        <section className='bg-[#0C1622] h-[100vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px] w-full'>
            <div className='bg-[#EBF8FF] pt-[14px] px-[11px] pb-[24px] rounded-[6px] mt-[18px]'>
                <div className='w-full grid grid-cols-5 '>
                    <div className='col-span-1'>
                        <Image className='w-max h-[40px] object-cover rounded-[2px] pr-[10px]' src={cardImage} alt='картинка'/>
                    </div>
                    <div className='col-span-3'>
                        <p className='overflow-hidden text-ellipsis text-black text-[14px] max-h-[36px] font-medium'>Artplay</p>
                           <p className='text-[#0E1726] text-opacity-75 text-[14px] font-medium'><span>18:00 мая </span></p>

                    </div>
                    <div className='col-span-1'></div>
                </div>
                <div className='mt-[16px] mb-[18px]'>
                    <StarRating />
                </div>
                <div>
                    <IsolatedTextArea placeholder='Huielooee' className='mt-[18px] bg-white border-0 text-black mb-[24px]'/>
                </div>
                <div className='flex items-center justify-between gap-[8px] w-[100%]'>
                    <IsolatedButton className='bg-[#E74362] flex-1'>Готово</IsolatedButton>
                    <IsolatedButton className='bg-transparent flex-1 border-[#8E8E8E] border-2 text-[#8E8E8E]'>Отмена</IsolatedButton>
                </div>
            </div>
        </section>
    );
};

export default BookingReviews;