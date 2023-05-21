"use client";
import { Button } from "@chakra-ui/react";

const IsolatedAuthSubmitButton = ({ className, buttonText }) => {
    return (
        <Button
          className={`w-full text-sm font-medium text-white ${className}`}
          size="sm"
          variant="outline"
        >
            {buttonText}
        </Button>
    );
};

export default IsolatedAuthSubmitButton;
