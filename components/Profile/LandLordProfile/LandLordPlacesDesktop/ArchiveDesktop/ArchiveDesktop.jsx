"use client";
import ArchiveDesktopPlace from "./ArchiveDesktopPlace/ArchiveDesktopPlace";
import LandLordControlPanelDesktop from "../LandLordControlPanelDesktop/LandLordControlPanelDesktop";
import useFindUser from "@/hooks/useFindUser";
import { useState, useEffect } from "react";
import api from "@/utils/api";

const ArchiveDesktop = () => {
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
        <section
            className="bg-[#0C1622] flex-row justify-around xl:justify-between xl:mx-[100px] mt-[45px] mb-[190px] hidden
    lg:flex"
        >
            <LandLordControlPanelDesktop user={user} />
            <div>
                <h1 className="text-4xl font-medium self-start mb-5">
                    Архив площадок
                </h1>
                <div className="flex-center-col justify-between gap-[24px] max-h-[800px] mb-[35px] overflow-y-scroll">
                    {places.map((place) => {
                        return (
                            place.archived === true && (
                                <ArchiveDesktopPlace
                                    key={place.id}
                                    {...place}
                                />
                            )
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ArchiveDesktop;
