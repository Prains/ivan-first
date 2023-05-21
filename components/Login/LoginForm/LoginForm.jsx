import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";

const LoginForm = () => {
    return (
        <div className="mt-[20px] mb-[12px]">
            <IsolatedInput
                className="bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000]"
                placeholder="Почта"
                focusBorderColor="#E74362"
                size="sm"
            />
            <IsolatedInput
                className="mt-[24px] bg-white rounded w-full px-[12px] placeholder:text-[#A0AEC0] text-[#000]"
                placeholder="Пароль"
                focusBorderColor="#E74362"
                size="sm"
            />
            <IsolatedButton 
              className="text-sm font-medium text-white mt-[25px] rounded w-full px-[12px] placeholder:text-[#A0AEC0]"
              size="sm"
              variant="outline"
            >
              Войти
            </IsolatedButton>
        </div>
    );
};

export default LoginForm;
