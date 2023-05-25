import ArchiveDesktopPlace from "./ArchiveDesktopPlace/ArchiveDesktopPlace";
import LandLordControlPanelDesktop from "../LandLordControlPanelDesktop/LandLordControlPanelDesktop";

const ArchiveDesktop = () => {
  return ( 
    <section
    className="bg-[#0C1622] flex-row justify-around xl:justify-between xl:mx-[100px] mt-[45px] mb-[190px] hidden
    lg:flex"
>
    <LandLordControlPanelDesktop />

    <div
        className="flex-center-col justify-between gap-[24px] max-h-[800px] mb-[35px] overflow-y-scroll"
    >
        <h1 className="text-4xl font-medium self-start">Ваши площадки</h1>
        <ArchiveDesktopPlace isModerated={true} />
        <ArchiveDesktopPlace isModerated={false} />
    </div>
</section>
   );
}
 
export default ArchiveDesktop;