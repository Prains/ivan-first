import React from 'react';
import HeaderAccount from "@/components/HeaderAccount/HeaderAccount";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import FooterAccount from "@/components/FooterAccount/FooterAccount";
import Image from "next/image";
import {cardImage} from "@/images/Main";

const Reviews = () => {
    return (
        <section className='bg-[#0C1622] h-[100vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px] w-full'>
            <HeaderAccount isVisible='true' text='Оставить отзыв'/>
            <div className='bg-[#EBF8FF] pt-[14px] px-[11px] pb-[24px] rounded-[6px] mt-[18px]'>
                <div className='w-full grid grid-cols-5 '>
                    <div className='col-span-1'>
                        <Image className='h-[32px] w-[32px] object-cover rounded-[2px]' src={cardImage} alt='картинка'/>
                    </div>
                    <div className='col-span-3'>
                        <p className='overflow-hidden text-ellipsis text-black text-[14px] max-h-[36px] font-medium'>Artplay</p>
                           <p className='text-[#E74362] text-[14px] font-medium'><span>18:00 мая </span></p>

                    </div>
                    <div className='col-span-1'>
                    </div>
                </div>

            </div>
            <FooterAccount className='w-[95%] absolute bottom-2 h-max flex flex-col justify-between'/>
        </section>
    );
};

export default Reviews;