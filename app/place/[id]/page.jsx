import Image from "next/image";
import { bgPlace } from "@/images/Place";
import PlaceCommonInfo from "@/components/Place/PlaceCommonInfo/PlaceCommonInfo";
import PlaceReviewsnTime from "@/components/Place/PlaceReviewsnTime/PlaceReviewsnTime";
import PlacePriceNOrder from "@/components/Place/PlacePriceNOrder/PlacePriceNOrder";
import PlaceDescription from "@/components/Place/PlaceDescription/PlaceDescription";
import PlaceUserOwner from "@/components/Place/PlaceUserOwner/PlaceUserOwner";

const Place = () => {
  return (
    <main>
      <section className="bg-[#EBF8FF] rounded-xl flex-center-col">
        <Image src={bgPlace} alt="Artplay" className="w-full" />
        <div className="w-[91%] my-0 mx-auto">
          <PlaceCommonInfo />
          <PlaceReviewsnTime />
          <PlacePriceNOrder />
          <PlaceDescription />
          <PlaceUserOwner />
        </div>
      </section>
    </main>
  );
};

export default Place;
