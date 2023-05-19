"use client";
import { Button } from "@chakra-ui/react";

const PlacePriceNOrder = () => {
  return (
    <>
      <p className="text-[18px] mb-3 text-[#000000] font-medium">18000 р/час</p>
      <Button className="mb-3 mx-auto w-full h-[40px]" colorScheme="red">
        Забронировать
      </Button>
    </>
  );
};

export default PlacePriceNOrder;
