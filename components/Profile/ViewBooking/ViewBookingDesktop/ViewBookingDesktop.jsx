"use client";
import Image from "next/image";
import { userRed } from "@/images/icons/userRed/userRed";
import { SettingsIcon } from "@/images/icons";
import { IsolatedAccordionDesktop } from "@/components/ui/IsolatedAccordionDesktop/IsolatedAccordionDesktop";
import Link from "next/link";
import links from "@/utils/links";
import useFindUser from "@/hooks/useFindUser";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";

const ViewBookingDesktop = () => {
    const user = useFindUser();

    if (!user || user.userRole === "tennant") {
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [places, setPlaces] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        api.getUserPlaces(user.id).then((res) => setPlaces(res.places));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className="hidden lg:block lg:w-[86%] md:w-[86%] mx-auto mb-0 mt-[45px] pb-[200px]">
            <div className="grid-cols-3 grid gap-[16px]">
                <div className="grid-cols col-span-1 flex flex-col items-center">
                    <Image
                        className="w-[96px] h-[96px]"
                        src={userRed}
                        alt="Пользователь"
                    />
                    <h3 className="mt-[26px] lg:text-[28px] text-white font-medium md:text-[20px]">
                        {user.username}
                    </h3>
                    <p className="font-normal text-center w-[150px] text-[18px] text-white mt-[13px] py-[5px] px-[7px] rounded-[8px] border-[1px] border-white">
                        {user.userRole === "landlord"
                            ? "Арендодатель"
                            : "Арендатор"}
                    </p>
                    {user.userRole === "landlord" ? (
                        <Link
                            className="text-base font-semibold w-full mt-[16px] h-[48px] text-center flex-center bg-[#E74362] text-white rounded-[6px]"
                            href="#"
                        >
                            Добавить новую площадку
                        </Link>
                    ) : (
                        <Link
                            className="text-base font-semibold w-full mt-[16px] h-[48px] text-center flex-center bg-[#E74362] text-white rounded-[6px]"
                            href="#"
                        >
                            Просмотр брони
                        </Link>
                    )}
                    {user.userRole === "landlord" ? (
                        <Link
                            className="text-base font-semibold w-full mt-[16px] h-[48px] text-center flex-center bg-transparent border-white border-[1px] text-white rounded-[6px]"
                            href={links.yourPlaces}
                        >
                            Ваши площадки
                        </Link>
                    ) : (
                        ""
                    )}
                    <div className="relative w-[100%] mt-[20px]">
                        {user.userRole === "landlord" ? (
                            <Link
                                className="text-base font-semibold w-full h-[48px] text-center flex-center bg-transparent border-white border-[1px] text-white rounded-[6px]"
                                href={links.viewBooks}
                            >
                                Просмотр брони
                            </Link>
                        ) : (
                            <Link
                                className="text-base font-semibold w-full h-[48px] text-center flex-center bg-transparent border-white border-[1px] text-white rounded-[6px]"
                                href="#"
                            >
                                История брони
                            </Link>
                        )}
                    </div>
                    {user.userRole === "landlord" && (
                        <Link
                            className="text-base font-semibold w-full mt-[18px] h-[48px] text-center flex-center bg-transparent border-white border-[1px] text-white rounded-[6px]"
                            href={links.booksArchive}
                        >
                            Архив брони
                        </Link>
                    )}
                    <div className="relative w-[100%] mt-[20px]">
                        <Image
                            className="absolute left-3 top-3 w-[24px] h-[24px]"
                            src={SettingsIcon}
                            alt="иконка с сеттингами"
                        />
                        <Link
                            className="text-base font-semibold w-full h-[48px] text-center flex-center bg-transparent border-white border-[1px] text-white rounded-[6px]"
                            href="#"
                        >
                            Настройки профиля
                        </Link>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col justify-start max-h-[800px] overflow-y-auto">
                    <h3 className="text-white text-[36px] font-medium">
                        Просмотр брони
                    </h3>
                    <div className="bg-transparent mt-[18px]">
                        {/* {user.userRole === "landlord" ? ( */}
                        {places.map((place) => {
                            return (
                                place.books.length > 0 && (
                                    <IsolatedAccordionDesktop
                                        key={place.id}
                                        status="pending"
                                        userRole={user.userRole}
                                        place={place}
                                    />
                                )
                            );
                        })}
                        {/* ) : (
                            <>
                                <IsolatedAccordionDesktop
                                    isActive={true}
                                    isPending={false}
                                    data={activeArr}
                                    titleAccordeon={"Заявки на бронь"}
                                />
                                <IsolatedAccordionDesktop
                                    isActive={false}
                                    isPending={true}
                                    data={successArr}
                                    titleAccordeon={"Подтвержденная бронь"}
                                />
                                <IsolatedAccordionDesktop
                                    isActive={false}
                                    isPending={true}
                                    data={pendingArr}
                                    titleAccordeon={"Отклонённая бронь"}
                                />
                            </>
                            <>
                                <ProfileContainerActiveItem data={dataTenant} />
                            </>
                        )} */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewBookingDesktop;
