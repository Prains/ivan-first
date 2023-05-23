import Image from "next/image";
import Link from "next/link";
import { logo, logoDesktop } from "@/images/logo";

const Logo = (props) => {
  return (
    <Link href="/" {...props}>
      <Image src={logo} alt="логотип ЗДЕСЬ" className="lg:hidden" />
      <Image
        src={logoDesktop}
        alt="логотип ЗДЕСЬ"
        className="hidden lg:block"
      />
    </Link>
  );
};

export default Logo;
