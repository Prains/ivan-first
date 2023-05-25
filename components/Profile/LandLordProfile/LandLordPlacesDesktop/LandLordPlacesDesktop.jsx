import LandLordControlPanelDesktop from "./LandLordControlPanelDesktop/LandLordControlPanelDesktop";
import LandLordPlaceDesktop from "./LandLordPlaceDesktop/LandLordPlaceDesktop";

const LandLordPlacesDesktop = () => {
    return (
        <section
            className="bg-[#0C1622] flex-row justify-around xl:justify-between xl:mx-[100px] mt-[45px] mb-[190px] hidden
            lg:flex"
        >
            <LandLordControlPanelDesktop />

            <div>
                <h1 className="text-4xl font-medium self-start mb-5">
                    Ваши площадки
                </h1>
                <div className="flex-center-col justify-between gap-[24px] max-h-[800px] mb-[35px] overflow-y-scroll">
                    <LandLordPlaceDesktop isModerated={true} />
                    <LandLordPlaceDesktop isModerated={false} />
                    <LandLordPlaceDesktop isModerated={true} />
                </div>
            </div>
        </section>
    );
};

export default LandLordPlacesDesktop;
