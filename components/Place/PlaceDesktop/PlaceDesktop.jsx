import PlaceAbout from "./PlaceAbout/PlaceAbout";
import PlaceDesktopMap from "./PlaceDesktopMap/PlaceDesktopMap";
import PlaceDesktopReviews from "./PlaceDesktopReviews/PlaceDesktopReviews";
import PlaceOrder from "./PlaceOrder/PlaceOrder";

const PlaceDesktop = () => {
  return (
    <section className="w-[86%] hidden lg:block mt-9">
      <div className="lg:flex lg:items-start lg:justify-center gap-9">
        <PlaceAbout />
        <PlaceOrder />
      </div>
      <PlaceDesktopMap />
      <PlaceDesktopReviews />
    </section>
  );
};

export default PlaceDesktop;
