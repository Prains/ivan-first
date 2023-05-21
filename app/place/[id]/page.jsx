import Image from "next/image";
import { bgPlace } from "@/images/Place";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";
import PlaceMobile from "@/components/Place/PlaceMobile/PlaceMobile";
import PlaceDesktop from "@/components/Place/PlaceDesktop/PlaceDesktop";

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
        <PlaceMobile />
        <PlaceDesktop />
      </section>
    </main>
  );
};

export default Place;
