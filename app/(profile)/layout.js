import HeaderAccount from "@/components/HeaderAccount/HeaderAccount";
import FooterAccount from "@/components/FooterAccount/FooterAccount";

const Layout = ({ children }) => {
  return <>
    <HeaderAccount />
    {children}
    <FooterAccount/>
  </>;
};

export default Layout;
