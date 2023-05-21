"use client";
import { Input } from "@chakra-ui/react";

const IsolatedAuthInput = ({ className, placeholder }) => {
    return (
        <Input
            className={`bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] ${className}`}
            placeholder={placeholder}
            focusBorderColor="#E74362"
            size="sm"
        />
    );
};

export default IsolatedAuthInput;
