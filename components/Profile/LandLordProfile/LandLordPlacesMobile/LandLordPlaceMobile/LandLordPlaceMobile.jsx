"use client";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { bgPlace } from "@/images/Place";
import { Card, ButtonGroup, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import LandLordPlaceMobileOverlay from "./LandLordPlaceMobileOverlay";

const LandLordPlaceMobile = ({ isModerated, title, description }) => {
    return (
        <Card className="w-[288px]">
            <CardBody className="flex-center-col p-0">
                <div className="h-[140px] relative">
                    {!isModerated && <LandLordPlaceMobileOverlay />}
                    <Image
                        src={bgPlace}
                        alt="Фото площадки"
                        className="h-full"
                    />
                </div>

                <article className="w-[92%] mx-auto">
                    <h4 className="text-base font-medium">{title}</h4>
                    <p className="text-sm font-normal h-[40px] whitespace-normal truncate">
                        {description}
                    </p>
                </article>
                <ButtonGroup className="flex-col w-[92%] mx-auto my-3 gap-2">
                    <IsolatedButton
                        isDisabled={!isModerated}
                        size="sm"
                        variant={isModerated ? "" : "outline"}
                        className={
                            isModerated
                                ? "w-full m-0 bg-[#E74362] text-white"
                                : "w-full m-0 bg-transparent text-[#464646]"
                        }
                    >
                        Просмотр брони
                    </IsolatedButton>
                    <IsolatedButton
                        isDisabled={!isModerated}
                        size="sm"
                        variant={isModerated ? "" : "outline"}
                        className={
                            isModerated
                                ? "w-full m-0 bg-[#E74362] text-white"
                                : "w-full m-0 bg-transparent text-[#464646]"
                        }
                    >
                        Редактировать площадку
                    </IsolatedButton>
                    <IsolatedButton
                        isDisabled={!isModerated}
                        size="sm"
                        variant="outline"
                        className="w-full m-0 border-[#E74362] text-black"
                    >
                        Поместить в архив
                    </IsolatedButton>
                </ButtonGroup>
            </CardBody>
        </Card>
    );
};

export default LandLordPlaceMobile;
