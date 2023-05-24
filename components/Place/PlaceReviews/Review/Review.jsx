import { StarIconFilled } from "@/components/ui/Icons";

const Review = () => {
  const row = Array(5).fill(<StarIconFilled />);
  return (
    <article className="flex-center-col items-start gap-2 py-4 border-y border-y-[#8E8E8E] lg:gap-3 lg:py-8">
      <h6 className="text-[#040404] font-medium lg:text-white lg:text-2xl">
        Елена С.
      </h6>
      <div className="flex-center gap-[2px]">{row}</div>
      <p className="max-h-[136px] overflow-y-auto lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </article>
  );
};

export default Review;
