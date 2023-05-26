import Image from "next/image";
import {userRed} from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import {SettingsIcon} from "@/images/icons";
import {cardImage} from "@/images/Main";
import  {useMemo} from "react";
import IsolatedAccordionDesktop from "@/components/ui/IsolatedAccordionDesktop/IsolatedAccordionDesktop";
import ProfileContainerActiveItem
    from "@/components/Profile/ProfileMain/ProfileContainerActiveItem/ProfileContainerActiveItem";

const ViewBookingDesktop = ({landlord}) => {
    const dataTenant = [
        {
            id: 1,
            title: 'Artplay',
            date: '21 мая 18.00 - 22.00',
            image: cardImage,
            type: 'active'
        },
        {
            id: 2,
            title: 'СНТ',
            date: '21 мая 18.00 - 22.00',
            image: cardImage,
            type: 'active'
        },
        {
            id: 3,
            title: 'чарон',
            date: '21 мая 18.00 - 22.00',
            image: cardImage,
            type: 'active'
        }
    ]
    const data = [
        {
            id: 1,
            title: 'ArtplayActive',
            date: '21 мая 18.00 - 22.00',
            image: cardImage,
            type: 'active'
        },
        {
            id: 2,
            title: 'ArtplaySuccessful',
            date: '22 мая 18.00 - 24.00',
            image: cardImage,
            type: 'successful'
        },
        {
            id: 3,
            title: 'ArtplayPending',
            date: '23 мая 18.00 - 20.00',
            image: cardImage,
            type: 'pending'
        },
        {
            id: 4,
            title: 'ArtplayPending',
            date: '23 мая 18.00 - 20.00',
            image: cardImage,
            type: 'pending'
        }
    ]
    const activeArr = useMemo(
        () => {
            return data.filter((active) => active.type === "active");
        }, [data]);
    const successArr = useMemo(
        () => {
            return data.filter((successful) => successful.type === "successful");
        }, [data]);
    const pendingArr = useMemo(
        () => {
            return data.filter((pending) => pending.type === "pending");
        }, [data]);

    return (
        <section className='hidden lg:block lg:w-[86%] md:w-[86%] mx-auto mb-0 mt-[45px] pb-[200px]'>
            <div className='grid-cols-3 grid gap-[16px]'>
                <div className='grid-cols col-span-1 flex flex-col items-center'>
                    <Image className='w-[96px] h-[96px]' src={userRed} alt='Пользователь' />
                    <h3 className='mt-[26px] lg:text-[28px] text-white font-medium md:text-[20px]'>Евгений Евгеньевич</h3>
                    <p className='font-normal text-center w-[150px] text-[18px] text-white mt-[13px] py-[5px] px-[7px] rounded-[8px] border-[1px] border-white'>{landlord ? 'Арендодатель' : 'Арендатор'}</p>
                    {landlord ? <IsolatedButton className='w-[100%] bg-[#E74362] mt-[22px]'>Добавить новую площадку</IsolatedButton> : <IsolatedButton className='w-[100%] bg-[#E74362] mt-[22px]'>Просмотр брони</IsolatedButton>}
                    {
                        landlord ?  <IsolatedButton className='w-[100%] mt-[20px] bg-transparent border-2 border-white rounded-[6px] py-[14px]'>Ваши площадки</IsolatedButton> : ''
                    }
                    <div className='relative w-[100%] mt-[20px]'>
                        {
                            landlord ? <span className='absolute -right-2 -top-2 z-10 text-white text-[16px] py-[2px] px-[10px] font-medium bg-[#E74362] rounded-[50px]'>1</span> : ''
                        }
                        {
                            landlord ? <IsolatedButton className='w-[100%] bg-transparent border-2 border-white rounded-[6px] py-[14px]'>Просмотр брони</IsolatedButton> :
                                <IsolatedButton className='w-[100%] bg-transparent border-2 border-white rounded-[6px] py-[14px]'>История брони</IsolatedButton>
                        }
                    </div>
                    {
                        landlord && <IsolatedButton className='w-[100%] bg-transparent border-2 border-white rounded-[6px] py-[14px] mt-[20px]'>Архив брони</IsolatedButton>
                    }
                    <div className='relative w-[100%] mt-[20px]'>
                        <Image className='absolute left-2 top-2 w-[24px] h-[24px]' src={SettingsIcon} alt='иконка с сеттингами' />
                        <IsolatedButton className='w-[100%] bg-transparent border-2 border-white rounded-[6px] py-[14px]'>Настройки профиля</IsolatedButton>
                    </div>

                </div>
                <div className='col-span-2 flex flex-col justify-start max-h-[800px] overflow-y-auto'>
                    <h3 className='text-white text-[36px] font-medium'>Просмотр брони</h3>
                    <div className='bg-transparent mt-[18px]'>
                        {
                            landlord ?
                                <>
                                    <IsolatedAccordionDesktop isActive={true} isPending={false} data={activeArr}
                                                              titleAccordeon={'Заявки на бронь'}/>
                                    <IsolatedAccordionDesktop isActive={false} isPending={true} data={successArr}
                                                              titleAccordeon={'Подтвержденная бронь'}/>
                                    <IsolatedAccordionDesktop isActive={false} isPending={true} data={pendingArr}
                                                              titleAccordeon={'Отклонённая бронь'}/>
                                </>:
                                <>
                                    <ProfileContainerActiveItem data={dataTenant}/>

                                </>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewBookingDesktop;