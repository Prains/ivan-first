"use client";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { bgPlace } from "@/images/Place";
import { Card, CardHeader, ButtonGroup, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import LandLordPlaceDesktopOverlay from "./LandLordPlaceDesktopOverlay";

const LandLordPlaceDesktop = ({ isModerated }) => {
    return (
        <Card
            variant="unstyled"
            direction="row"
            className="bg-transparent max-w-[700px]"
        >
            <CardHeader className="w-[378px]">
                <div className="h-[190px] relative">
                    {!isModerated && <LandLordPlaceDesktopOverlay />}
                    <Image
                        src={bgPlace}
                        alt="Фото площадки"
                        className="h-full"
                    />
                </div>
                <p className="text-sm font-normal text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </CardHeader>
            <CardBody className="flex-center-col justify-between p-0 gap-4 ml-[24px]">
                    <h4 className="text-3xl font-medium text-white self-start">
                        Lorem ipsum
                    </h4>
                    <ButtonGroup className="flex-col w-[298px] mx-auto my-3 gap-4">
                        <IsolatedButton
                            isDisabled={!isModerated}
                            size="md"
                            variant={isModerated ? "" : "outline"}
                            className={
                                isModerated
                                    ? "w-full m-0 bg-[#E74362] text-white text-base font-medium"
                                    : "w-full m-0 bg-transparent text-[#464646] text-base font-medium"
                            }
                        >
                            Просмотр брони
                        </IsolatedButton>
                        <IsolatedButton
                            isDisabled={!isModerated}
                            size="md"
                            variant={isModerated ? "" : "outline"}
                            className={
                                isModerated
                                    ? "w-full m-0 bg-[#E74362] text-white text-base font-medium"
                                    : "w-full m-0 bg-transparent text-[#464646] text-base font-medium"
                            }
                        >
                            Редактировать площадку
                        </IsolatedButton>
                        <IsolatedButton
                            isDisabled={!isModerated}
                            size="md"
                            variant="outline"
                            className="w-full m-0 border-[#E74362] text-white text-base font-medium"
                        >
                            Поместить в архив
                        </IsolatedButton>
                    </ButtonGroup>
            </CardBody>
        </Card>
    );
};

export default LandLordPlaceDesktop;
