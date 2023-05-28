import { cardImage } from "@/images/Main";
import Link from "next/link";
import { yellowStarFill } from "@/images/icons/yellowStarIcon";
import Image from "next/image";

const CardItem = ({ attributes }) => {
  return (
    <Link
      className="flex justify-center lg:w-[334px] md:h-[334px]"
      href="/place/1"
    >
      <div className="lg:w-[334px] md:w-[290px]  lg:bg-[#17283F] md:bg-[#17283F] bg-[#EBF8FF] rounded-[6px] relative">
        <div
          style={{ backgroundImage: `url(http://89.232.167.133:1337${attributes.photos.data[0].attributes.url})` }}
          className="relative md:w-[290px]  lg:w-full h-[163px] bg-cover bg-no-repeat"
        >
          <div className="absolute right-[8px] bottom-[8px] w-[80px] h-[18px] rounded-[12px] bg-black/60 flex-center items-center gap-[2px]">
            <Image src={yellowStarFill} alt="желтая звездочка" />
            <Image src={yellowStarFill} alt="желтая звездочка" />
            <Image src={yellowStarFill} alt="желтая звездочка" />
            <Image src={yellowStarFill} alt="желтая звездочка" />
            <Image src={yellowStarFill} alt="желтая звездочка" />
          </div>
        </div>
        <div className="px-4 py-2 w-full ">
          <h3 className="lg: text-[16px] md:text-[#FFFFFF] lg:text-[#FFFFFF] text-black font-medium mt-2">
            {attributes.title}
          </h3>
          <h3 className="text-[14px] mt-[4px] md:mt-0 block max-w-[264px] max-h-[40px] truncate md:hidden text-black font-normal">
            {attributes.description}
          </h3>
          <p className="hidden md:block lg: text-[14px] md:text-[#FFFFFF] lg:text-[#FFFFFF] text-black font-normal mt-1 whitespace-normal h-[64px] truncate">
          {attributes.description}
          </p>
          <div className="mt-2 md:block flex gap-6 md:gap-0 justify-between items-center ">
            <p className="text-[10px] lg:text-[12px] lg:text-[#CECECE] md:text-[#CECECE] text-[#464646] font-normal">
              {attributes.adress}
            </p>
            <div className="md:gap-2 md:mt-1 flex gap-2">
              <p className="lg: text-[12px] md:block lg:text-[#CECECE] md:text-[#CECECE] text-[#464646] flex flex-col font-normal items-center leading-[10px]">
                <span>пн</span>
                <span>-</span>
                <span>вс</span>
              </p>
              <p className="lg: text-[12px] md:block lg:text-[#CECECE] md:text-[#CECECE] text-[#464646] flex flex-col font-normal items-center leading-[10px]">
                <span>10:00</span>
                <span>–</span>
                <span>21:00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
