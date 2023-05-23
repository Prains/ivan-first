import FooterLink from "../FooterLink/FooterLink";
import Logo from "@/components/ui/Logo/Logo";
import VkIcon from "@/components/ui/vkIcon/vkIcon";
import TgIcon from "@/components/ui/tgIcon/tgIcon";

const FooterMobile = () => {
  return (
    <nav className="w-[91%] pt-[28px] pb-1 my-0 mx-auto flex items-start justify-between lg:hidden">
      <ul className="flex-center-col items-start">
        <FooterLink href={"/"}>Главная</FooterLink>
        <FooterLink href={"/"}>О нас</FooterLink>
        <Logo />
      </ul>
      <ul className="flex-center-col items-start w-[135px]">
        <FooterLink href={"/"}>Контакты</FooterLink>
        <div className="flex-center gap-4 mt-[37px]">
          <VkIcon />
          <TgIcon />
        </div>
      </ul>
    </nav>
  );
};

export default FooterMobile;
