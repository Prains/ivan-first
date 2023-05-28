import Image from "next/image";
import Link from "next/link";
import { userRed } from "@/images/icons/userRed/userRed";

const BookingItem = ({ title, image, date, userRole, owner, book }) => {
    return (
        <Link href="/">
            <div className="w-full grid grid-cols-7 mt-[8px]">
                <div className="col-span-1 mr-[12px]">
                    {userRole === "landlord" ? (
                        <Image
                            className="h-[40px] object-contain rounded-[2px]"
                            src={userRed}
                            alt="картинка"
                        />
                    ) : (
                        <Image
                            className="h-[32px] object-cover rounded-[2px]"
                            src={image}
                            alt="картинка"
                        />
                    )}
                </div>
                <div className="col-span-5">
                    {userRole === "landlord" ? (
                        <>
                            <p className="overflow-hidden text-ellipsis text-black text-[14px] max-h-[36px] font-medium">
                                {owner.username}
                            </p>
                            <div className="flex gap-2">
                            <p className="text-[#E74362] text-[14px] font-medium flex-center">
                                {book.startDate}
                            </p>
                            <span className="text-sm font-medium text-[#E74362] flex-center">{book.time}</span>
                            </div>

                        </>
                    ) : (
                        <>
                            <p className="overflow-hidden text-ellipsis text-black text-[14px] max-h-[36px] font-medium">
                                {title}
                            </p>
                            <p className="text-[#E74362] text-[14px] font-medium">
                                <span>{date}</span>
                            </p>
                        </>
                    )}
                </div>
                <div className="col-span-1 flex justify-end"></div>
            </div>
        </Link>
    );
};

export default BookingItem;
