import { userIcon } from "@/images/icons";
import Image from "next/image";

const PlaceUserOwner = () => {
  return (
    <article className="flex items-center justify-start gap-[10px] mb-5">
      <Image src={userIcon} alt="человечек в сером кружке" />
      <p className="flex-center-col items-start">
        Пользо
        <span>Пользователь</span>
      </p>
    </article>
  );
};

export default PlaceUserOwner;
