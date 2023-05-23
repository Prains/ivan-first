import { starFilled } from "@/images/icons/stars";
import Image from "next/image";

const NameAndRating = () => {
  return (
    <>
      <h1 className="text-xl font-medium mb-5">Artplay</h1>
      <div className="flex-center justify-start gap-4 mb-4">
        <p className="text-[40px] font-medium">4,0</p>
        <div className="flex-center-col items-start gap-[2px]">
          <div className="flex-center gap-px">
            <Image src={starFilled} alt="123" />
            <Image src={starFilled} alt="123" />
            <Image src={starFilled} alt="123" />
            <Image src={starFilled} alt="123" />
            <Image src={starFilled} alt="123" />
          </div>
          <p>на основании 2 оценок</p>
        </div>
      </div>
    </>
  );
};

export default NameAndRating;