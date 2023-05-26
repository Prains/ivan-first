"use client";
import { Button } from "@chakra-ui/react";

const IsolatedButton = ({
  type,
  className,
  onClick,
  loading,
  colorScheme,
  variant,
  size,
  children,
  isDisabled,
}) => {
  return (
    <Button
      type={type}
      className={className}
      onClick={onClick}
      loading={loading}
      colorScheme={colorScheme}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
    >
      {children}
    </Button>
  );
};

export default IsolatedButton;
