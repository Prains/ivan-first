import LandLordPlacesDesktop from "@/components/Profile/LandLordProfile/LandLordPlacesDesktop/LandLordPlacesDesktop";
import LandLordPlacesMobile from "@/components/Profile/LandLordProfile/LandLordPlacesMobile/LandLordPlacesMobile";


const landlordPlaces = () => {
    return (
        <main>
            <LandLordPlacesMobile />
            <LandLordPlacesDesktop />
        </main>
    );
};

export default landlordPlaces;
