import Image from "next/image";
import {userRed} from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";

const BookingItemDesktop = ({isActive}) => {
    const landlord = true
    return (
        <div>
            <div
                className='w-[100%] bg-[#17283F] rounded-[12px] mt-[16px] flex items-center justify-between px-[16px] py-[12px]'>
                <div className='flex items-center gap-[12px]'>
                    <div>
                        <Image src={userRed} alt='фото'/>
                    </div>
                    <div>
                        <p className='text-[20px] text-white font-medium'>Мария Булагвоковофы</p>
                        {
                            landlord ? <p className='text-[20px] text-white font-medium'>Мария Булагвоковофы</p> : ''
                        }
                        <p className='text-[20p] text-white font-medium'>21 февраль <span className='text-[#E74362]'>18.00 - 22.00</span>
                        </p>
                    </div>
                </div>
                <div>
                    {
                        landlord ? <>
                                <div>
                                    {
                                        isActive  ? <> <div className='flex gap-2'>
                                            <IsolatedButton
                                                className='w-[100%] lg:w-[100%] text-white bg-transparent border-white border-2 mt-[8px] rounded-[6px]'>Принять</IsolatedButton>
                                            <IsolatedButton
                                                className='w-[100%] lg:w-[100%] text-[#E74362] bg-transparent border-[#E74362] border-2 mt-[8px] rounded-[6px]'>Отклонить</IsolatedButton>
                                        </div>
                                            <div>
                                                <IsolatedButton
                                                    className='w-[100%] lg:w-[100%] text-[#E74362] bg-transparent border-[#E74362] border-2 mt-[8px] rounded-[6px]'>Детали</IsolatedButton>

                                            </div></> : <><IsolatedButton
                                        className='w-[100%] lg:w-[100%] text-[#E74362] bg-transparent border-[#E74362] border-2 mt-[8px] rounded-[6px]'>Детали</IsolatedButton>
                                        </>
                                    }


                                </div>
                            </> :
                            <>
                                <IsolatedButton
                                    className='md:w-[120px] lg:w-[240px] text-[#D9D9D9] bg-transparent border-[#D9D9D9] border-2 mt-[8px] rounded-[6px]'>Детали</IsolatedButton>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingItemDesktop;