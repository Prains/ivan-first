import ProfileMobileComponent from "@/components/Profile/ProfileMain/ProfileMobile/ProfileMobileComponent";
import ProfileComponentDesktop from "@/components/Profile/ProfileMain/ProfileDesktop/ProfileComponentDesktop";

const ProfileComponent = () => {
    const landlord = false
    return (
        <section>
            <ProfileMobileComponent />
            <ProfileComponentDesktop />
        </section>
    );
};

export default ProfileComponent;