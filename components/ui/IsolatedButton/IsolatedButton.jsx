"use client";
import { Button } from "@chakra-ui/react";

const IsolatedButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default IsolatedButton;
