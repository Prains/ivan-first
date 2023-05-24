import Main from "@/components/Mainpage/Main/Main";
import AccountTentant from "@/components/AccountTenant/AccountTentant";
import Login from "@/app/login/page";
import AuthHeader from "@/components/Auth/AuthHeader/AuthHeader";
import ViewBooking from "@/components/ViewBooking/ViewBooking";
import ArchiveBooking from "@/components/ArchiveBooking/ArchiveBooking";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
  return <main>
    {/*<Main />*/}
    {/*<AccountTentant />*/}
    {/*<ViewBooking />*/}
    {/*<ArchiveBooking />*/}
    <Reviews />
  </main>;
}
