import Image from "next/image";
import Link from "next/link";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";

const ArchiveBookingMobileItem = ({title, image, date, isPending, isActive}) => {
    return (
        <Link href='/'>
            <div className='md:w-full grid grid-cols-5 mt-[12px]'>
                <div className='col-span-1'>
                    <Image className='h-[32px] w-[32px] object-cover rounded-[2px]' src={image} alt='картинка'/>
                </div>
                <div className='col-span-3'>
                    <p className='overflow-hidden text-ellipsis text-black text-[14px] max-h-[36px] font-medium'>{title}</p>
                    {
                        isPending ?  <p className='text-[#E74362] text-[14px] font-medium'><span>{date}</span></p> :
                            <p className='text-[#0E1726] text-opacity-75 text-[14px] font-medium'><span>{date}</span></p>
                    }
                </div>
                <div className='col-span-1'>
                    {
                        isActive ? <IsolatedButton
                                className='w-[59px] h-[24px] text-[14px] text-white bg-[#E74362] bg-opacity-75 px-[6px] py-[2px]'>детали</IsolatedButton>
                            : <IsolatedButton
                                className='w-[59px] h-[24px] text-[14px] text-white bg-[#0E1726] bg-opacity-75 px-[6px] py-[2px]'>детали</IsolatedButton>
                    }
                </div>
            </div>
            <div className='w-[100%]'>
                <IsolatedButton className='w-[100%] h-[24px] text-white bg-[#E74362] text-[14px]'>Оставить отзыв</IsolatedButton>
            </div>
        </Link>

    );
};

export default ArchiveBookingMobileItem;