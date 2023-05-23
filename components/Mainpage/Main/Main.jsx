import Banner from "../Banner/Banner";
import CardsBlock from "../CardsBlock/CardsBlock";

const Main = () => {
    return (
        <section className='bg-[#0C1622]'>
            <Banner className='lg:w-[86%] w-[91%] mx-auto my-0'/>
            <div className='lg:w-[86%] w-[91%] mx-auto my-0'>
                <CardsBlock />
            </div>

        </section>
    );
};

export default Main;