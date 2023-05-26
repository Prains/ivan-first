import Link from "next/link";
import LandLordPlaceMobile from "./LandLordPlaceMobile/LandLordPlaceMobile";
import links from "@/utils/links";

const LandLordPlacesMobile = () => {
  return ( 
    <section className="bg-[#0C1622] flex-center-col mx-4 my-5
            lg:hidden">
                <div className="flex-center flex-wrap gap-[11px] mb-[35px]
                lg:flex-col">
                    <LandLordPlaceMobile isModerated={true} />
                    <LandLordPlaceMobile isModerated={false} />
                    <LandLordPlaceMobile isModerated={true} />
                </div>
                <div className="lg:order-first">
                    <Link
                        className="flex-center w-[288px] h-[32px] text-[#E74362] border-[#E74362] border-solid border-[1px] rounded-md"
                        href={links.placesArchive}
                    >
                        Архив площадок
                    </Link>
                </div>
            </section>
   );
}
 
export default LandLordPlacesMobile;