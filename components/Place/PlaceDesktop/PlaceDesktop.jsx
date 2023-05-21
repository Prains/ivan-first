import PlaceAbout from "./PlaceAbout/PlaceAbout";
import PlaceOrder from "./PlaceOrder/PlaceOrder";

const PlaceDesktop = () => {
  return (
    <section className="w-[86%] hidden lg:block mt-9">
      <div className="lg:flex lg:items-start lg:justify-center gap-9">
        <PlaceAbout />
        <PlaceOrder />
      </div>
    </section>
  );
};

export default PlaceDesktop;
