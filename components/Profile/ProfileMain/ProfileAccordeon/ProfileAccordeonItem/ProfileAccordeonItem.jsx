import React from "react";
import Image from "next/image";
import { userRed } from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { AcceptButtonDesktop } from "@/images/icons/AcceptButtonDesktop";
import { RedCloseIcon } from "@/images/icons/RedCloseIcon";
import { bgPlace } from "@/images/Place";
import api from "@/utils/api";

const ProfileAccordeonItem = ({ user, owner, book, id }) => {
    const acceptBookData = { data: { book: { status: "accepted", startDate: book.startDate, endDate: book.endDate, time: book.time} } };
    const cancelBookData = { data: { book: { status: "canceled", startDate: book.startDate, endDate: book.endDate, time: book.time} } };

    const handleAcceptBook = () => {
        api.changeBookData(acceptBookData, id).then(() => {
            window.location.reload();
        });
    };

    const handleCancelBook = () => {
        api.changeBookData(cancelBookData, id).then(() => {
            window.location.reload();
        });
    };

    return (
        <div>
            <div className="w-[100%] bg-[#17283F] rounded-[12px] mt-[16px] flex items-center justify-between px-[16px] py-[12px]">
                <div className="flex items-center gap-[12px]">
                    <div>
                        {user === "landlord" ? (
                            <Image src={userRed} alt="фото" />
                        ) : (
                            <Image
                                src={bgPlace}
                                alt="photo"
                                className="w-[75px] h-[75px] object-cover"
                            />
                        )}
                    </div>
                    <div>
                        <p className="text-[20px] text-white font-medium">
                            {owner.username}
                        </p>
                        {owner.type === "organization" ? (
                            <p className="text-[20px] text-white font-medium">
                                {owner.organizationName}
                            </p>
                        ) : (
                            ""
                        )}
                        <p className="text-[20p] text-white font-medium">
                            {book.startDate}{" "}
                            <span className="text-[#E74362]">{book.time}</span>
                        </p>
                    </div>
                </div>
                <div>
                    {user === "landlord" ? (
                        <>
                            <div>
                                <div className="md:block lg:flex gap-2">
                                    <IsolatedButton
                                        onClick={handleAcceptBook}
                                        className="w-[100%] p-[8px] lg:w-[116px] text-white bg-transparent border-white border-2 rounded-[6px]"
                                    >
                                        <Image
                                            src={AcceptButtonDesktop}
                                            alt="кнопка"
                                        />
                                        Принять
                                    </IsolatedButton>
                                    <IsolatedButton
                                        onClick={handleCancelBook}
                                        className="w-[100%] p-[8px] lg:w-[116px] text-[#E74362] bg-transparent border-[#E74362] border-2 rounded-[6px]"
                                    >
                                        <Image
                                            src={RedCloseIcon}
                                            alt="кнопка"
                                        />
                                        Отклонить
                                    </IsolatedButton>
                                </div>
                                <div>
                                    <IsolatedButton className="w-[100%] lg:w-[100%] text-[#E74362] bg-transparent border-[#E74362] border-2 mt-[8px] rounded-[6px]">
                                        Детали
                                    </IsolatedButton>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <IsolatedButton className="md:w-[120px] lg:w-[240px] text-[#D9D9D9] bg-transparent border-[#D9D9D9] border-2 mt-[8px] rounded-[6px]">
                                Детали
                            </IsolatedButton>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileAccordeonItem;
