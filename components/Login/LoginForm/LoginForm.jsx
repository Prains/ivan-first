"use client";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import Link from "next/link";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import useInput from "@/hooks/useInput";
import auth from "@/utils/auth";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import links from "@/utils/links";

const LoginForm = () => {
    const [error, setError] = useState(false);
    const authHandling = useAuth();

    const [email, emailChange] = useInput("");
    const [password, passwordChange] = useInput("");

    const data = [
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "Почта",
            focusBorderColor: "#E74362",
            label: "Почта:",
            type: "email",
            isRequired: true,
            minLength: "6",
            onChange: (e) => {
                emailChange(e);
            },
            value: email,
        },
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "Пароль",
            focusBorderColor: "#E74362",
            label: "Пароль:",
            type: "password",
            isRequired: true,
            minLength: "6",
            onChange: (e) => {
                passwordChange(e);
            },
            value: password,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.login(email, password).then((res) => {
            authHandling(setError, res);
        });
    };

    return (
        <FormControl isInvalid={error}>
            <form
                name="loginForm"
                className="mt-[20px] flex-center-col gap-6
            lg:mt-[46px] lg:mb-[24px]"
                onSubmit={handleSubmit}
            >
                {data.map((input) => {
                    return <IsolatedInput {...input} key={input.label} />;
                })}
                {error ? (
                    <FormErrorMessage>
                        Почта или пароль неверные
                    </FormErrorMessage>
                ) : (
                    ""
                )}
                <IsolatedButton
                    type="submit"
                    className="text-sm font-medium text-white hover:bg-transparent rounded w-full px-[12px] h-[32px] placeholder:text-[#A0AEC0]
              lg:w-[224px] lg:h-[48px] lg:order-[999] lg:text-base"
                    variant="outline"
                >
                    Войти
                </IsolatedButton>
                <Link
                    className="text-white underline text-sm font-medium flex self-start last:mt-[-12px]
                lg:last:mt-0"
                    href={links.forgotPassword}
                >
                    Забыли пароль?
                </Link>
            </form>
        </FormControl>
    );
};

export default LoginForm;
