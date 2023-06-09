"use client";
import Link from "next/link";
import { Avatar, Tag, ButtonGroup } from "@chakra-ui/react";
import { SettingsIcon } from "@/images/icons";
import links from "@/utils/links";
import Image from "next/image";

const LandLordControlPanelDesktop = ({ user }) => {
    return (
        <div className="flex-center-col justify-start max-w-[320px]">
            <div>
                <Avatar size="xl" bg="#E74362" />
            </div>
            <h2 className="text-[28px] text-center font-medium mt-[26px] mb-[13px]">
                {user.username}
            </h2>
            <Tag className=" mb-[22px] w-[150px] h-[40px] text-lg font-normal flex-center text-white border-[1px] bg-transparent">
                Арендодатель
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
                    href={links.yourPlaces}
                >
                    Ваши площадки
                </Link>
                <Link
                    className="font-medium text-base m-0 flex-center w-[307px] h-[48px] text-white border-white border-solid border-[1px] rounded-md"
                    href={links.viewBooks}
                >
                    Просмотр брони
                </Link>

                {/* TODO: Добавить от Ромы настройки профиля */}

                <Link
                    className="font-medium text-base m-0 flex-center w-[307px] h-[48px] text-[#E74362] border-[#E74362] border-solid border-[1px] rounded-md"
                    href={links.placesArchive}
                >
                    Архив площадок
                </Link>
                <div className="relative w-full">
                    <Image
                        className="absolute left-3 top-3 w-[24px] h-[24px]"
                        src={SettingsIcon}
                        alt="иконка с сеттингами"
                    />
                    <Link
                        className="font-medium text-base flex-center w-[307px] h-[48px] text-white border-white border-solid border-[1px] rounded-md"
                        href="#"
                    >
                        Настройки профиля
                    </Link>
                </div>
            </ButtonGroup>
        </div>
    );
};

export default LandLordControlPanelDesktop;
