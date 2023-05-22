import styles from './BannerSvg.module.css'
import Image from "next/image";
import {bannerVector} from "@/images/Banner";

const BannerSvg = () => {
    return (
        <div>
            <Image className={styles.bannerSvg} src={bannerVector} alt='hello' />
        </div>
    );
};

export default BannerSvg;