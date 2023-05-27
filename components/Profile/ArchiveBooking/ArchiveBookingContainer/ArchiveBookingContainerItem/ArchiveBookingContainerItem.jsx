import React from "react";
import Image from "next/image";
import { userRed } from "@/images/icons/userRed/userRed";
import IsolatedModal from "@/components/ui/IsolatedModal/IsolatedModal";

const ArchiveBookingContainerItem = ({ book, places, username, userRole }) => {
    return (
        <div>
            <div className="w-[100%] bg-[#17283F] rounded-[12px] mt-[16px] flex items-center justify-between px-[16px] py-[12px]">
                <div className="flex items-center gap-[12px]">
                    <div>
                        <Image
                            className="object-cover h-[75px] w-[75px]"
                            width="75"
                            height="75"
                            src={
                                userRole === "landlord"
                                    ? userRed
                                    : `http://89.232.167.133:1337${places[0].photos[0].url}`
                            }
                            alt="фото"
                        />
                    </div>
                    <div>
                        {userRole === "landlord" ? (
                            <p className="text-[20px] text-white font-medium">
                                {username}
                            </p>
                        ) : (
                            <p className="text-[20px] text-white font-medium">
                                {places[0].title}
                            </p>
                        )}
                        <div className="flex gap-4">
                            <p className="text-[20p] text-white font-medium">
                                {book.startDate}
                            </p>
                            <span className="text-[#E74362]">{book.time}</span>
                        </div>
                    </div>
                </div>
                <div>
                    {userRole === "landlord" ? (
                        ""
                    ) : (
                        <>
                            <div className="flex flex-col ">
                                <IsolatedModal
                                    title={places[0].title}
                                    image={{width: "75", height: "75", src: `http://89.232.167.133:1337${places[0].photos[0].url}`}}
                                    date={`${book.startDate} ${book.time}`}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArchiveBookingContainerItem;
