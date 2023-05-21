"use client";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
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
                <TabPanel className="p-0 flex-center-col gap-y-5" id="UL">
                    {
                        inputULData.map((input) => {
                            return (<IsolatedInput key={input.id} {...input} />)
                        })
                    }
                </TabPanel>
                <TabPanel className="p-0 flex-center-col gap-y-5" id="FL">
                    {
                        inputFLData.map((input) => {
                            return (<IsolatedInput key={input.id} {...input} />)
                        })
                    }
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default RegisterParams;
