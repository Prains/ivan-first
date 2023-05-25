import React from 'react';
import {exitIcon} from "@/images/icons/exitIcon";
import Link from "next/link";
import Image from "next/image";
import {Logo} from "@/components/ui/Icons";
import FooterDesktop from "@/components/Footer/FooterDesktop/FooterDesktop";

const FooterAccount = () => {
    return (
        <>
            <div className='hidden lg:block'>
                <FooterDesktop />
            </div>
            <footer className='lg:hidden'>
                <div className='flex justify-between w-[91%] mx-auto my-0'>
                    <Logo />
                    <Link href='/'><Image className='relative top-1 w-[24px] h-[24px]' src={exitIcon} alt='белая иконка со стрелкой направо внутри'/></Link>
                </div>
            </footer>
        </>
    );
};

export default FooterAccount;