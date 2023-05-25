import ArchiveDesktopPlace from "./ArchiveDesktopPlace/ArchiveDesktopPlace";
import LandLordControlPanelDesktop from "../LandLordControlPanelDesktop/LandLordControlPanelDesktop";

const ArchiveDesktop = () => {
  return ( 
    <section
    className="bg-[#0C1622] flex-row justify-around xl:justify-between xl:mx-[100px] mt-[45px] mb-[190px] hidden
    lg:flex"
>
    <LandLordControlPanelDesktop />
    <div>
        <h1 className="text-4xl font-medium self-start mb-5">Архив площадок</h1>
        <div
        className="flex-center-col justify-between gap-[24px] max-h-[800px] mb-[35px] overflow-y-scroll"
    >
        <ArchiveDesktopPlace isModerated={true} />
        <ArchiveDesktopPlace isModerated={false} />
    </div>
    </div>

</section>
   );
}
 
export default ArchiveDesktop;