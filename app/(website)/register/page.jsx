import RegisterParams from "@/components/Register/RegisterParams/RegisterParams";
import RegisterUserClassification from "@/components/Register/RegisterUserClassification/RegisterUserClassification";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";
import AuthHeader from "@/components/Auth/AuthHeader/AuthHeader";

// TODO validation

const Register = () => {
    return (
        <main>
            <section
                className="bg-[#0C1622] bg-bgAuth bg-top bg-no-repeat bg-contain relative flex-start-col min-h-[388px] pb-[60px]
            lg:min-h-[536px] lg:bg-auto lg:pb-[140px]"
            >
                <ArrowBack className="top-1 left-1 z-30 lg:hidden" />
                <div
                    className="w-[225px] flex-start-col m-auto
              lg:w-[360px]"
                >
                    <AuthHeader />
                    <div
                        className="flex-center-col w-[200px] mt-[16px] mx-auto
                lg:w-[360px] lg:mt-[24px]"
                    >
                        <RegisterParams />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Register;
