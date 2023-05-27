"use client";
import ArchiveBookingMobileItem from "@/components/Profile/ArchiveBooking/ArchiveBookingMobileItem/ArchiveBookingMobileItem";
import IsolatedAccordeonLandLord from "@/components/ui/IsolatedAccordeonLandLord/IsolatedAccordeonLandLord";
import useFindUser from "@/hooks/useFindUser";
import Link from "next/link";
import links from "@/utils/links";
import { useEffect, useState } from "react";
import api from "@/utils/api";

const ArchiveBookingMobile = () => {
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
                    <IsolatedAccordeonLandLord
                        isAccept={true}
                        isActive={false}
                        isPending={false}
                        data={data}
                        titleAccordeon={"Artplay"}
                    />
                    <IsolatedAccordeonLandLord
                        isAccept={false}
                        isActive={true}
                        isPending={true}
                        data={data}
                        titleAccordeon={"Artplay(2)"}
                    />
                </>
            ) : (
                <>
                    <div className="py-[14px] px-[12px] bg-[#EBF8FF] mt-[18px] rounded-[6px] pb-[60px]">
                        {books.map((book) => {
                            return (
                                book.book.status === "resolved" && (
                                    <ArchiveBookingMobileItem
                                        key={book.id}
                                        {...book}
                                        userRole={user.userRole}
                                    />
                                )
                            );
                        })}
                    </div>
                </>
            )}
        </section>
    );
};

export default ArchiveBookingMobile;
