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
        <Tabs
            index={tabIndex}
            onChange={handleTabsChange}
            className="mt-[12px] mb-[30px]"
            variant="unstyled"
        >
            <TabList className="flex justify-between">
                <Tab
                    onClick={handleTabFirst}
                    className={
                      tabIndex === 0
                          ? "text-[#E74362] text-sm font-medium p-0 text-right"
                          : "text-white text-sm font-medium p-0 text-right"
                  }
                >
                    Арендодатель
                </Tab>
                <Tab
                    onClick={handleTabSecond}
                    className={
                      tabIndex === 1
                          ? "text-[#E74362] text-sm font-medium p-0 text-right"
                          : "text-white text-sm font-medium p-0 text-right"
                  }
                >
                    Арендатор
                </Tab>
            </TabList>
        </Tabs>
    );
};

export default RegisterUserClassification;
