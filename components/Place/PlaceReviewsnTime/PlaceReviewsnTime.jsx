import Image from "next/image";
import Link from "next/link";
import { starFilled, emptyStar } from "@/images/icons/stars";

const PlaceReviewsnTime = () => {
  return (
    <article className="flex-center items-end justify-between mb-4">
      <div className="flex-center gap-3">
        <div className="flex-center items-center gap-[2px]">
          <Image src={starFilled} alt="красная звездочка" />
          <Image src={starFilled} alt="красная звездочка" />
          <Image src={starFilled} alt="красная звездочка" />
          <Image src={starFilled} alt="красная звездочка" />
          <Image src={starFilled} alt="красная звездочка" />
        </div>
        <Link href="/" className="underline text-[#000000]">
          Отзывы
        </Link>
      </div>
      <p className="flex-center-col items-end text-[#464646]">
        пн-пт <span>10:00-22:00</span>
      </p>
    </article>
  );
};

export default PlaceReviewsnTime;
