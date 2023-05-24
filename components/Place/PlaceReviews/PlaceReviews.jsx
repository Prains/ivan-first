import Image from "next/image";
import { bgPlace } from "@/images/Place";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";
import NameAndRating from "./NameAndRating/NameAndRating";
import { StarIconFilled, StarIconEmpty } from "@/components/ui/Icons";
import Review from "./Review/Review";

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
    <li className="relative w-full h-px">
      <div className="w-2/3 border-[2px] border-[#464646] absolute top-0 h-px"></div>
      <div className="w-full border-[2px] border-[#8E8E8E] h-px"></div>
    </li>
  );

  const ratingNumbers = Array(5).fill(
    <li className="text-[#8E8E8E] text-sm lg:text-2xl">1</li>
  );

  return (
    <>
      <article className="relative lg:w-[86%] my-0 mx-auto">
        <ArrowBack className="top-1 left-1 lg:hidden" />
        <Image src={bgPlace} alt="123" className="w-full" />
      </article>
      <section className="bg-[#EBF8FF] rounded-b-xl lg:bg-transparent lg:text-white lg:mt-[38px]">
        <div className="w-[91%] lg:w-[86%] my-0 mx-auto pt-2 pb-4">
          <h1 className="text-xl font-medium mb-5 lg:text-4xl">Artplay</h1>
          <div className="lg:block max-w-[833px] my-0 mx-auto lg:mb-14">
            <div className="lg:flex-center gap-[102px] lg:mb-[102px]">
              <NameAndRating />
              <article className="flex-center justify-between mb-6 lg:max-w-[538px] lg:w-full">
                <ul className="flex-center-col gap-2 lg:gap-3">{rows}</ul>
                <ul className="flex-center-col gap-[22px] w-2/3 lg:gap-[32px]">
                  {lines}
                </ul>
                <ul className="flex-center-col gap-1 lg:gap-[2px]">
                  {ratingNumbers}
                </ul>
              </article>
            </div>
            <Review />
            <Review />
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaceReviews;
