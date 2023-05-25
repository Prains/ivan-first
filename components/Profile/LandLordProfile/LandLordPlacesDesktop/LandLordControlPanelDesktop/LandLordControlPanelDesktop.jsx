"use client";
import Link from "next/link";
import { Avatar, Tag, ButtonGroup } from "@chakra-ui/react";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";

const LandLordControlPanelDesktop = () => {
    return (
        <div className="flex-center-col justify-start max-w-[320px]">
            <div>
                <Avatar size="xl" bg="#E74362" />
            </div>
            <h2 className="text-[28px] text-center font-medium mt-[26px] mb-[13px]">
                Developer Developerovich
            </h2>
            <Tag className=" mb-[22px] w-[150px] h-[40px] text-lg font-normal flex-center text-white border-[1px] bg-transparent">
                Погромист
            </Tag>
            <ButtonGroup className="flex-center-col gap-5">
                <Link
                    className="font-semibold text-base m-0 flex-center w-[307px] h-[48px] text-white bg-[#E74362] rounded-md"
                    href="#"
                >
                    Добавить новую площадку
                </Link>
                <Link
                    className="font-medium text-base m-0 flex-center w-[307px] h-[48px] text-[#E74362] border-[#E74362] border-solid border-[1px] rounded-md"
                    href="/profile/landlord-places"
                >
                    Ваши площадки
                </Link>
                <Link
                    className="font-medium text-base m-0 flex-center w-[307px] h-[48px] text-white border-white border-solid border-[1px] rounded-md"
                    href="/profile/landlord-places"
                >
                    Просмотр брони
                </Link>

                {/* TODO: Добавить от Ромы настройки профиля */}

                <Link
                    className="font-medium text-base m-0 flex-center w-[307px] h-[48px] text-[#E74362] border-[#E74362] border-solid border-[1px] rounded-md"
                    href="/profile/landlord-places/archive"
                >
                    Архив площадок
                </Link>
                <IsolatedButton className="w-full m-0" size="lg" variant="outline">
                    Настройки профиля
                </IsolatedButton>
            </ButtonGroup>
        </div>
    );
};

export default LandLordControlPanelDesktop;
