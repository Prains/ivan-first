import Image from "next/image";
import {bannerVector} from "@/images/Banner";

const BannerSvg = ({className}) => {
    return (
        <div>
            <Image className={className} src={bannerVector} alt='hello' />
        </div>
    );
};

export default BannerSvg;