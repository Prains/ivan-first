"use client"
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import Image from "next/image";
import {searchIcon} from "@/images/icons/searchIcon";

const IsolatedSearch = ({className, placeholder}) => {
    return (
        <div className='relative'>
            <IsolatedInput className={className} placeholder={placeholder}/>
            <Image className='absolute top-[6px] right-[8px] md:right-[10px] md:top-[10px]' src={searchIcon} alt={'Поиск'} />
        </div>
    );
};

export default IsolatedSearch;