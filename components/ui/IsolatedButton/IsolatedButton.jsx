"use client";
import { Button } from "@chakra-ui/react";

const IsolatedButton = ({
  className,
  onClick,
  loading,
  colorScheme,
  variant,
  children,
}) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      loading={loading}
      colorScheme={colorScheme}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default IsolatedButton;
