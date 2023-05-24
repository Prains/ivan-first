import Image from "next/image";
import { starFilled } from "@/images/icons/stars";

const StarIconFilled = (props) => {
  return (
    <Image
      src={starFilled}
      alt="пустой советсткий союз"
      {...props}
      className="lg:w-[22px]"
    />
  );
};

export default StarIconFilled;
