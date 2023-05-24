import Link from "next/link";
import Image from "next/image";
import {SettingsIcon, whiteArrowLeft} from "@/images/icons";
import {userRed} from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import FooterAccount from "@/components/FooterAccount/FooterAccount";
import HeaderAccount from "@/components/HeaderAccount/HeaderAccount";
const AccountTentant = () => {
    return (
        <section className='bg-[#0C1622] h-[100vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px]  w-full'>
            <HeaderAccount className='flex items-center justify-between'/>
            <div className='flex justify-center mt-[32px]'>
                <Image className='h-[64px] w-[64px]' src={userRed} alt='красный кружочек с иконкой пользователя внутри'></Image>
            </div>
            <div className='flex flex-col items-center'>
                <p className='font-medium text-[14px] text-white mt-[16px]'>Евгений Евгениевич</p>
                <p className='font-normal text-[14px] text-white mt-[12px] py-[2px] px-[6px] rounded-[8px] border-[1px] border-white'>Арендатор</p>
            </div>
            <div className='flex flex-col'>
                <IsolatedButton className='mt-[30px] bg-[#E74362] rounded-[6px]'>Текущая бронь</IsolatedButton>
                <IsolatedButton className='bg-transparent border-2 border-white rounded-[6px] mt-[16px]'>История брони</IsolatedButton>

            </div>
            <FooterAccount className='w-[95%] absolute bottom-2 h-max flex flex-col justify-between' />
        </section>
    );
};

export default AccountTentant;