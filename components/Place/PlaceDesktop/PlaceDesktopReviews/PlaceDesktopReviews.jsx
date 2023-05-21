import Link from "next/link";
import Review from "./Review/Review";

const PlaceDesktopReviews = () => {
  return (
    <section className="mb-[271px]">
      <article className="flex-center justify-between mb-12">
        <h5 className="text-3xl font-medium">Отзывы:</h5>
        <Link href="/" className="underline text-2xl">
          Смотреть все отзывы
        </Link>
      </article>
      <article className="flex-center justify-between gap-12">
        <Review />
        <Review />
      </article>
    </section>
  );
};

export default PlaceDesktopReviews;
