"use client"
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import ViewBookingMobileAccordeon from "@/components/Profile/ViewBooking/ViewBookingMobile/ViewBookingMobileAccordeon/ViewBookingMobileAccordeon";
import useFindUser from "@/hooks/useFindUser";
import Link from "next/link";
import links from "@/utils/links";
import { useEffect, useState } from "react";
import api from "@/utils/api";

const ViewBookingMobile = () => {
    const user = useFindUser();

    if (!user) {
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [places, setPlaces] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [books, setBooks] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        user.userRole === "landlord"
            ? api.getUserPlaces(user.id).then((res) => setPlaces(res.places))
            : api.getUserBooks(user.id).then((res) => setBooks(res.books));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="block lg:hidden bg-[#0C1622] min-h-[98vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px] w-full">
            {user.userRole === "landlord" ? (
                <>
                    <div className="bg-[#EBF8FF] mt-[18px] rounded-[6px]">
                        <h3 className="text-black pt-[11px] font-medium text-[20px] px-[16px]">
                            Artplay
                        </h3>
                        <ViewBookingMobileAccordeon
                            isLandlord={true}
                            landlord={landlord}
                            data={activeArr}
                            titleAccordeon={"Заявки на бронь"}
                        />
                        <ViewBookingMobileAccordeon
                            data={successArr}
                            titleAccordeon={"Подтвержденная бронь"}
                        />
                        <ViewBookingMobileAccordeon
                            data={pendingArr}
                            titleAccordeon={"Отклонённая бронь"}
                        />
                    </div>
                    <div>
                        <IsolatedButton className="w-full mt-[20px] text-[#E74362] text-[14px] bg-transparent border-[#E74362] border-2 rounded-[6px]">
                            Архив брони
                        </IsolatedButton>
                    </div>
                </>
            ) : (
                <>
                    <div className="bg-[#EBF8FF] mt-[18px]">
                        <ViewBookingMobileAccordeon status="pending" title="Заявки на бронь" userRole={user.userRole} books={books} />
                        <ViewBookingMobileAccordeon status="accepted" title="Подтвержденная бронь" userRole={user.userRole} books={books} />
                    </div>
                    <div>
                    <Link
                            className="text-sm font-semibold mt-[16px] h-[32px] text-center flex-center bg-[#E74362] rounded-[6px]"
                            href={links.booksArchive}
                        >
                            История брони
                        </Link>
                    </div>
                </>
            )}
        </section>
    );
};

export default ViewBookingMobile;
