"use client";
import { Input } from "@chakra-ui/react";

const IsolatedInput = ({ className, placeholder, size, focusBorderColor }) => {
    return (
        <Input
            className={className}
            placeholder={placeholder}
            size={size}
            focusBorderColor={focusBorderColor}
        />
    );
};

export default IsolatedInput;
