import Image from "next/image";
import Link from "next/link";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import {CloseButton} from "@/images/icons/CloseButton";
import {AcceptButton} from "@/images/icons/AcceptButton";
import api from "@/utils/api";

const ActualBookingItem = ({image, book, owner, id}) => {
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
        <div className="flex mx-[10px]">
            <Link href="/" className='w-full flex mt-[8px] mx-auto'>
                <div>
                    <Image className='h-[40px] object-contain rounded-[2px]' src={image} alt='картинка'/>
                </div>
                <div className="flex-col">
                    <p className='text-ellipsis text-black text-[14px] max-h-[36px] font-medium'>{owner.username}</p>
                    <p className='text-[#E74362] text-sm w-[150px] font-medium'><span>{book.startDate} {book.time}</span></p>
                </div>

            </Link>
            <div className='flex gap-[3px] items-center'>
                    <IsolatedButton onClick={handleAcceptBook} className='h-[24px] w-[28px] p-0'>
                    <Image src={AcceptButton} alt='кнопка соглашения' />
                    </IsolatedButton>
                    <IsolatedButton onClick={handleCancelBook} className='h-[24px] w-[28px] p-0'>
                    <Image className='h-[24px] w-[28px]' src={CloseButton} alt='кнопка отмены' />
                    </IsolatedButton>
                </div>
        </div>

    );
};

export default ActualBookingItem;