import { emptyStar } from "@/images/icons/stars";
import Image from "next/image";

const StarIconEmpty = (props) => {
  return (
    <Image
      src={emptyStar}
      alt="пустой советсткий союз"
      {...props}
      className="lg:w-[22px]"
    />
  );
};

export default StarIconEmpty;
