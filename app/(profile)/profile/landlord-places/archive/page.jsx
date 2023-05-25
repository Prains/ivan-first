import ArchivePlace from "@/components/Profile/LandLordPlaces/Archive/ArchivePlace";

const Archive = () => {
    return (
        <main>
            <section className="bg-[#0C1622] flex-center-col mx-4 my-5 min-h-screen">
                <div className="flex-center flex-wrap gap-[11px] mb-[35px]">
                  <ArchivePlace isModerated={true} />
                  <ArchivePlace isModerated={false} />
                </div>
            </section>
        </main>
    );
};

export default Archive;
