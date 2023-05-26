import React from 'react';
import Image from "next/image";
import {userRed} from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import IsolatedModal from "@/components/ui/IsolatedModal/IsolatedModal";

const ArchiveBookingContainerItem = ({landlord,  title, image, date}) => {

    if(landlord) {
        image = userRed
    }


    return (
        <div>
            <div
                className='w-[100%] bg-[#17283F] rounded-[12px] mt-[16px] flex items-center justify-between px-[16px] py-[12px]'>
                <div className='flex items-center gap-[12px]'>
                    <div>
                        <Image className='object-cover h-[75px] w-[75px]' src={image} alt='фото'/>
                    </div>
                    <div>
                        {
                            landlord ?  <p className='text-[20px] text-white font-medium'>{title}</p> :  <p className='text-[20px] text-white font-medium'>{title}</p>
                        }
                        <p className='text-[20p] text-white font-medium'>21 февраль <span className='text-[#E74362]'>18.00 - 22.00</span>
                        </p>
                    </div>
                </div>
                <div>
                    {
                        landlord ? <>
                                <div>
                                    <div>
                                        <IsolatedButton
                                            className='w-[100%] lg:w-[240px] text-[#E74362] bg-transparent border-[#E74362] border-2 mt-[8px] rounded-[6px]'>Детали</IsolatedButton>
                                    </div>
                                </div>
                            </> :
                            <>
                            <div className='flex flex-col '>
                                <IsolatedModal title={title} image={image} date={date}/>
                                <IsolatedButton
                                    className='md:w-[120px] lg:w-[240px] text-[#D9D9D9] bg-transparent border-[#D9D9D9] border-2 mt-[8px] rounded-[6px]'>Детали</IsolatedButton>

                            </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ArchiveBookingContainerItem;