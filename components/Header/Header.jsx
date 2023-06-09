import Link from "next/link";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import IsolatedSearch from "@/components/ui/IsolatedSearch/IsolatedSearch";
import IsolatedPopOver from "@/components/ui/IsolatedPopOver/IsolatedPopOver";
import HeaderModal from "@/components/Header/MobileFilters/HeaderModal/HeaderModal";
import links from "@/utils/links";
import { Logo } from "../ui/Icons";

const Header = () => {
  return (
    <header className="bg-[#0E1726] py-[15px] flex items-center z-30">
      <div className="w-[91%] bg-[#0E1726] mx-auto flex justify-between items-center flex-col md:flex-row">
        <div className="md:w-max flex items-center justify-between mb-2">
          <div
            href={links.mainpage}
            className="w-full gap-12 flex items-center justify-between"
          >
            <Logo />
            <Link href={links.login}>
              <IsolatedButton
                className={
                  "lg:font-[20px] h-[32px] w-[80px] md:hidden text-[#1A202C]"
                }
              >
                Войти
              </IsolatedButton>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 justify-between">
          <IsolatedSearch
            variant={"outline"}
            colorScheme={"green"}
            placeholder={"Поиск"}
            className={
              "lg:w-[264px] md:w-[222px] w-[200px] text-[#D9D9D9] border-gray-200 h-[32px] md:h-[40px] pr-[40px]"
            }
          />
          <IsolatedInput
            variant={"outline"}
            colorScheme={"green"}
            placeholder={""}
            className={
              "lg:w-[184px] lg:block text-[#D9D9D9] border-gray-200 h-[32px] md:h-[40px] hidden"
            }
          />
          <IsolatedPopOver className="hidden md:block md:mr-0 mr-[0px] md:scale-125 z-40 cursor-pointer" />
          <HeaderModal className="block md:hidden" />
        </div>
        <div className="flex gap-2">
          <Link href={links.login}>
            <IsolatedButton
              className={
                "lg: font-[20px] h-[32px] w-[80px] hidden md:block text-[#1A202C]"
              }
            >
              Войти
            </IsolatedButton>
          </Link>
          <Link href={links.register}>
            <IsolatedButton
              className={
                "lg: font-[20px] h-[32px] w-[140px] md:block hidden text-[#1A202C]"
              }
            >
              Регистрация
            </IsolatedButton>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
