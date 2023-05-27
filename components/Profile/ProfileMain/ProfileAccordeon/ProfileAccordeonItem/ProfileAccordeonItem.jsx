import React from "react";
import Image from "next/image";
import { userRed } from "@/images/icons/userRed/userRed";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { AcceptButtonDesktop } from "@/images/icons/AcceptButtonDesktop";
import { RedCloseIcon } from "@/images/icons/RedCloseIcon";
import { bgPlace } from "@/images/Place";

const ProfileAccordeonItem = ({ landlord }) => {
  return (
    <div>
      <div className="w-[100%] bg-[#17283F] rounded-[12px] mt-[16px] flex items-center justify-between px-[16px] py-[12px]">
        <div className="flex items-center gap-[12px]">
          <div>
            {landlord ? (
              <Image src={userRed} alt="фото" />
            ) : (
              <Image
                src={bgPlace}
                alt="photo"
                className="w-[75px] h-[75px] object-cover"
              />
            )}
          </div>
          <div>
            <p className="text-[20px] text-white font-medium">
              Мария Булагвоковофы
            </p>
            {landlord ? (
              <p className="text-[20px] text-white font-medium">Artplay</p>
            ) : (
              ""
            )}
            <p className="text-[20p] text-white font-medium">
              21 февраль <span className="text-[#E74362]">18.00 - 22.00</span>
            </p>
          </div>
        </div>
        <div>
          {landlord ? (
            <>
              <div>
                <div className="md:block lg:flex gap-2">
                  <IsolatedButton className="w-[100%] p-[8px] lg:w-[116px] text-white bg-transparent border-white border-2 rounded-[6px]">
                    <Image src={AcceptButtonDesktop} alt="кнопка" />
                    Принять
                  </IsolatedButton>
                  <IsolatedButton className="w-[100%] p-[8px] lg:w-[116px] text-[#E74362] bg-transparent border-[#E74362] border-2 rounded-[6px]">
                    <Image src={RedCloseIcon} alt="кнопка" />
                    Отклонить
                  </IsolatedButton>
                </div>
                <div>
                  <IsolatedButton className="w-[100%] lg:w-[100%] text-[#E74362] bg-transparent border-[#E74362] border-2 mt-[8px] rounded-[6px]">
                    Детали
                  </IsolatedButton>
                </div>
              </div>
            </>
          ) : (
            <>
              <IsolatedButton className="md:w-[120px] lg:w-[240px] text-[#D9D9D9] bg-transparent border-[#D9D9D9] border-2 mt-[8px] rounded-[6px]">
                Детали
              </IsolatedButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileAccordeonItem;
