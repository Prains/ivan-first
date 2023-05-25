"use client";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";

const AccountInput = ({
  placeholder,
  className,
  value,
  onChange,
  htmlType,
}) => {
  return (
    <InputGroup className={className}>
      <IsolatedInput
        placeholder={placeholder}
        type={htmlType}
        value={value}
        onChange={onChange}
      />
      <InputRightElement>
        <EditIcon />
      </InputRightElement>
    </InputGroup>
  );
};

export default AccountInput;
