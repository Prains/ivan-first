"use client"
import {useState} from 'react';
import Overlay from "@/components/Header/MobileFilters/Overlay/Overlay";
import Image from "next/image";
import {IconMenu} from "@/images/icons";

const HeaderModal = ({className}) => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className={className}>
            <Image onClick={() => setModalActive(true)} src={IconMenu} alt='menu__icon' />
            {
                modalActive ? <Overlay active={modalActive} setActive={setModalActive}/> : ''
            }
        </div>
    );
};

export default HeaderModal;