"use client";
import {useEffect, useState} from "react";
import Image from "next/image";
import {closeIcon} from "@/images/icons/closeIcon";
import Link from "next/link";
import IsolatedSearch from "@/components/ui/IsolatedSearch/IsolatedSearch";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";

const Overlay = ({active, setActive}) => {
    // активный элемент
    const chooseItem = (id) => {
        const newArr = state.map((item) =>
            item.id === id ? { ...item, status: true } : { ...item, status: false }
        );
        setState(newArr);
    };
    // фейк данные из бэка
    const [state, setState] = useState([
        { id: 1, status: false, category: 'Киностудии' },
        { id: 2, status: false, category: 'Дизайн-студии' },
        { id: 3, status: false, category: 'Книжные магазины' },
        { id: 4, status: false, category: 'Звукозаписывающие студии' },
        { id: 5, status: false, category: 'AR/VR студии' },
        { id: 6, status: false, category: 'Издательства' },
        { id: 7, status: false, category: 'Владельцы креативных пространств' },
        { id: 8, status: false, category: 'Книжные магазины' },

    ]);
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <section
            id="overlay"
            className="fixed top-0 left-0 right-0 flex flex-col px-[16px] py-[24px] w-full h-full bg-[#010F1E] z-50"
        >
          <div className='w-full flex items-center justify-between'>
              <Image onClick={() => setActive(false)} className='w-[24px] h-[24px]' src={closeIcon} alt='белый крестик для закрытия окна' />
              <h3 className='text-white text-[14px] font-medium'>Фильтры</h3>
              <Link className='text-[#70B0DF] font-normal text-[14px]' href='/'>Сбросить</Link>
          </div>
            <h3 className='mt-[24px] font-medium text-[16px]'>Все категории</h3>
            <ul className='mt-[16px] flex flex-wrap gap-1 md:flex md:flex-col md:items-start md:list-disc md:mt-[27px]'>
                {
                    state.map((item) => <li
                        key={item.id}
                        onClick={() => chooseItem(item.id)}
                        style={{background: item.status ? '#345a9e' : '#182A4A'}}
                        className='md:bg-transparent px-4 py-2 md:py-0 md:px-0 rounded-[6px] md:mb-[24px] md:hover:underline decoration-2'>

                            {item.category}
                    </li>)
                }
            </ul>
            <h3 className='text-white font-medium text-[16px] mt-[24px] mb-[12px]'>Где искать</h3>
            <IsolatedSearch className='pr-[40px] md:bottom-0 bottom-1' placeholder={'Метро, район, кварталы, жилые массивы'}/>
            <h3 className='mb-[20px] md:text-[24px] text-[16px]'>Цена</h3>
            <div className='flex gap-6'>
                <IsolatedInput placeholder='От'></IsolatedInput>
                <IsolatedInput placeholder='До'></IsolatedInput>
            </div>
        </section>
    );
};

export default Overlay;