"use client";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { Card, CardHeader, ButtonGroup, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import api from "@/utils/api";

const ArchiveDesktopPlace = ({ id, title, description, photos }) => {
    const changeData = { data: { archived: false } };

    const handlePutPlaceToActive = () => {
        api.changeProfileData(changeData, id).then(() => {
            window.location.reload();
        });
    };
    return (
        <Card
            variant="unstyled"
            direction="row"
            className="bg-transparent max-w-[700px]"
        >
            <CardHeader className="w-[378px]">
                <div className="h-[190px] relative">
                    <Image
                        width="378"
                        height="190"
                        src={`http://89.232.167.133:1337${photos[0].url}`}
                        alt="Фото площадки"
                        className="h-full opacity-60"
                    />
                </div>
                <p className="text-sm font-normal text-white h-[62px] whitespace-normal truncate">
                    {description}
                </p>
            </CardHeader>
            <CardBody className="flex-center-col justify-between p-0 gap-4 ml-[24px]">
                <h4 className="text-3xl font-medium text-white self-start">
                    {title}
                </h4>
                <ButtonGroup className="flex-col w-[298px] mx-auto my-3 gap-4">
                    <IsolatedButton
                        onClick={handlePutPlaceToActive}
                        size="md"
                        className="w-full m-0 bg-[#E74362] text-white text-base font-medium"
                    >
                        Сделать активной
                    </IsolatedButton>
                    <IsolatedButton
                        size="md"
                        variant="outline"
                        className="w-full m-0 border-[#E74362] text-white text-base font-medium"
                    >
                        Удалить площадку
                    </IsolatedButton>
                </ButtonGroup>
            </CardBody>
        </Card>
    );
};

export default ArchiveDesktopPlace;
