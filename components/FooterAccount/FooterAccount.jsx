import React from 'react';
import {exitIcon} from "@/images/icons/exitIcon";
import {logo} from "@/images/icons";
import Link from "next/link";
import Image from "next/image";
const FooterAccount = ({className}) => {
    return (
        <footer className={className}>
            <div className='flex justify-between'>
                <Link href='/'><Image className='scale-150 w-[87px] h-[29px]' src={logo} alt='логотип на котором написано белыми буквами здесь и красной точкой'/></Link>
                <Link href='/'><Image className='relative top-1 w-[24px] h-[24px]' src={exitIcon} alt='белая иконка со стрелкой направо внутри'/></Link>
            </div>
        </footer>
    );
};

export default FooterAccount;