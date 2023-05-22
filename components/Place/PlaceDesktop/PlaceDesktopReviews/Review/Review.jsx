import Image from "next/image";
import { starFilled } from "@/images/icons/stars";

const Review = () => {
  return (
    <div className="max-w-[520px] flex-center-col items-start gap-[17px]">
      <p className="text-2xl font-medium">Елена С.</p>
      <div className="flex-center justify-start gap-[2px]">
        <Image src={starFilled} alt="советский союз" />
        <Image src={starFilled} alt="советский союз" />
        <Image src={starFilled} alt="советский союз" />
        <Image src={starFilled} alt="советский союз" />
        <Image src={starFilled} alt="советский союз" />
      </div>
      <p className="text-2xl max-h-[160px] text-ellipsis overflow-hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );
};

export default Review;
