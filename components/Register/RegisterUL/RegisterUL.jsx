"use client";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import useInput from "@/hooks/useInput";
import auth from "@/utils/auth";

const RegisterUL = ({ userRole }) => {
    const type = "organization";
    const [username, usernameChange] = useInput("");
    const [email, emailChange] = useInput("");
    const [phone, phoneChange] = useInput("");
    const [organizationName, organizationNameChange] = useInput("");
    const [inn, innChange] = useInput("");
    const [position, positionChange] = useInput("");
    const [password, passwordChange] = useInput("");
    const [confirmPassword, confirmPasswordChange] = useInput("");

    const inputULData = [
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "ФИО",
            focusBorderColor: "#E74362",
            label: "ФИО:",
            htmlType: "text",
            required: true,
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
            required: true,
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
            placeholder: "Название юр. лица",
            focusBorderColor: "#E74362",
            label: "Название юр. лица:",
            htmlType: "text",
            required: true,
            onChange: (e) => {
                organizationNameChange(e);
            },
            value: organizationName,
        },
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "ИНН",
            focusBorderColor: "#E74362",
            label: "ИНН:",
            htmlType: "number",
            required: true,
            onChange: (e) => {
                innChange(e);
            },
            value: inn,
        },
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "Должность",
            focusBorderColor: "#E74362",
            label: "Должность:",
            htmlType: "text",
            required: true,
            onChange: (e) => {
                positionChange(e);
            },
            value: position,
        },
        {
            className:
                "bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px] lg:h-[48px]",
            placeholder: "Пароль",
            focusBorderColor: "#E74362",
            label: "Пароль:",
            htmlType: "password",
            required: true,
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
            required: true,
            onChange: (e) => {
              confirmPasswordChange(e);
            },
            value: confirmPassword,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.register(username, email, userRole, type, password);
    };

    return (
        <form
            onSubmit={handleSubmit}
            name="registerFormUL"
            className="p-0 flex-center-col gap-y-5 lg:gap-y-8"
        >
            {inputULData.map((input) => {
                return <IsolatedInput key={input.label} {...input} />;
            })}
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
    );
};

export default RegisterUL;
