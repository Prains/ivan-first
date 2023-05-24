import { Logo } from "@/components/ui/Icons";
import FooterLink from "../FooterLink/FooterLink";
import VkIcon from "@/components/ui/Icons/vkIcon/vkIcon";
import { TgIcon } from "@/components/ui/Icons";

const FooterDesktop = () => {
  return (
    <nav className="hidden lg:flex items-center justify-between w-[86%] py-12 my-0 mx-auto">
      <Logo />
      <div className="flex-center gap-32">
        <ul className="flex-center-col items-start gap-6">
          <li>
            <FooterLink href="/">Главная</FooterLink>
          </li>
          <li>
            <FooterLink href="/">О нас</FooterLink>
          </li>
        </ul>
        <ul className="flex-center-col gap-6">
          <li>
            <FooterLink href="/">Контакты</FooterLink>
          </li>
          <ul className="flex-center gap-4">
            <li>
              <VkIcon />
            </li>
            <li>
              <TgIcon />
            </li>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default FooterDesktop;
