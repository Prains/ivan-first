"use client"
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import Image from "next/image";
import {optionsIcon} from "@/images/icons/optionsIcon";

const IsolatedBannerInput = ({className, placeholder}) => {
    return (
        <div className='relative'>
            <IsolatedInput className={className} placeholder={placeholder}/>
            <Image className='absolute right-[10px] top-[6px]' src={optionsIcon} alt={'Поиск'} />
        </div>
    );
};

export default IsolatedBannerInput;