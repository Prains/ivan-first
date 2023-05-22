"use client"
import {
    Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger
} from "@chakra-ui/react";
import Image from "next/image";
import {IconMenu} from "@/images/icons";
import IsolatedSearch from "@/components/ui/IsolatedSearch/IsolatedSearch";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import Link from "next/link";
import {bannerVector} from "@/images/Banner";
const IsolatedPopOver = ({className}) => {
    return (
        <Popover>
            <PopoverTrigger className='cursor-pointer'>
                <Image className={className} src={IconMenu} alt='menu__icon' />
            </PopoverTrigger>
            <PopoverContent className='xl:w-[964px] lg:w-[650px] md:w-[500px] bg-[#0E1A30] text-[#FFFFFF]'>
                <PopoverCloseButton className='top-[10px] left-[10px]  scale-[1.5] md:top-[28px] md:left-[450px] lg:left-[610px] xl:left-[920px]'/>
                <Link className='absolute right-[14px] top-[11px] text-[#70B0DF] block md:hidden text-[14px]' href='/'>Сбросить</Link>
                <PopoverBody  style={{backgroundImage: `url(${bannerVector.src})`}} className='bg-contain bg-[#0E1A30] rounded-[12px] bg-no-repeat md:flex md:gap-[74px] md:justify-between md:px-[70px] pb-[30px] md:pb-[100px] md:py-[30px]'>
                    <div className='flex-1'>
                        <div>
                            <h3 className='text-center mb-6 md:mb-0 md:text-[24px] text-[16px]'>Категории</h3>
                        </div>
                        <div>
                            <ul className='flex flex-wrap gap-1 md:flex md:flex-col md:items-start md:list-disc md:mt-[27px]'>
                                <li className='bg-[#182A4A] md:bg-transparent px-3 py-2 md:py-0 md:px-0 rounded-[18px] md:mb-[24px] md:hover:underline decoration-2'><Link href='/'>Киностудии</Link></li>
                                <li className='bg-[#182A4A] md:bg-transparent px-3 py-2 md:py-0 md:px-0 rounded-[18px] md:mb-[24px] md:hover:underline decoration-2'><Link href='/'>Дизайн-студии</Link></li>
                                <li className='bg-[#182A4A] md:bg-transparent px-3 py-2 md:py-0 md:px-0 rounded-[18px] md:mb-[24px] md:hover:underline decoration-2'><Link href='/'>Книжные магазины</Link></li>
                                <li className='bg-[#182A4A] md:bg-transparent px-3 py-2 md:py-0 md:px-0 rounded-[18px] md:mb-[24px] md:hover:underline decoration-2'><Link href='/'>Киностудии</Link></li>
                                <li className='bg-[#182A4A] md:bg-transparent px-3 py-2 md:py-0 md:px-0 rounded-[18px] md:mb-[24px] md:hover:underline decoration-2'><Link href='/'>Киностудии</Link></li>
                                <li className='bg-[#182A4A] md:bg-transparent px-3 py-2 md:py-0 md:px-0 rounded-[18px] md:mb-[24px] md:hover:underline decoration-2'><Link href='/'>Киностудии</Link></li>
                                <li className='bg-[#182A4A] md:bg-transparent px-3 py-2 md:py-0 md:px-0 rounded-[18px] md:mb-[24px] md:hover:underline decoration-2'><Link href='/'>Киностудии</Link></li>
                                <li className='bg-[#182A4A] md:bg-transparent px-3 py-2 md:py-0 md:px-0 rounded-[18px] md:mb-[24px] md:hover:underline decoration-2'><Link href='/'>Киностудии</Link></li>
                                <li className='bg-[#182A4A] md:bg-transparent px-3 py-2 md:py-0 md:px-0 rounded-[18px] md:mb-[24px] md:hover:underline decoration-2'><Link href='/'>Киностудии</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='mt-[24px] md:mt-0 mb-[20px] md:text-[24px] text-[16px]'>Где искать</h3>
                            <IsolatedSearch placeholder={'Метро, район, кварталы, жилые массивы'}/>
                        </div>
                        <div className='mt-[20px] md:mt-[46px]'>
                            <h3 className='mb-[20px] md:text-[24px] text-[16px]'>Цена</h3>
                            <div className='flex gap-6'>
                                <IsolatedInput placeholder='От'></IsolatedInput>
                                <IsolatedInput placeholder='До'></IsolatedInput>
                            </div>
                        </div>
                    </div>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default IsolatedPopOver;