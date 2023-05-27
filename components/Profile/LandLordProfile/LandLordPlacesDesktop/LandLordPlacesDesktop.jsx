"use client";
import LandLordControlPanelDesktop from "./LandLordControlPanelDesktop/LandLordControlPanelDesktop";
import LandLordPlaceDesktop from "./LandLordPlaceDesktop/LandLordPlaceDesktop";
import useFindUser from "@/hooks/useFindUser";
import { useEffect, useState } from "react";
import api from "@/utils/api";

const LandLordPlacesDesktop = () => {
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
            className="bg-[#0C1622] flex-row justify-around xl:justify-between xl:mx-[100px] mt-[45px] mb-[190px] hidden
                lg:flex"
        >
            <LandLordControlPanelDesktop user={user} />

            <div>
                <h1 className="text-4xl font-medium self-start mb-5">
                    Ваши площадки
                </h1>
                <div className="flex-center-col justify-between gap-[24px] max-h-[800px] mb-[35px] overflow-y-scroll">
                    {places.map((place) => {
                        return (
                            <LandLordPlaceDesktop
                                key={place.id}
                                {...place}
                                isModerated={true}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LandLordPlacesDesktop;
