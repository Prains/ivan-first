import LoginForm from "@/components/Login/LoginForm/LoginForm";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";
import AuthHeader from "@/components/Auth/AuthHeader/AuthHeader";

// TODO: validation

const Login = () => {
    return (
        <main>
            <section
                className="bg-[#0C1622] bg-bgAuth-mobile bg-top bg-no-repeat bg-contain flex-start-col min-h-[388px] pb-[60px]
                lg:min-h-[536px] lg:bg-auto lg:pb-[140px]"
            >
                <ArrowBack className="top-1 left-1 z-30 lg:hidden" />
                <div
                    className="w-[225px] flex-start-col m-auto
                    lg:w-[360px]"
                >
                    <AuthHeader />
                    <LoginForm />
                </div>
            </section>
        </main>
    );
};

export default Login;
