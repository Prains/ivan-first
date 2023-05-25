import ArchiveMobilePlace from "./ArchiveMobilePlace/ArchiveMobilePlace";

const ArchiveMobile = () => {
  return ( 
    <section className="bg-[#0C1622] flex-center-col mx-4 my-5 min-h-screen
    lg:hidden">
    <div className="flex-center flex-wrap gap-[11px] mb-[35px]">
      <ArchiveMobilePlace isModerated={true} />
      <ArchiveMobilePlace isModerated={false} />
      <ArchiveMobilePlace isModerated={true} />
    </div>
</section>
   );
}
 
export default ArchiveMobile;