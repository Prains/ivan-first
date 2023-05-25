import Image from "next/image";
import { userRed } from "@/images/icons/userRed/userRed";

const AccountDetails = ({ name, role }) => {
  return (
    <>
      <div className="flex justify-center mt-[32px]">
        <Image
          className="h-[64px] w-[64px]"
          src={userRed}
          alt="красный кружочек с иконкой пользователя внутри"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-medium text-[14px] text-white mt-[16px]">{name}</p>
        <p className="font-normal text-[14px] text-white mt-[12px] py-[2px] px-[6px] rounded-[8px] border-[1px] border-white">
          {role}
        </p>
      </div>
    </>
  );
};

export default AccountDetails;
