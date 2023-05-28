"use client";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import ActualBookingItem from "@/components/Profile/ActualBooking/ActualBookingItem/ActualBookingItem";
import { userRed } from "@/images/icons/userRed/userRed";
import Link from "next/link";
import links from "@/utils/links";
import useFindUser from "@/hooks/useFindUser";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import ActualBookingList from "./ActualBookingList/ActualBookingList";

const ActualBooking = () => {
    const user = useFindUser();

    if (!user) {
        return null;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [places, setPlaces] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        api.getUserPlaces(user.id).then((res) => setPlaces(res.places));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="bg-[#0C1622] min-h-[98vh] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover relative px-[16px] py-[16px] w-full">
            <div className="h-[90vh] bg-[#EBF8FF] rounded-[6px] py-[16px]">
                <div className="mt-[16px]">
                    {places.map((place) => {
                        return (
                            place.books.length > 0 &&
                            place.status === "resolved" && 
                            place.archived === false && 
                            <ActualBookingList {...place} image={userRed}/>
                        )
                    })}
                    {/* {data.map((item) => (
                        <ActualBookingItem key={item.id} {...item} />
                    ))} */}
                </div>
            </div>
            <div>
                <Link
                    className="text-sm font-medium mt-[16px] h-[40px] text-center flex-center bg-transparent border-[#E74362] border-[1px] text-[#E74362] rounded-[6px]"
                    href={links.yourPlaces}
                >
                    Ваши площадки
                </Link>
            </div>
        </section>
    );
};

export default ActualBooking;
