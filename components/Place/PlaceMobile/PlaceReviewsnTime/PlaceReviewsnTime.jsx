import Link from "next/link";
import { StarIconFilled } from "@/components/ui/Icons";

const PlaceReviewsnTime = () => {
  return (
    <article className="flex-center items-end justify-between mb-4">
      <div className="flex-center gap-3">
        <div className="flex-center items-center gap-[2px]">
          <StarIconFilled />
          <StarIconFilled />
          <StarIconFilled />
          <StarIconFilled />
          <StarIconFilled />
        </div>
        <Link href="/" className="underline lg:hidden">
          Отзывы
        </Link>
      </div>
      <p className="flex-center-col items-end text-[#464646] lg:text-inherit">
        пн-пт <span>10:00-22:00</span>
      </p>
    </article>
  );
};

export default PlaceReviewsnTime;
