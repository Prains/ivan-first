import ForgotPasswordForm from "@/components/ForgotPassword/ForgotPasswordForm";
import ArrowBack from "@/components/ui/ArrowBack/ArrowBack";

const ForgotPassowrd = () => {
    return (
        <main className="min-h-[100%-247px]">
            <section className="flex-col justify-center gap-6 bg-[#0C1622] bg-bgAuth bg-top bg-no-repeat bg-contain min-h-[388px] relative
            lg:mb-[80px]">
                <ArrowBack className="top-1 left-1 z-30 lg:hidden" />
                <div className="w-[224px] mx-auto pt-6
                lg:w-[395px] lg:pt-[96px]">
                    <h2 className="text-center text-xl font-medium lg:text-4xl">
                        Введите электронную почту
                    </h2>
                    <ForgotPasswordForm />
                </div>
            </section>
        </main>
    );
};

export default ForgotPassowrd;
