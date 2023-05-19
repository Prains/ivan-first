import Image from "next/image";
import { bgPlace } from "@/images/Place";
import Link from "next/link";

const Place = () => {
  return (
    <main>
      <section className="bg-[#EBF8FF] rounded-xl flex-center-col">
        <Image src={bgPlace} alt="Artplay" className="w-full" />
        <div className="w-[91%] my-0 mx-auto">
          <article>
            <h4 className="text-[#000000] text-xl mb-2">Artplay</h4>
            <p className="flex-center-col items-start gap-1 mb-3 text-[#535353]">
              ул. Нижняя Сыромятническая, д. 10
              <Link href="/" className="underline text-[#4F4F4F]">
                Показать на карте
              </Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Place;
