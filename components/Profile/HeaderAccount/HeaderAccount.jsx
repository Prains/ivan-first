import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {SettingsIcon, whiteArrowLeft} from "@/images/icons";
import {userRed} from "@/images/icons/userRed/userRed";

const HeaderAccount = ({isVisible, text}) => {
    return (
        <div className='flex items-center justify-between w-[91%] mx-auto my-0'>
            <Link href='/'><Image className='w-[24px] h-[24px]' src={whiteArrowLeft} alt='белая стрелочка налево'></Image></Link>
            <h3 className='ml-6'>{text}</h3>
            <div className='flex gap-2'>
                {
                    isVisible ? <Link href='/'><Image className='w-[24px] h-[24px]' src={userRed} alt='красный кружок с иконкой пользователем внутри'></Image></Link> : ''
                }
                <Link href='/'><Image className='w-[24px] h-[24px]' src={SettingsIcon} alt='белая шестеренка'></Image></Link>
            </div>
        </div>
    );
};

export default HeaderAccount;