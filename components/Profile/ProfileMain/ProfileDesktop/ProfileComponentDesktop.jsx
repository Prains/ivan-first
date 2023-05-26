import Image from "next/image";
import {userRed} from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import {SettingsIcon} from "@/images/icons";
import ProfileContainerActiveItem from "@/components/Profile/ProfileMain/ProfileContainerActiveItem/ProfileContainerActiveItem";
import ProfileAccordeon from "@/components/Profile/ProfileMain/ProfileAccordeon/ProfileAccordeon";

const ProfileComponentDesktop = ({landlord}) => {
    const data = [{
        id: 1,
        title: 'Artplay',

    }]
    return (
        <section className='hidden lg:block lg:w-[86%] md:w-[86%] mx-auto mb-0 mt-[45px] pb-[200px]'>
            <div className='grid-cols-3 grid gap-[16px]'>
                <div className='grid-cols col-span-1 flex flex-col items-center'>
                    <Image className='w-[96px] h-[96px]' src={userRed} alt='Пользователь'/>
                    <h3 className='mt-[26px] lg:text-[28px] text-white font-medium md:text-[20px]'>Евгений
                        Евгеньевич</h3>
                    <p className='font-normal text-center w-[150px] text-[18px] text-white mt-[13px] py-[5px] px-[7px] rounded-[8px] border-[1px] border-white'>{landlord ? 'Арендодатель' : 'Арендатор'}</p>
                    <IsolatedButton className='w-[100%] bg-[#E74362] mt-[22px]'>Добавить новую площадку</IsolatedButton>
                    {
                        landlord ? <IsolatedButton
                            className='w-[100%] mt-[20px] bg-transparent border-2 border-white rounded-[6px] py-[14px]'>Ваши
                            площадки</IsolatedButton> : ''
                    }
                    <div className='relative w-[100%] mt-[20px]'>
                        {
                            landlord ? <>
                                    <span
                                        className='absolute -right-2 -top-2 z-10 text-white text-[16px] py-[2px] px-[10px] font-medium bg-[#E74362] rounded-[50px]'>1</span>
                                    <IsolatedButton
                                        className='w-[100%] bg-transparent border-2 border-white rounded-[6px] py-[14px]'>Просмотр
                                        брони</IsolatedButton>
                                </>
                                :
                                <>
                                    <IsolatedButton
                                        className='w-[100%] bg-transparent border-2 border-white rounded-[6px] py-[14px]'>История
                                        брони</IsolatedButton>
                                </>
                        }
                    </div>
                    <div className='relative w-[100%] mt-[20px]'>
                        <Image className='absolute left-2 top-2 w-[24px] h-[24px]' src={SettingsIcon}
                               alt='иконка с сеттингами'/>
                        <IsolatedButton
                            className='w-[100%] bg-transparent border-2 border-white rounded-[6px] py-[14px]'>Настройки
                            профиля</IsolatedButton>
                    </div>

                </div>
                <div className='col-span-2 flex flex-col justify-start max-h-[800px] overflow-y-auto'>
                    <h3 className='text-white text-[36px] font-medium'>Текущие заявки</h3>
                    <ProfileAccordeon landlord={landlord}/>
                    <ProfileAccordeon landlord={landlord}/>
                </div>
            </div>
        </section>
    );
};

export default ProfileComponentDesktop;