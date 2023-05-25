"use client";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { bgPlace } from "@/images/Place";
import { Card, ButtonGroup, CardBody } from "@chakra-ui/react";
import Image from "next/image";

const ArchivePlace = ({ isModerated }) => {
    return (
        <Card className="w-[288px]">
            <CardBody className="flex-center-col p-0">
                <div className="h-[140px]">
                    <Image
                        src={bgPlace}
                        alt="Фото площадки"
                        className="h-full"
                    />
                </div>

                <article className="w-[92%] mx-auto">
                    <h4 className="text-base font-medium">Lorem ipsum</h4>
                    <p className="text-sm font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </article>
                <ButtonGroup className="flex-col w-[92%] mx-auto my-3 gap-2">
                    <IsolatedButton
                        size="sm"
                        className="w-full m-0 bg-[#E74362] text-white"
                    >
                        {isModerated ? "Сделать активной" : "Отправить на модерацию"}
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

export default ArchivePlace;
