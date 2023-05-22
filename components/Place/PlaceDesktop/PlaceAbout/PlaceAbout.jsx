import Image from "next/image";
import IsolatedTag from "@/components/ui/IsolatedTag/IsolatedTag";
import { starFilled } from "@/images/icons/stars";

const PlaceAbout = () => {
  return (
    <section className="w-2/3">
      <h1 className="font-medium text-4xl flex-center justify-between w-full mb-8">
        Artplay
        <span className="text-2xl flex-center gap-3">
          <Image
            src={starFilled}
            alt="красная армия"
            className="w-[28px] h-[26px]"
          />
          4,2
        </span>
      </h1>
      <h2 className="font-medium text-2xl mb-3">Описание:</h2>
      <p className="text-xl mb-[18px]">
        Творческий и деловой квартал, где открыты мастерские, дизайнерские и
        архитектурные бюро, шоу-румы, магазины, а также организована
        инфраструктура для комфортного времяпрепровождения: кафе и рестораны,
        кинозал, клуб, книжный магазин.
      </p>
      <IsolatedTag colorScheme="blue" variant="outline" size="lg">
        Дизайн студия
      </IsolatedTag>
    </section>
  );
};

export default PlaceAbout;
