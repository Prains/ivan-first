import Link from "next/link";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";

const LoginForm = () => {
    return (
        <form
            name="loginForm"
            className="mt-[20px] flex-center-col gap-6
            lg:mt-[46px] lg:mb-[24px]"
        >
            <IsolatedInput
                className="bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px]
                lg:h-[48px]"
                placeholder="Почта"
                focusBorderColor="#E74362"
            />
            <IsolatedInput
                className="bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000] h-[32px]
                lg:h-[48px]"
                placeholder="Пароль"
                focusBorderColor="#E74362"
            />
            <IsolatedButton
                className="text-sm font-medium text-white hover:bg-transparent rounded w-full px-[12px] h-[32px] placeholder:text-[#A0AEC0]
              lg:w-[224px] lg:h-[48px] lg:order-[999] lg:text-base"
                variant="outline"
            >
                Войти
            </IsolatedButton>
            <Link
                className="text-white underline text-sm font-medium flex self-start last:mt-[-12px]
                lg:last:mt-0"
                href="/"
            >
                Забыли пароль?
            </Link>
        </form>
    );
};

export default LoginForm;
