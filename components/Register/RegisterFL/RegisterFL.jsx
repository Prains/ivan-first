"use client";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import useInput from "@/hooks/useInput";
import auth from "@/utils/auth";
import useAuth from "@/hooks/useAuth";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { useState } from "react";

const RegisterFL = ({ userRole }) => {
    const [error, setError] = useState(false);
    const authHandling = useAuth();

    const type = "person";
    const [username, usernameChange] = useInput("");
    const [email, emailChange] = useInput("");
    const [phone, phoneChange] = useInput("");
    const [password, passwordChange] = useInput("");
    const [confirmPassword, confirmPasswordChange] = useInput("");

    const inputFLData = [
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "ФИО",
            focusBorderColor: "#E74362",
            label: "ФИО:",
            htmlType: "text",
            isRequired: true,
            onChange: (e) => {
                usernameChange(e);
            },
            value: username,
        },
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "Почта",
            focusBorderColor: "#E74362",
            label: "Почта:",
            htmlType: "email",
            minLength: "6",
            isRequired: true,
            onChange: (e) => {
                emailChange(e);
            },
            value: email,
        },
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "Телефон",
            focusBorderColor: "#E74362",
            label: "Телефон:",
            htmlType: "tel",
            onChange: (e) => {
                phoneChange(e);
            },
            value: phone,
        },
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "Пароль",
            focusBorderColor: "#E74362",
            label: "Пароль:",
            htmlType: "password",
            minLength: "6",
            isRequired: true,
            onChange: (e) => {
                passwordChange(e);
            },
            value: password,
        },
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "Повторите пароль",
            focusBorderColor: "#E74362",
            label: "Повторите пароль:",
            htmlType: "password",
            isRequired: true,
            onChange: (e) => {
                confirmPasswordChange(e);
            },
            value: confirmPassword,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.register(username, email, userRole, type, password).then((res) => {
            authHandling(setError, res);
        });
    };

    return (
        <FormControl isInvalid={error}>
            <form
                onSubmit={handleSubmit}
                name="registerFormFL"
                className="p-0 flex-center-col gap-y-5 lg:gap-y-8"
            >
                {inputFLData.map((input) => {
                    return <IsolatedInput key={input.label} {...input} />;
                })}
                {error ? (
                    <FormErrorMessage>
                        Пользователь уже существует
                    </FormErrorMessage>
                ) : (
                    ""
                )}
                <IsolatedButton
                    type="submit"
                    className="text-sm font-medium text-white mt-[20px] hover:bg-transparent rounded w-full px-[12px] placeholder:text-[#A0AEC0]
lg:w-[253px] lg:h-[48px] lg:mx-auto lg:mt-0"
                    size="sm"
                    variant="outline"
                >
                    Зарегистрироваться
                </IsolatedButton>
            </form>
        </FormControl>
    );
};

export default RegisterFL;
