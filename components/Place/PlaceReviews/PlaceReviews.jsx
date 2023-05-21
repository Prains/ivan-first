import Image from "next/image";
import { bgPlace } from "@/images/Place";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";
import NameAndRating from "./NameAndRating/NameAndRating";

const PlaceReviews = () => {
  return (
    <>
      <article className="relative">
        <ArrowBack className="top-1 left-1" />
        <Image src={bgPlace} alt="123" className="w-full" />
      </article>
      <section className="bg-[#EBF8FF] rounded-b-xl">
        <div className="w-[91%] my-0 mx-auto pt-2 pb-4">
          <NameAndRating />
          <article>
            <ul>
                <li></li>
            </ul>
            <ul>
                <li></li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default PlaceReviews;
