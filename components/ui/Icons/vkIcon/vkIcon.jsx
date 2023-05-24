import Link from "next/link";
import Image from "next/image";
import { vk } from "@/images/icons";

const VkIcon = (props) => {
  return (
    <Link href="/" {...props}>
      <Image
        src={vk}
        alt="логотип социальной сети вконтакте"
        className="w-[24px]"
      />
    </Link>
  );
};

export default VkIcon;
