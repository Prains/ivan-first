import LoginForgottenPasswordLink from "@/components/Login/LoginForgottenPasswordLink/LoginForgottenPasswordLink";
import LoginForm from "@/components/Login/LoginForm/LoginForm";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";
import AuthHeader from "@/components/Auth/AuthHeader/AuthHeader";
import { bgAuth } from "@/images/Login";

const Login = () => {
    return (
        <main>
            <section
                className="bg-[#0C1622] bg-bgAuth-mobile bg-top bg-no-repeat bg-cover flex-start-col min-h-[388px]"
            >
                <ArrowBack className="top-1 left-1 z-30" />
                <div className="w-[220px] flex-start-col m-auto">
                  <AuthHeader />
                  <LoginForm />
                  <LoginForgottenPasswordLink restorePasswordLink="/" />
                </div>
            </section>
        </main>
    );
};

export default Login;
