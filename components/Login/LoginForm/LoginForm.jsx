import IsolatedAuthInput from "@/components/ui/IsolatedAuthInput/IsolatedAuthInput";
import IsolatedAuthSubmitButton from "@/components/ui/IsolatedAuthSubmitButton/IsolatedAuthSubmitButton";

const LoginForm = () => {
  return ( 
    <div className="mt-[20px] mb-[12px]">
      <IsolatedAuthInput placeholder="Почта" />
      <IsolatedAuthInput className="mt-[24px]" placeholder="Пароль" />
      <IsolatedAuthSubmitButton className="mt-[25px]" buttonText="Войти" />
    </div>
   );
}
 
export default LoginForm;