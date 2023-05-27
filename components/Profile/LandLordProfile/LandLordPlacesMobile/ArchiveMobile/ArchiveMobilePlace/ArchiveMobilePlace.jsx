"use client";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { Card, ButtonGroup, CardBody } from "@chakra-ui/react";
import Image from "next/image";
import api from "@/utils/api";

const ArchiveMobilePlace = ({ title, description, photos }) => {
    const changeData = { data: { archived: false } };

    const handlePutPlaceToActive = () => {
        api.changeProfileData(changeData, id).then(() => {
            window.location.reload();
        });
    };
    return (
        <Card className="w-[288px]">
            <CardBody className="flex-center-col p-0">
                <div className="h-[140px]">
                    <Image
                        width="288"
                        height="140"
                        src={`http://89.232.167.133:1337${photos[0].url}`}
                        alt="Фото площадки"
                        className="h-full opacity-60"
                    />
                </div>

                <article className="w-[92%] mx-auto">
                    <h4 className="text-base font-medium">{title}</h4>
                    <p className="text-sm font-normal max-h-[40px] whitespace-normal truncate">
                        {description}
                    </p>
                </article>
                <ButtonGroup className="flex-col w-[92%] mx-auto my-3 gap-2">
                    <IsolatedButton
                        onClick={handlePutPlaceToActive}
                        size="sm"
                        className="w-full m-0 bg-[#E74362] text-white"
                    >
                        Сделать активной
                    </IsolatedButton>
                    <IsolatedButton
                        size="sm"
                        variant="outline"
                        className="w-full m-0 border-[#E74362] text-black"
                    >
                        Удалить площадку
                    </IsolatedButton>
                </ButtonGroup>
            </CardBody>
        </Card>
    );
};

export default ArchiveMobilePlace;
