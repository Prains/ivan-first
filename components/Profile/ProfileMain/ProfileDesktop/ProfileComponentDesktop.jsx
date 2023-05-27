"use client";
import Image from "next/image";
import { userRed } from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { SettingsIcon } from "@/images/icons";
import ProfileContainerActiveItem from "@/components/Profile/ProfileMain/ProfileContainerActiveItem/ProfileContainerActiveItem";
import ProfileAccordeon from "@/components/Profile/ProfileMain/ProfileAccordeon/ProfileAccordeon";
import useFindUser from "@/hooks/useFindUser";
import Link from "next/link";
import links from "@/utils/links";
import { useEffect, useState } from "react";
import api from "@/utils/api";

const ProfileComponentDesktop = ({ landlord }) => {
    const user = useFindUser();

    if (!user) {
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
                    <IsolatedButton
                        size="lg"
                        className="font-medium text-base w-[307px] bg-[#E74362] mt-[22px]"
                    >
                        Добавить новую площадку
                    </IsolatedButton>
                    {user.userRole === "landlord" ? (
                        <Link
                            className="font-medium text-base m-0 flex-center w-[307px] mt-5 h-[48px] text-[#E74362] border-[#E74362] border-solid border-[1px] rounded-md"
                            href={links.yourPlaces}
                        >
                            Ваши площадки
                        </Link>
                    ) : (
                        ""
                    )}
                    <div className="relative w-[307px] mt-[20px]">
                        {user.userRole === "landlord" ? (
                            <>
                                {/* <span className="absolute -right-2 -top-2 z-10 text-white text-[16px] py-[2px] px-[10px] font-medium bg-[#E74362] rounded-[50px]">
                                    1
                                </span> */}
                                <IsolatedButton
                                    size="lg"
                                    className="font-medium text-base w-[307px] bg-transparent border-[1px] border-white rounded-[6px] py-[14px]"
                                >
                                    Просмотр брони
                                </IsolatedButton>
                            </>
                        ) : (
                            <>
                                <IsolatedButton
                                    size="lg"
                                    className="font-medium text-base w-[307px] bg-transparent border-[1px] border-white rounded-[6px] py-[14px]"
                                >
                                    История брони
                                </IsolatedButton>
                            </>
                        )}
                    </div>
                    <div className="relative w-[307px] mt-[20px]">
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
                </div>
                <div className="col-span-2 flex flex-col justify-start max-h-[800px] overflow-y-auto">
                    <h3 className="text-white text-[36px] font-medium">
                        Текущие заявки
                    </h3>
                    {places.map((place) => {
                        return (
                            place.books.length > 0 &&
                            place.status === "resolved" && 
                            place.archived === false && (
                                <ProfileAccordeon
                                    key={place.id}
                                    {...place}
                                    user={user.userRole}
                                />
                            )
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProfileComponentDesktop;
