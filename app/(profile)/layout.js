import HeaderAccount from "@/components/Profile/HeaderAccount/HeaderAccount";
import FooterAccount from "@/components/Profile/FooterAccount/FooterAccount";

const Layout = ({ children }) => {
  return <>
    <HeaderAccount />
    {children}
    <FooterAccount/>
  </>;
};

export default Layout;
