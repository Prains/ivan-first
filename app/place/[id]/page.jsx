import Image from "next/image";
import { bgPlace } from "@/images/Place";
import PlaceCommonInfo from "@/components/Place/PlaceCommonInfo/PlaceCommonInfo";
import PlaceReviewsnTime from "@/components/Place/PlaceReviewsnTime/PlaceReviewsnTime";
import PlacePriceNOrder from "@/components/Place/PlacePriceNOrder/PlacePriceNOrder";
import PlaceDescription from "@/components/Place/PlaceDescription/PlaceDescription";
import PlaceUserOwner from "@/components/Place/PlaceUserOwner/PlaceUserOwner";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";
import { starFilled } from "@/images/icons/stars";

const Place = () => {
  return (
    <main className="lg:mt-11 text-[#000] lg:text-white">
      <section className="bg-[#EBF8FF] lg:bg-transparent rounded-xl flex-center-col z-10 relative">
        <div className="relative w-full lg:w-[86%]">
          <ArrowBack className="top-1 left-1 lg:hidden" />
          <Image
            src={bgPlace}
            alt="Artplay"
            className="w-full lg:max-h-[504px]"
          />
        </div>
        <div className="w-[91%] my-0 mx-auto lg:hidden">
          <PlaceCommonInfo />
          <PlaceReviewsnTime />
          <PlacePriceNOrder />
          <PlaceDescription />
          <PlaceUserOwner />
        </div>
        <div className="w-[86%] flex-center gap-9">
          <article className="w-2/3">
            <h1 className="font-medium text-4xl flex-center justify-between w-full">
              Artplay
              <span className="text-2xl flex-center gap-3">
                <Image
                  src={starFilled}
                  alt="красная армия"
                  className="w-[28px] h-[26px]"
                />
                4,2
              </span>
            </h1>
          </article>
          <article className="w-1/3"></article>
        </div>
      </section>
    </main>
  );
};

export default Place;
