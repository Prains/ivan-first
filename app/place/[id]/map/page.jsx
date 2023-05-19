import Footer from "@/components/Footer/Footer";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";

const PlaceMap = () => {
  return (
    <main>
      <section>
        <div className="relative">
          <ArrowBack className="top-1 left-1" />
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae0b0022645a6c40fee5c51227945eb7b699e63822f7a54c42730b1f07e2b47a3&amp;source=constructor"
            width="100%"
            height="450px"
            frameborder="0"
          ></iframe>
        </div>
        <article className="flex-center bg-[#EBF8FF] rounded-xl z-10 relative mt-[-7px] w-full">
          <p className="my-5">ул. Нижняя Сыромятническая, д. 10</p>
        </article>
      </section>
    </main>
  );
};

export default PlaceMap;
