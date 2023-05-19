import Link from "next/link";

const FooterLink = ({ children, href }) => {
  return (
    <Link href={href} className="h-[27px] text-white text-sm">
      {children}
    </Link>
  );
};

export default FooterLink;
