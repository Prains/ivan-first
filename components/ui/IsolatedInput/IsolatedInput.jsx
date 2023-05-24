"use client";
import { Input } from "@chakra-ui/react";

const IsolatedInput = ({ className, placeholder, size, focusBorderColor, onChange, htmlType, isRequired, minLength }) => {
    return (
        <Input
            minLength={minLength}
            isRequired={isRequired}
            type={htmlType}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
            size={size}
            focusBorderColor={focusBorderColor}
        />
    );
};

export default IsolatedInput;
