"use client";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { useState } from "react";

const RegisterUserClassification = () => {
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
            index={tabIndex}
            onChange={handleTabsChange}
            className="mt-[12px] mb-[30px] lg:mt-[24px] lg:mb-[48px]"
            variant="unstyled"
        >
            <TabList className="flex justify-between lg:w-[300px] lg:mx-auto">
                <Tab
                    onClick={handleTabFirst}
                    className={
                      tabIndex === 0
                          ? "text-[#E74362] text-sm font-medium p-0 text-right lg:text-xl"
                          : "text-white text-sm font-medium p-0 text-right lg:text-xl"
                  }
                >
                    Арендодатель
                </Tab>
                <Tab
                    onClick={handleTabSecond}
                    className={
                      tabIndex === 1
                          ? "text-[#E74362] text-sm font-medium p-0 text-right lg:text-xl"
                          : "text-white text-sm font-medium p-0 text-right lg:text-xl"
                  }
                >
                    Арендатор
                </Tab>
            </TabList>
        </Tabs>
        </>
    );
};

export default RegisterUserClassification;
