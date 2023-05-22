import Link from "next/link";

const PlaceCommonInfo = () => {
  return (
    <article className="mt-2">
      <h1 className="text-xl mb-2 font-medium">Artplay</h1>
      <p className="flex-center-col items-start gap-1 mb-3 text-[#535353] lg:text-inherit">
        ул. Нижняя Сыромятническая, д. 10
        <Link href="/place/1/map" className="underline text-[#4F4F4F] lg:text-inherit">
          Показать на карте
        </Link>
      </p>
    </article>
  );
};

export default PlaceCommonInfo;
