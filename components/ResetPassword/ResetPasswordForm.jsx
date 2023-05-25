"use client";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import useInput from "@/hooks/useInput";
import auth from "@/utils/auth";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";

const ResetPasswordForm = () => {
    const [error, setError] = useState(false);
    const authHandling = useAuth();

    const [password, passwordChange] = useInput("");

    const data = [
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "Пароль",
            focusBorderColor: "#E74362",
            label: "Пароль:",
            htmlType: "password",
            isRequired: true,
            minLength: "6",
            onChange: (e) => {
                passwordChange(e);
            },
            value: password,
        },
    ];

    return (
        <FormControl isInvalid={error}>
            <form
                name="ResetPasswordForm"
                className="mt-[20px] flex-center-col gap-6
            lg:mt-[46px] lg:gap-[46px]"
                // onSubmit={handleSubmit}
            >
                {data.map((input) => {
                    return <IsolatedInput {...input} key={input.label} />;
                })}
                <IsolatedButton
                    type="submit"
                    className="text-sm font-medium text-white hover:bg-transparent rounded w-full px-[12px] h-[32px]
                    bg-[#E74362] border-[#E74362] lg:w-[224px] lg:h-[48px] lg:order-[999] lg:text-base"
                    variant="outline"
                >
                    Готово
                </IsolatedButton>
            </form>
        </FormControl>
    );
};

export default ResetPasswordForm;
