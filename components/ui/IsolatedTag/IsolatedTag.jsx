'use client'
import { Tag } from "@chakra-ui/react";

const IsolatedTag = ({ children, size, variant, colorScheme, className }) => {
  return (
    <Tag
      className={className}
      size={size}
      variant={variant}
      colorScheme={colorScheme}
    >
      {children}
    </Tag>
  );
};

export default IsolatedTag;
