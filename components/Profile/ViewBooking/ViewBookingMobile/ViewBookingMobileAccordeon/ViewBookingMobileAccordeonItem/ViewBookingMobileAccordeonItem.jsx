import Image from "next/image";
import Link from "next/link";
import { AcceptButton } from "@/images/icons/AcceptButton";
import { CloseButton } from "@/images/icons/CloseButton";
import { userRed } from "@/images/icons/userRed/userRed";

const ViewBookingMobileAccordeonItem = ({ userRole, places, book }) => {
    return (
        <Link href="/">
            <div className="w-full grid grid-cols-7 mt-[8px]">
                <div className="col-span-1 mr-[12px]">
                    <Image
                        className="h-[32px] object-cover rounded-[2px]"
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
                        {places[0].title}
                    </p>
                    <div className="flex gap-4">
                        <p className="text-[#E74362] text-[14px] font-medium">{book.startDate}</p>
                        <span className="text-[#E74362] text-[14px] font-medium">{book.time}</span>
                    </div>
                </div>
                <div className="col-span-1 flex justify-end">
                    {userRole === "landlord" ? (
                        <div className="col-span-1 flex gap-[3px] items-center">
                            <Image
                                className="h-[24px] w-[28px]"
                                src={AcceptButton}
                                alt="кнопка соглашения"
                            />
                            <Image
                                className="h-[24px] w-[28px]"
                                src={CloseButton}
                                alt="кнопка отмены"
                            />
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ViewBookingMobileAccordeonItem;
