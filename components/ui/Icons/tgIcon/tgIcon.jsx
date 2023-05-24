import Link from "next/link";
import Image from "next/image";
import { tg } from "@/images/icons";

const TgIcon = (props) => {
  return (
    <Link href="/" {...props}>
      <Image
        src={tg}
        alt="логотип социальной сети телеграмм"
        className="w-[24px]"
      />
    </Link>
  );
};

export default TgIcon;
