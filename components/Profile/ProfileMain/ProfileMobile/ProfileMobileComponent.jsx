"use client";
import Image from "next/image";
import { userRed } from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import useFindUser from "@/hooks/useFindUser";
import Link from "next/link";
import links from "@/utils/links";
import { useEffect, useState } from "react";
import api from "@/utils/api";

const ProfileMobileComponent = () => {
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
        <section className="lg:hidden bg-[#0C1622] min-h-[98vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px]  w-full">
            <div className="flex justify-center mt-[32px]">
                <Image
                    className="h-[64px] w-[64px]"
                    src={userRed}
                    alt="красный кружочек с иконкой пользователя внутри"
                ></Image>
            </div>
            <div className="flex flex-col items-center">
                <p className="font-medium text-[14px] text-white mt-[16px]">
                    {user.username}
                </p>
                <p className="font-normal text-[14px] text-white mt-[12px] py-[2px] px-[6px] rounded-[8px] border-[1px] border-white">
                    {user.userRole === "landlord"
                        ? "Арендодатель"
                        : "Арендатор"}
                </p>
            </div>
            {user.userRole === "landlord" ? (
                <div className="flex flex-col">
                    <Link
                        className="text-sm font-medium mt-[16px] h-[40px] text-center flex-center bg-[#E74362] rounded-[6px]"
                        href={links.yourPlaces}
                    >
                        Добавить новую площадку
                    </Link>
                    <Link
                        className="text-sm font-medium mt-[16px] h-[40px] text-center flex-center bg-transparent border-white border-[1px] rounded-[6px]"
                        href={links.yourPlaces}
                    >
                        Ваши площадки
                    </Link>
                    <div className="w-[100%] relative">
                        {/* {activeBooks ? (
                            <div className="absolute -right-2 z-10 px-[6px] bg-[#E74362] text-[14px] rounded-[50px]">
                                5
                            </div>
                        ) : (
                            ""
                        )} */}

                        <Link
                            className="text-sm font-medium mt-[16px] h-[40px] text-center flex-center bg-transparent border-white border-[1px] rounded-[6px]"
                            href={links.booksRequests}
                        >
                            Заявки на бронь
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col">
                        <Link
                            className="text-sm font-semibold mt-[30px] h-[32px] text-center flex-center bg-[#E74362] rounded-[6px]"
                            href={links.viewBooks}
                        >
                            Текущие брони
                        </Link>
                    <Link
                            className="text-sm font-semibold mt-[16px] h-[32px] text-center flex-center bg-transparent border-white border-[1px] rounded-[6px]"
                            href={links.booksArchive}
                        >
                            История брони
                        </Link>
                </div>
            )}
        </section>
    );
};

export default ProfileMobileComponent;
