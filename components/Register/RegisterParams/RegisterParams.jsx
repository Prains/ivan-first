"use client";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { inputFLData, inputULData } from "./RegisterParamsData";
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
        <>
            <Tabs
                className="lg:w-[360px]"
                index={tabIndex}
                onChange={handleTabsChange}
                variant="unstyled"
            >
                <TabList className=" flex justify-between lg:w-[300px] lg:mx-auto">
                    <Tab
                        onClick={handleTabFirst}
                        panelId="UL"
                        className={
                            tabIndex === 0
                                ? "text-[#E74362] text-sm font-medium p-0 text-right lg:text-xl"
                                : "text-white text-sm font-medium p-0 text-right lg:text-xl"
                        }
                    >
                        Юр. лицо
                    </Tab>
                    <Tab
                        onClick={handleTabSecond}
                        panelId="FL"
                        className={
                            tabIndex === 1
                                ? "text-[#E74362] text-sm font-medium p-0 text-right lg:text-xl"
                                : "text-white text-sm font-medium p-0 text-right lg:text-xl"
                        }
                    >
                        Физ. лицо
                    </Tab>
                </TabList>
                {children}
                <TabPanels>
                    <TabPanel className="p-0" id="UL">
                        <form
                            name="registerFormUL"
                            className="p-0 flex-center-col gap-y-5 lg:gap-y-8"
                        >
                            {inputULData.map((input) => {
                                return (
                                    <IsolatedInput key={input.id} {...input} />
                                );
                            })}
                            <IsolatedButton
                                type="submit"
                                className="text-sm font-medium text-white mt-[20px] hover:bg-transparent rounded w-full px-[12px] placeholder:text-[#A0AEC0]
                lg:w-[253px] lg:h-[48px] lg:mx-auto lg:mt-0"
                                size="sm"
                                variant="outline"
                            >
                                Зарегистрироваться
                            </IsolatedButton>
                        </form>
                    </TabPanel>
                    <TabPanel className="p-0" id="FL">
                        <form
                            name="registerFormFL"
                            className="p-0 flex-center-col gap-y-5 lg:gap-y-8"
                        >
                            {inputFLData.map((input) => {
                                return (
                                    <IsolatedInput key={input.id} {...input} />
                                );
                            })}
                            <IsolatedButton
                                type="submit"
                                className="text-sm font-medium text-white mt-[20px] hover:bg-transparent rounded w-full px-[12px] placeholder:text-[#A0AEC0]
                lg:w-[253px] lg:h-[48px] lg:mx-auto lg:mt-0"
                                size="sm"
                                variant="outline"
                            >
                                Зарегистрироваться
                            </IsolatedButton>
                        </form>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
};

export default RegisterParams;
