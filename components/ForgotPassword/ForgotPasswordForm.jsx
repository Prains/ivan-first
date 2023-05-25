"use client";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import useInput from "@/hooks/useInput";
import auth from "@/utils/auth";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";

const ForgotPasswordForm = () => {
    const [error, setError] = useState(false);
    const authHandling = useAuth();

    const [email, emailChange] = useInput("");

    const data = [
      {
          className:
              "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
          placeholder: "Почта",
          focusBorderColor: "#E74362",
          label: "Почта:",
          htmlType: "email",
          isRequired: true,
          minLength: "6",
          onChange: (e) => {
              emailChange(e);
          },
          value: email,
      },
    ]

    return (
        <FormControl isInvalid={error}>
            <form
                name="ForgotPasswordForm"
                className="mt-[20px] flex-center-col gap-6
            lg:mt-[46px] lg:gap-[46px]"
                // onSubmit={handleSubmit}
            >
              {data.map((input) => {
                return <IsolatedInput {...input} key={input.label} />;
              })}
              {error ? (
                    <FormErrorMessage>
                        Почта не найдена
                    </FormErrorMessage>
                ) : (
                    ""
                )}
                <IsolatedButton
                    type="submit"
                    className="text-sm font-medium text-white hover:bg-transparent rounded w-full px-[12px] h-[32px]
              lg:w-[224px] lg:h-[48px] lg:order-[999] lg:text-base"
                    variant="outline"
                >
                    Отправить
                </IsolatedButton>
            </form>
        </FormControl>
    );
};

export default ForgotPasswordForm;
