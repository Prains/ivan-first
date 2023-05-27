"use client"
import ArchiveMobilePlace from "./ArchiveMobilePlace/ArchiveMobilePlace";
import useFindUser from "@/hooks/useFindUser";
import { useState, useEffect } from "react";
import api from "@/utils/api";

const ArchiveMobile = () => {
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
    <section className="bg-[#0C1622] flex-col mx-4 my-5 min-h-screen
    lg:hidden">
    <div className="flex-center flex-wrap gap-[11px] mb-[35px]">
    {places.map((place) => {
                        return (
                            place.archived === true && (
                                <ArchiveMobilePlace
                                    key={place.id}
                                    {...place}
                                />
                            )
                        );
                    })}
    </div>
</section>
   );
}
 
export default ArchiveMobile;