import Image from "next/image";
import {userRed} from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";


const landlord = true
const activeBooks = true

const ProfileMobileComponent = ({landlord}) => {
    return (
        <section className='lg:hidden bg-[#0C1622] h-[100vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px]  w-full'>
            <div className='flex justify-center mt-[32px]'>
                <Image className='h-[64px] w-[64px]' src={userRed} alt='красный кружочек с иконкой пользователя внутри'></Image>
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-medium text-[14px] text-white mt-[16px]'>Евгений Евгениевич</p>
                <p className='font-normal text-[14px] text-white mt-[12px] py-[2px] px-[6px] rounded-[8px] border-[1px] border-white'>{landlord ? 'Арендодатель' : 'Арендатор'}</p>
            </div>
            {
                landlord ?
                    <div className='flex flex-col'>
                        <IsolatedButton className='mt-[30px] bg-[#E74362] rounded-[6px]'>Добавить новую площадку</IsolatedButton>
                        <IsolatedButton className='bg-transparent border-2 border-white rounded-[6px] mt-[16px]'>Ваши площадки</IsolatedButton>
                        <div className='w-[100%] relative'>
                            {
                                activeBooks ?  <div className='absolute -right-2 z-10 px-[6px] bg-[#E74362] text-[14px] rounded-[50px]'>5</div> : ''
                            }

                            <IsolatedButton className=' w-[100%] bg-transparent border-2 border-white rounded-[6px] mt-[16px]'>Заявки на бронь</IsolatedButton>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col'>
                        <IsolatedButton className='mt-[30px] bg-[#E74362] rounded-[6px]'>Текущая бронь</IsolatedButton>
                        <IsolatedButton className='bg-transparent border-2 border-white rounded-[6px] mt-[16px]'>История брони</IsolatedButton>

                    </div>
            }
        </section>
    );
};

export default ProfileMobileComponent;