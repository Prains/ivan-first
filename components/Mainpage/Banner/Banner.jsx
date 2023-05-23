import BannerSvg from "../BannerSvg/BannerSvg";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import IsolatedBannerInput from "@/components/ui/IsolatedBannerInput/IsolatedBannerInput";

const Banner = () => {
  return (
    <section className="items-center justify-center relative bg-[#0C1622] bg-cover bg-no-repeat w-full h-[480px] md:flex hidden">
      <div className="flex h-full justify-center md:gap-12 lg:gap-24 items-center md:max-w-[100%] lg:max-w-[90%] mx-auto relative">
        <BannerSvg className="lg:w-[450px] lg:h-[450px] md:w-[400px] h-[400px] absolute md:top-7 lg:top-0 top-0 z-0" />
        <div className="lg:left-36 md:left-28 lg:top-40 md:top-40 flex flex-col items-center gap-6 ">
          <IsolatedBannerInput
            variant={"outline"}
            colorScheme={"green"}
            placeholder={"Поиск"}
            className=" w-[272px] text-[#D9D9D9] border-gray-200 h-[40px] pr-[40px]"
          />
          <IsolatedButton className="text-[14px] w-[160px] h-[32px] text-[#1A202C]">
            Поиск
          </IsolatedButton>
        </div>
        <h1 className=" w-[439px] lg:top-40 md:top-40 md:right-0 lg:right-0 text-[#FFFFFF] md:text-[28px] lg:text-[32px] font-bold leading-[40px] z-5">
          АГЕНСТВО АРЕНДЫ <br /> КРЕАТИВНЫХ ИНДУСТРИЙ{" "}
          <span className="text-[#E74362] text-[38px] w-[13px] h-[13px]">
            .
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Banner;
