"use client";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import RegisterUserClassification from "../RegisterUserClassification/RegisterUserClassification";
import RegisterUL from "../RegisterUL/RegisterUL";
import RegisterFL from "../RegisterFL/RegisterFL";

const RegisterParams = () => {
    const [tabIndex, setTabIndex] = useState(1);
    const [userRole, setUserRole] = useState('tennant')

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
                        className={
                            tabIndex === 1
                                ? "text-[#E74362] text-sm font-medium p-0 text-right lg:text-xl"
                                : "text-white text-sm font-medium p-0 text-right lg:text-xl"
                        }
                    >
                        Физ. лицо
                    </Tab>
                </TabList>
                <RegisterUserClassification setUserRole={setUserRole} />
                <TabPanels>
                    <TabPanel className="p-0">
                        <RegisterUL userRole={userRole} />
                    </TabPanel>
                    <TabPanel className="p-0">
                        <RegisterFL userRole={userRole} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
};

export default RegisterParams;
