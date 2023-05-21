"use client";
import { Button } from "@chakra-ui/react";

const IsolatedButton = ({
  className,
  onClick,
  loading,
  colorScheme,
  variant,
  size,
  children,
}) => {
  return (
    <Button
      className={className}
      onClick={onClick}
      loading={loading}
      colorScheme={colorScheme}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
};

export default IsolatedButton;
