import RegisterParams from "@/components/Register/RegisterParams/RegisterParams";
import RegisterUserClassification from "@/components/Register/RegisterUserClassification/RegisterUserClassification";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";
import AuthHeader from "@/components/Auth/AuthHeader/AuthHeader";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";


const Register = () => {
  return (
    <main>
        <section
            className="bg-[#0C1622] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover flex-start-col min-h-[388px]"
        >
            <ArrowBack className="top-1 left-1 z-30" />
            <div className="w-[220px] flex-start-col m-auto">
              <AuthHeader />
              <div className="flex-col w-[200px] mt-[16px] mx-auto">
              <RegisterParams>
                <RegisterUserClassification />
              </RegisterParams>
              <IsolatedButton 
                className="text-sm font-medium text-white mt-[40px] rounded w-full px-[12px] placeholder:text-[#A0AEC0]"
                size="sm"
                variant="outline" 
              >
                Зарегистрироваться
              </IsolatedButton>
              </div>
              
            </div>
        </section>
    </main>
);
}
 
export default Register;