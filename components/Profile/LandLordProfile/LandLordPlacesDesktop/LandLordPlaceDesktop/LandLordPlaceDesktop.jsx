"use client";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { Card, CardHeader, ButtonGroup, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import LandLordPlaceDesktopOverlay from "./LandLordPlaceDesktopOverlay";
import api from "@/utils/api";

const LandLordPlaceDesktop = ({ status, title, description, photos, id }) => {
    const changeData = {data: {archived: true}}

    const handlePutPlaceToArchive = () => {
        api.changeProfileData(changeData, id).then(() => {
            window.location.reload();
        });
    }

    return (
        <Card
            variant="unstyled"
            direction="row"
            className="bg-transparent max-w-[700px]"
        >
            <CardHeader className="w-[378px]">
                <div className="h-[190px] relative">
                    {status === "pending" && <LandLordPlaceDesktopOverlay />}
                    <Image
                        width="378"
                        height="190"
                        src={photos ? `http://89.232.167.133:1337${photos[0].url}` : ''}
                        alt="Фото площадки"
                        className="h-full"
                    />
                </div>
                <p className="text-sm font-normal mt-[8px] text-white h-[62px] whitespace-normal truncate">
                    {description}
                </p>
            </CardHeader>
            <CardBody className="flex-center-col justify-between p-0 gap-4 ml-[24px]">
                <h4 className="text-3xl font-medium text-white self-start">
                    {title}
                </h4>
                <ButtonGroup className="flex-col w-[298px] mx-auto my-3 gap-4">
                    <IsolatedButton
                        isDisabled={status === "pending"}
                        size="md"
                        variant={status === "pending" ? "" : "outline"}
                        className={
                            status !== "pending"
                                ? "w-full m-0 bg-[#E74362] text-white text-base font-medium"
                                : "w-full m-0 bg-transparent text-[#8E8E8E] text-base font-medium"
                        }
                    >
                        Просмотр брони
                    </IsolatedButton>
                    <IsolatedButton
                        isDisabled={status === "pending"}
                        size="md"
                        variant={status === "pending" ? "" : "outline"}
                        className={
                            status !== "pending"
                                ? "w-full m-0 bg-[#E74362] text-white text-base font-medium"
                                : "w-full m-0 bg-transparent text-[#8E8E8E] text-base font-medium"
                        }
                    >
                        Редактировать площадку
                    </IsolatedButton>
                    <IsolatedButton
                        onClick={handlePutPlaceToArchive}
                        isDisabled={status === "pending"}
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
