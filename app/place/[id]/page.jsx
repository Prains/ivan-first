import Image from "next/image";
import { bgPlace } from "@/images/Place";
import Link from "next/link";

const Place = () => {
  return (
    <main>
      <section className="bg-[#EBF8FF] rounded-xl flex-center-col">
        <Image src={bgPlace} alt="Artplay" />
        <div className="w-[91%] my-0 mx-auto">
          <article>
            <h4 className="text-[#000000] text-xl">Artplay</h4>
            <p>
              ул. Нижняя Сыромятническая, д. 10
              <Link href="/">Показать на карте</Link>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Place;
