import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import LoginForgottenPasswordLink from "../LoginForgottenPasswordLink/LoginForgottenPasswordLink";

const LoginForm = () => {
    return (
        <div 
            className="mt-[20px] mb-[12px] flex-center-col gap-6
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
            <LoginForgottenPasswordLink
                        className="text-white underline text-sm font-medium hidden self-start
                        lg:block lg:mt-[24px]"
                        restorePasswordLink="/"
                    />
            <IsolatedButton 
              className="text-sm font-medium text-white rounded w-full px-[12px] h-[32px] placeholder:text-[#A0AEC0]
              lg:w-[224px] lg:h-[48px]"
              variant="outline"
            >
              Войти
            </IsolatedButton>
        </div>
    );
};

export default LoginForm;
