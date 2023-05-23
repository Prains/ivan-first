import FooterDesktop from "./FooterDesktop/FooterDesktop";
import FooterMobile from "./FooterMobile/FooterMobile";

const Footer = () => {
  return (
    <footer className="bg-black z-0 relative max-w-[1280px] my-0 mx-auto">
      <FooterMobile />
      <FooterDesktop />
    </footer>
  );
};

export default Footer;
