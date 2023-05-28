import Image from "next/image";
import Link from "next/link";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";

const ArchiveBookingMobileItem = ({ book, places, userRole }) => {
    return (
        <>
            <div className="md:w-full grid grid-cols-5 mt-[12px]">
                <div className="col-span-1 mr-[12px]">
                    <Image
                        className="h-[40px] object-contain rounded-[2px]"
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
                <div className="col-span-3">
                    <p className="overflow-hidden text-ellipsis text-black text-[14px] max-h-[36px] font-medium">
                        {places[0].title}
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
            </div>
            <div className="w-[100%]">
                <IsolatedButton className="w-[100%] h-[24px] text-white bg-[#E74362] text-[14px]">
                    Оставить отзыв
                </IsolatedButton>
            </div>
        </>
    );
};

export default ArchiveBookingMobileItem;
