"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const IsolatedAuthLink = ({ path, children }) => {
    const pathname = usePathname();

    return (
        <li
            className={
                pathname === `${path}`
                    ? "border-b-2 border-[#E74362] w-full"
                    : "w-full"
            }
        >
            <Link className="text-xl text-[#fff] font-medium" href={ path }>
                {children}
            </Link>
        </li>
    );
};

export default IsolatedAuthLink;
