"use client";
import IsolatedAuthInput from "@/components/ui/IsolatedAuthInput/IsolatedAuthInput";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";

const RegisterParams = ({ children }) => {
    const [tabIndex, setTabIndex] = useState(1);

    const handleTabFirst = () => {
        setTabIndex(0);
    };

    const handleTabSecond = () => {
        setTabIndex(1);
    };

    const handleTabsChange = (index) => {
        setTabIndex(index);
    };

    return (
        <Tabs index={tabIndex} onChange={handleTabsChange} variant="unstyled">
            <TabList className=" flex justify-between">
                <Tab
                    onClick={handleTabFirst}
                    panelId="UL"
                    className={
                        tabIndex === 0
                            ? "text-[#E74362] text-sm font-medium p-0 text-right"
                            : "text-white text-sm font-medium p-0 text-right"
                    }
                >
                    Юр. лицо
                </Tab>
                <Tab
                    onClick={handleTabSecond}
                    panelId="FL"
                    className={
                        tabIndex === 1
                            ? "text-[#E74362] text-sm font-medium p-0 text-right"
                            : "text-white text-sm font-medium p-0 text-right"
                    }
                >
                    Физ. лицо
                </Tab>
            </TabList>
            {children}
            <TabPanels>
                <TabPanel className="p-0" id="UL">
                    <IsolatedAuthInput placeholder="ФИО" />
                    <IsolatedAuthInput
                        className="mt-[20px]"
                        placeholder="Почта"
                    />
                    <IsolatedAuthInput
                        className="mt-[20px]"
                        placeholder="Телефон"
                    />
                    <IsolatedAuthInput
                        className="mt-[20px]"
                        placeholder="Название юр. лица"
                    />
                    <IsolatedAuthInput
                        className="mt-[20px]"
                        placeholder="ИНН"
                    />
                    <IsolatedAuthInput
                        className="mt-[20px]"
                        placeholder="Должность"
                    />
                    <IsolatedAuthInput
                        className="mt-[20px]"
                        placeholder="Пароль"
                    />
                    <IsolatedAuthInput
                        className="mt-[20px]"
                        placeholder="Повторите пароль"
                    />
                </TabPanel>
                <TabPanel className="p-0" id="FL">
                    <IsolatedAuthInput placeholder="ФИО" />
                    <IsolatedAuthInput
                        className="mt-[20px]"
                        placeholder="Почта"
                    />
                    <IsolatedAuthInput
                        className="mt-[20px]"
                        placeholder="Телефон"
                    />
                    <IsolatedAuthInput
                        className="mt-[20px]"
                        placeholder="Пароль"
                    />
                    <IsolatedAuthInput
                        className="mt-[20px]"
                        placeholder="Повторите пароль"
                    />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default RegisterParams;
