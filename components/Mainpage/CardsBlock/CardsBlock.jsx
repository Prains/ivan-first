"use client"
import { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import api from "@/utils/api";

const CardsBlock = () => {

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    api.getAllPlaces().then((res) => {
      setPlaces(res.data)
    })
  }, [])

  return (
    <section className="flex-center gap-[24px] md:gap-[54px] flex-wrap w-full py-[40px] bg-[#0C1622]">
      {
        places.map((place) => {
          return (
            <CardItem key={place.id} {...place} />
          )
        })
      }
      {/* <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem /> */}
    </section>
  );
};

export default CardsBlock;
