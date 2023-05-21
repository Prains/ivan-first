import RegisterParams from "@/components/Register/RegisterParams/RegisterParams";
import RegisterUserClassification from "@/components/Register/RegisterUserClassification/RegisterUserClassification";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";
import IsolatedAuthHeader from "@/components/ui/IsolatedAuthHeader/IsolatedAuthHeader";
import IsolatedAuthSubmitButton from "@/components/ui/IsolatedAuthSubmitButton/IsolatedAuthSubmitButton";
import { bgAuth } from "@/images/Login";

const Register = () => {
  return (
    <main>
        <section
            style={{
                backgroundImage: `url(${bgAuth.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className="bg-[#0C1622] bg-top flex-start-col min-h-[388px]"
        >
            <ArrowBack className="top-1 left-1 z-30" />
            <div className="w-[220px] flex-start-col m-auto">
              <IsolatedAuthHeader />
              <div className="flex-col w-[200px] mt-[16px] mx-auto">
              <RegisterParams>
                <RegisterUserClassification />
              </RegisterParams>
              <IsolatedAuthSubmitButton className="mt-[40px]" buttonText="Зарегистрироваться" />
              </div>
              
            </div>
        </section>
    </main>
);
}
 
export default Register;