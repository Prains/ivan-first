import {HeaderLogo} from "@/images/Header";
import Link from "next/link";
import Image from "next/image";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import IsolatedSearch from "@/components/ui/IsolatedSearch/IsolatedSearch";
import IsolatedPopOver from "@/components/ui/IsolatedPopOver/IsolatedPopOver";
const Header = () => {
    return (
        <header className='bg-[#0C1622] py-[15px] flex items-center z-30'>
            <div className='lg:w-[91%] md:w-[91%] bg-[#0C1622] mx-auto flex justify-between items-center flex-col md:flex-row'>
                <div className='w-full md:w-max flex items-center justify-between mb-2'>
                    <Link href='#' className='w-full flex items-center justify-between'>
                        <Image src={HeaderLogo} alt='header__logo'/>
                        <IsolatedButton className={'lg: font-[20px] h-[32px] w-[80px] md:hidden'}>Войти</IsolatedButton>
                    </Link>
                </div>
                <div className='flex gap-4 justify-between'>
                    <IsolatedSearch variant={'outline'} colorScheme={'green'} placeholder={'Поиск'} className={'lg:w-[264px] md:w-[222px] w-[200px] text-[#D9D9D9] border-gray-200 h-[32px] md:h-[40px] pr-[40px]'} />
                    <IsolatedInput variant={'outline'} colorScheme={'green'} placeholder={''} className={'lg:w-[184px] lg:block text-[#D9D9D9] border-gray-200 h-[32px] md:h-[40px] hidden'} />
                    <IsolatedPopOver className='md:mr-0 mr-[0px] md:scale-125 z-40 cursor-pointer'/>
                </div>
                <div className='flex gap-2'>
                    <IsolatedButton className={'lg: font-[20px] h-[32px] w-[80px] hidden md:block'}>Войти</IsolatedButton>
                    <IsolatedButton className={'lg: font-[20px] h-[32px] w-[140px] md:block hidden'}>Регистрация</IsolatedButton>
                </div>
            </div>

        </header>
    );
};

export default Header;