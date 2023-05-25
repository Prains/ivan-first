import Image from "next/image";
import Link from "next/link";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import {CloseButton} from "@/images/icons/CloseButton";
import {AcceptButton} from "@/images/icons/AcceptButton";

const ActualBookingItem = ({name, image, date}) => {
    return (
        <Link href='/'>
            <div className='w-full grid grid-cols-5 mt-[8px]'>
                <div className='col-span-1'>
                    <Image className='h-[40px] object-contain rounded-[2px]' src={image} alt='картинка'/>
                </div>
                <div className='col-span-3'>
                    <p className='text-ellipsis text-black text-[14px] max-h-[36px] font-medium'>{name}</p>
                    <p className='text-[#E74362] text-[14px] font-medium'><span>{date}</span></p>
                </div>
                <div className='col-span-1 flex gap-[3px] items-center'>
                    <Image className='h-[24px] w-[28px]' src={AcceptButton} alt='кнопка соглашения' />
                    <Image className='h-[24px] w-[28px]' src={CloseButton} alt='кнопка отмены' />
                </div>
            </div>
        </Link>

    );
};

export default ActualBookingItem;