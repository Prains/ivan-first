import Image from "next/image";
import { userRed } from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";

const AccountDetails = ({ name, role }) => {
  return (
    <div className="flex-center-col">
      <Image
        className="h-[64px] w-[64px] mb-3"
        src={userRed}
        alt="красный кружочек с иконкой пользователя внутри"
      />
      <div className="flex-center-col gap-3">
        <p className="font-medium text-[14px] text-white ">{name}</p>
        <p className="font-normal text-[14px] text-white py-[2px] px-[6px] rounded-[8px] border-[1px] border-white">
          {role}
        </p>
      </div>
      <div className="hidden lg:flex items-center justify-center flex-col w-full gap-4 mt-6">
        <IsolatedButton className="w-full" colorScheme="red">
          Добавить новую площадку
        </IsolatedButton>
        <IsolatedButton className="w-full" variant="outline">
          Ваши площадки
        </IsolatedButton>
        <IsolatedButton className="w-full" variant="outline">
          Просмотр брони
        </IsolatedButton>
        <IsolatedButton className="w-full" variant="outline">
          Настройки профиля
        </IsolatedButton>
      </div>
    </div>
  );
};

export default AccountDetails;
