import Image from "next/image";
import FooterLink from "./FooterLink/FooterLink";
import { logo, vk, tg } from "@/images/icons";

const Footer = () => {
  return (
    <footer className="bg-[#0C1622] z-0 relative">
      <nav className="w-[91%] pt-[28px] pb-1 my-0 mx-auto flex items-start justify-between">
        <ul className="flex-center-col items-start">
          <FooterLink href={"/"}>Главная</FooterLink>
          <FooterLink href={"/"}>О нас</FooterLink>
          <Image src={logo} alt="ЗДЕС" />
        </ul>
        <ul className="flex-center-col items-start w-[135px]">
          <FooterLink href={"/"}>Контакты</FooterLink>
          <div className="flex-center gap-4 mt-[37px]">
            <Image src={vk} alt="vk" className="w-[22px]" />
            <Image src={tg} alt="tg" className="w-[22px]" />
          </div>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
