import Image from "next/image";
import { userRed } from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import api from "@/utils/api";

const BookingItemDesktop = ({
    userRole,
    username,
    book,
    places,
    owner,
    id,
}) => {
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
        <div>
           {book.status !== "resolved" && <div className="w-[100%] bg-[#17283F] rounded-[12px] mt-[16px] flex items-center justify-between px-[16px] py-[12px]">
                <div className="flex items-center gap-[12px]">
                    <div>
                        <Image
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
                                {owner.username}
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
                        <>
                            {book.status === "pending" ? (
                                <div className="flex gap-2">
                                    <IsolatedButton
                                        onClick={handleAcceptBook}
                                        className="w-[100%] lg:w-[100%] text-white bg-transparent border-white border-2 mt-[8px] rounded-[6px]"
                                    >
                                        Принять
                                    </IsolatedButton>
                                    <IsolatedButton
                                        onClick={handleCancelBook}
                                        className="w-[100%] lg:w-[100%] text-[#E74362] bg-transparent border-[#E74362] border-2 mt-[8px] rounded-[6px]"
                                    >
                                        Отклонить
                                    </IsolatedButton>
                                </div>
                            ) : book.status === "accepted" ? (
                                <div className="flex gap-2">
                                    <p className="text-xl text-[#E74362]">Бронь принята</p>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <p className="text-xl text-[#E74362]">Бронь отклонена</p>
                                </div>
                            )}
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>}
        </div>
    );
};

export default BookingItemDesktop;
