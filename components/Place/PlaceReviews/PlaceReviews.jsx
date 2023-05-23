import Image from "next/image";
import { bgPlace } from "@/images/Place";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";
import NameAndRating from "./NameAndRating/NameAndRating";
import { StarIconFilled, StarIconEmpty } from "@/components/ui/Icons";

const PlaceReviews = () => {
  function createRow(number) {
    const filledStars = Array(number).fill(<StarIconFilled />);
    const emptyStars = Array(5 - number).fill(<StarIconEmpty />);
    return (
      <li className="flex-center gap-[2px]">
        {filledStars}
        {emptyStars}
      </li>
    );
  }

  const rows = Array.from({ length: 5 }, (_, index) =>
    createRow(index + 1)
  ).reverse();

  const lines = Array(5).fill(
    <li className="relative w-[190px] h-px">
      <div className="w-2/3 border-[2px] border-[#464646] absolute top-0 h-px"></div>
      <div className="w-full border-[2px] border-[#8E8E8E] h-px"></div>
    </li>
  );

  return (
    <>
      <article className="relative">
        <ArrowBack className="top-1 left-1" />
        <Image src={bgPlace} alt="123" className="w-full" />
      </article>
      <section className="bg-[#EBF8FF] rounded-b-xl">
        <div className="w-[91%] my-0 mx-auto pt-2 pb-4">
          <NameAndRating />
          <article className="flex-center gap-3">
            <ul className="flex-center-col gap-2">{rows}</ul>
            <ul className="flex-center-col gap-[22px]">{lines}</ul>
            <ul className="flex-center-col gap-1">
              <li className="text-[#8E8E8E] text-sm">1</li>
              <li className="text-[#8E8E8E] text-sm">1</li>
              <li className="text-[#8E8E8E] text-sm">1</li>
              <li className="text-[#8E8E8E] text-sm">1</li>
              <li className="text-[#8E8E8E] text-sm">1</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default PlaceReviews;
