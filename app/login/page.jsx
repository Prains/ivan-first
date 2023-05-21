import LoginForgottenPasswordLink from "@/components/Login/LoginForgottenPasswordLink/LoginForgottenPasswordLink";
import LoginForm from "@/components/Login/LoginForm/LoginForm";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";
import IsolatedAuthHeader from "@/components/ui/IsolatedAuthHeader/IsolatedAuthHeader";
import { bgAuth } from "@/images/Login";

const Login = () => {
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
                  <LoginForm />
                  <LoginForgottenPasswordLink restorePasswordLink="/" />
                </div>
            </section>
        </main>
    );
};

export default Login;
