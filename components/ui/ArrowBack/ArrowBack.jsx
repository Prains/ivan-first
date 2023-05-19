"use client";
import Image from "next/image";
import { whiteArrowLeft } from "@/images/icons";
import { useRouter } from "next/navigation";

const ArrowBack = ({ className }) => {
  const router = useRouter();

  return (
    <div
      className={`bg-[#0E1726]/75 w-[33px] h-[33px] flex-center rounded-md absolute ${className}`}
      onClick={() => {
        router.back();
      }}
    >
      <Image
        src={whiteArrowLeft}
        alt="Белая стрелочка налево внутри черного закругленного квадратика"
      />
    </div>
  );
};

export default ArrowBack;
