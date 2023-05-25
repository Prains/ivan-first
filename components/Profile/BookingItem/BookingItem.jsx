import Image from "next/image";
import Link from "next/link";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import {AcceptButton} from "@/images/icons/AcceptButton";
import {CloseButton} from "@/images/icons/CloseButton";
import {userRed} from "@/images/icons/userRed/userRed";

const BookingItem = ({title, image, date, landlord, titleAccordeon}) => {
    let isAccept;
    let isAgree;
    if (landlord) {
        image = userRed
    }
    if (titleAccordeon == "Заявки на бронь") {
        isAccept = true
    }
    if (titleAccordeon == "Подтвержденная бронь") {
        isAgree = true
    }


    return (
        <Link href='/'>
            <div className='w-full grid grid-cols-7 mt-[8px]'>
                <div className='col-span-1 mr-[12px]'>
                    {
                        landlord ?
                            <Image className='h-[40px] object-contain rounded-[2px]' src={image} alt='картинка'/> :
                            <Image className='h-[32px] object-cover rounded-[2px]' src={image} alt='картинка'/>
                    }
                </div>
                <div className='col-span-5'>
                    <p className='overflow-hidden text-ellipsis text-black text-[14px] max-h-[36px] font-medium'>{title}</p>
                    {isAgree ? <p className='text-[#E74362] text-[14px] font-medium'><span>{date}</span></p> :
                        <p className='text-[#0E1726] text-opacity-75 text-[14px] font-medium'><span>{date}</span></p>}


                </div>
                <div className='col-span-1 flex justify-end'>
                    {
                        isAccept ? <>
                                <div className='col-span-1 flex gap-[3px] items-center'>
                                    <Image className='h-[24px] w-[28px]' src={AcceptButton} alt='кнопка соглашения'/>
                                    <Image className='h-[24px] w-[28px]' src={CloseButton} alt='кнопка отмены'/>
                                </div>
                            </> :
                            <>
                                {
                                    isAgree ? <IsolatedButton
                                            className='w-[59px] h-[24px] text-[14px] text-white bg-[#E74362] bg-opacity-75 px-[6px] py-[2px]'>детали</IsolatedButton> :
                                        <IsolatedButton
                                            className='w-[59px] h-[24px] text-[14px] text-white bg-[#0E1726] bg-opacity-75 px-[6px] py-[2px]'>детали</IsolatedButton>
                                }

                            </>
                    }


                </div>
            </div>
        </Link>

    );
};

export default BookingItem;