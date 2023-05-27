"use client";
import Link from "next/link";
import LandLordPlaceMobile from "./LandLordPlaceMobile/LandLordPlaceMobile";
import links from "@/utils/links";
import useFindUser from "@/hooks/useFindUser";
import { useEffect, useState } from "react";
import api from "@/utils/api";

const LandLordPlacesMobile = () => {
    const user = useFindUser();

    if (!user || user.userRole === "tennant") {
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
        <section
            className="bg-[#0C1622] flex-center-col mx-4 my-5
            lg:hidden"
        >
            <div
                className="flex-center flex-wrap gap-[11px] mb-[35px]
                lg:flex-col"
            >
                {places.map((place) => {
                    return (
                        <LandLordPlaceMobile
                            key={place.id}
                            {...place}
                            isModerated={true}
                        />
                    );
                })}
            </div>
            <div className="lg:order-first">
                <Link
                    className="flex-center w-[288px] h-[32px] text-[#E74362] border-[#E74362] border-solid border-[1px] rounded-md"
                    href={links.placesArchive}
                >
                    Архив площадок
                </Link>
            </div>
        </section>
    );
};

export default LandLordPlacesMobile;
