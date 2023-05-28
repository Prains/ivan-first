import Image from "next/image";
import Link from "next/link";
import { AcceptButton } from "@/images/icons/AcceptButton";
import { CloseButton } from "@/images/icons/CloseButton";
import { userRed } from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import api from "@/utils/api";

const ViewBookingMobileAccordeonItem = ({ userRole, places, book, owner, id }) => {
    const acceptBookData = {
        data: {
            book: {
                status: "accepted",
                startDate: book.startDate,
                endDate: book.endDate,
                time: book.time,
            },
        },
    };
    const cancelBookData = {
        data: {
            book: {
                status: "canceled",
                startDate: book.startDate,
                endDate: book.endDate,
                time: book.time,
            },
        },
    };

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
            <div className="w-full flex justify-between  mt-[8px]">
                <Link href="#" className="flex">
                    <div className="col-span-1 mr-[12px]">
                        <Image
                            className={
                                userRole === "landlord"
                                    ? "h-[32px] object-contain rounded-[2px]"
                                    : "h-[32px] object-cover rounded-[2px]"
                            }
                            width="75"
                            height="75"
                            src={
                                userRole === "landlord"
                                    ? userRed
                                    : `http://89.232.167.133:1337${places[0].photos[0].url}`
                            }
                            alt="картинка"
                        />
                    </div>
                    <div className="col-span-5">
                        <p className="overflow-hidden text-ellipsis text-black text-[14px] max-h-[36px] font-medium">
                            {owner.username}
                        </p>
                        <div className="flex gap-4">
                            <p className="text-[#E74362] text-[14px] font-medium">
                                {book.startDate}
                            </p>
                            <span className="text-[#E74362] text-[14px] font-medium">
                                {book.time}
                            </span>
                        </div>
                    </div>
                </Link>
                <div className="flex">
                    {userRole === "landlord" ? (
                        <>
                            {book.status === "pending" ? (
                                <div className="flex gap-2">
                                    {/* TODO: поправить размеры */}
                                    <IsolatedButton
                                        onClick={handleAcceptBook}
                                        className="w-[100%] p-0 text-white bg-transparent"
                                    >
                                        <Image
                                            src={AcceptButton}
                                            alt="кнопка"
                                        />
                                    </IsolatedButton>
                                    <IsolatedButton
                                        onClick={handleCancelBook}
                                        className=" p-0 text-white bg-transparent"
                                    >
                                        <Image src={CloseButton} alt="кнопка" />
                                    </IsolatedButton>
                                </div>
                            ) : book.status === "accepted" ? (
                                <div className="flex gap-2">
                                    <p className="text-sm text-[#E74362]">
                                        Бронь принята
                                    </p>
                                </div>
                            ) : book.status === "resolved" ? (
                                <div className="flex gap-2">
                                    <p className="text-sm text-[#E74362]">
                                        Бронь в архиве
                                    </p>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <p className="text-sm text-[#E74362]">
                                        Бронь отклонена
                                    </p>
                                </div>
                            )}
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
    );
};

export default ViewBookingMobileAccordeonItem;
