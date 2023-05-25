import LandLordPlaces from "@/components/Profile/LandLordPlaces/LandLordPlaces";
import Link from "next/link";

const landlordPlaces = () => {
    return (
        <main>
            <section className="bg-[#0C1622] flex-center-col mx-4 my-5 min-h-screen">
                <div className="flex-center flex-wrap gap-[11px] mb-[35px]">
                    <LandLordPlaces isModerated={true} />
                    <LandLordPlaces isModerated={false} />
                    <LandLordPlaces isModerated={true} />
                </div>
                <Link
                    className="flex-center w-[288px] h-[32px] text-[#E74362] border-[#E74362] border-solid border-[1px] rounded-md"
                    href="/profile/landlord-places/archive"
                >
                    Архив площадок
                </Link>
            </section>
        </main>
    );
};

export default landlordPlaces;
