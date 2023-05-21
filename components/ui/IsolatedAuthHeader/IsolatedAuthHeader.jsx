"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const IsolatedAuthHeader = () => {
  
  const pathname = usePathname();

  return ( 
    <ul className="pt-[25px] flex m-auto justify-between w-[220px]">
      <li className={pathname === "/login" ? "border-b-2 border-[#E74362] w-full" : "w-full"}>
        <Link className="text-xl text-[#fff] font-medium" href="/login">Вход</Link>
      </li>
      <li className={pathname === "/register" ? "border-b-2 border-[#E74362] w-full" : "w-full"}>
        <Link className="text-xl text-[#fff] font-medium" href="/register">Регистрация</Link>
      </li>
    </ul>
  
   );
}
 
export default IsolatedAuthHeader;