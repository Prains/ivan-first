import Link from "next/link";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import PlaceUserOwner from "../../PlaceUserOwner/PlaceUserOwner";

const PlaceOrder = () => {
  return (
    <article className="w-1/3">
      <h3 className="font-medium mb-4 text-2xl ">Адрес:</h3>
      <div className="flex-center-col items-start gap-3">
        <p>ул. Нижняя Сыромятническая, д. 10</p>
        <Link className="underline" href="/">
          Показать на карте
        </Link>
        <p className="flex-center-col items-start">
          пн-пт<span>10:00-22:00</span>
        </p>
      </div>
      <p className="font-medium text-3xl my-4">18000 р/час</p>
      <Link href="/">
        <IsolatedButton colorScheme="red" className="w-[332px] h-[48px] mb-7">
          Забронировать
        </IsolatedButton>
      </Link>
      <PlaceUserOwner />
    </article>
  );
};

export default PlaceOrder;
