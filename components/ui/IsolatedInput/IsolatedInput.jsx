"use client";
import { Input } from "@chakra-ui/react";

const IsolatedInput = ({ className, placeholder, size, focusBorderColor, onChange, htmlType, required }) => {
    return (
        <Input
            required={required}
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
