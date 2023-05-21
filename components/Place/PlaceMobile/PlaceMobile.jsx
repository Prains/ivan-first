import PlaceCommonInfo from "@/components/Place/PlaceMobile/PlaceCommonInfo/PlaceCommonInfo";
import PlaceReviewsnTime from "@/components/Place/PlaceMobile/PlaceReviewsnTime/PlaceReviewsnTime";
import PlacePriceNOrder from "@/components/Place/PlaceMobile/PlacePriceNOrder/PlacePriceNOrder";
import PlaceDescription from "@/components/Place/PlaceMobile/PlaceDescription/PlaceDescription";
import PlaceUserOwner from "../PlaceUserOwner/PlaceUserOwner";

const PlaceMobile = () => {
  return (
    <div className="w-[91%] my-0 mx-auto lg:hidden">
      <PlaceCommonInfo />
      <PlaceReviewsnTime />
      <PlacePriceNOrder />
      <PlaceDescription />
      <PlaceUserOwner />
    </div>
  );
};

export default PlaceMobile;
