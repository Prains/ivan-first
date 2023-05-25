import { StarIconFilled } from "@/components/ui/Icons";

const NameAndRating = () => {
  const icons = Array(5).fill(<StarIconFilled />);
  return (
    <>
      <div className="flex-center justify-start gap-4 mb-4 lg:flex-col">
        <p className="text-[40px] font-medium lg:text-[84px] lg:leading-[105px]">
          4,0
        </p>
        <div className="flex-center-col items-start gap-[2px] lg:gap-3 lg:items-center">
          <div className="flex-center gap-px">{icons}</div>
          <p className="lg:w-2/3 lg:font-normal">на основании 2 оценок</p>
        </div>
      </div>
    </>
  );
};

export default NameAndRating;
