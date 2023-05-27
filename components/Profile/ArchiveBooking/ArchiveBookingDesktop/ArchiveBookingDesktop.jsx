"use client";
import Image from "next/image";
import { userRed } from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { SettingsIcon } from "@/images/icons";
import ProfileContainerActiveItem from "@/components/Profile/ProfileMain/ProfileContainerActiveItem/ProfileContainerActiveItem";
import ArchiveBookingContainer from "@/components/Profile/ArchiveBooking/ArchiveBookingContainer/ArchiveBookingContainer";
import useFindUser from "@/hooks/useFindUser";
import Link from "next/link";
import links from "@/utils/links";
import { useEffect, useState } from "react";
import api from "@/utils/api";

const ArchiveBookingDesktop = ({ landlord }) => {
    const user = useFindUser();

    if (!user) {
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [places, setPlaces] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [books, setBooks] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        user.userRole === "landlord"
            ? api.getUserPlaces(user.id).then((res) => setPlaces(res.places))
            : api.getUserBooks(user.id).then((res) => setBooks(res.books));
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
                        {user.userRole === "landlord" ? "Арендодатель" : "Арендатор"}
                    </p>
                    {user.userRole === "landlord" && (
                        <Link
                            className="font-medium text-base m-0 flex-center w-[307px] mt-5 h-[48px] text-[#E74362] border-[#E74362] border-solid border-[1px] rounded-md"
                            href={links.profile}
                        >
                            Добавить площадку
                        </Link>
                    )}
                    {user.userRole === "landlord" ? (
                        <IsolatedButton className="w-[100%] mt-[20px] bg-transparent border-2 border-white rounded-[6px] py-[14px]">
                            Ваши площадки
                        </IsolatedButton>
                    ) : (
                        <Link
                            className="font-medium text-base m-0 flex-center w-[307px] mt-5 h-[48px] text-[#E74362] border-[#E74362] border-solid border-[1px] rounded-md"
                            href={links.profile}
                        >
                            Текущие брони
                        </Link>
                    )}
                    <div className="flex-center-col relative w-[100%] mt-[20px]">
                        {user.userRole === "landlord" ? (
                            <>
                                {/* <span
                                        className='absolute -right-2 -top-2 z-10 text-white text-[16px] py-[2px] px-[10px] font-medium bg-[#E74362] rounded-[50px]'>1</span> */}
                                <Link
                                    className="font-medium text-base m-0 flex-center w-[307px] mt-5 h-[48px] text-[#E74362] border-[#E74362] border-solid border-[1px] rounded-md"
                                    href={links.profile}
                                >
                                    Просмотр брони
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    className="font-medium text-base m-0 flex-center w-[307px] h-[48px] text-[#E74362] border-[#E74362] border-solid border-[1px] rounded-md"
                                    href={links.profile}
                                >
                                    История брони
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="relative w-[307px] h-[48px] m-0 mt-[20px]">
                        <Image
                            className="absolute left-3 top-3 w-[24px] h-[24px]"
                            src={SettingsIcon}
                            alt="иконка с сеттингами"
                        />
                        <Link 
                        href="#"
                        className="font-medium text-base m-0 flex-center w-full h-[48px] bg-transparent border-[1px] border-white rounded-[6px] py-[14px]">
                            Настройки профиля
                        </Link>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col justify-start max-h-[800px] overflow-y-auto">
                    <h3 className="text-white text-[36px] font-medium">
                        {user.userRole === "landlord" ? "Архив брони" : "История брони"}
                    </h3>
                        {user.userRole === "landlord" ?
                        123
                        :
                        <ArchiveBookingContainer username={user.username} userRole={user.userRole} books={books} />
                        }
                    {/* <ArchiveBookingContainer data={data} landlord={landlord} /> */}
                </div>
            </div>
        </section>
    );
};

export default ArchiveBookingDesktop;
