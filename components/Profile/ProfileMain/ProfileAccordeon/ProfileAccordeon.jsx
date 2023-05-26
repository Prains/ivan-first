import ProfileAccordeonItem
    from "@/components/Profile/ProfileMain/ProfileAccordeon/ProfileAccordeonItem/ProfileAccordeonItem";

const ProfileAccordeon = ({landlord}) => {
    return (
        <div className='flex flex-col justify-start'>
            <h3 className='mt-[20px] font-medium text-[24px]'>Artplay</h3>
            <ProfileAccordeonItem landlord={landlord}/>
            <ProfileAccordeonItem landlord={landlord}/>
            <ProfileAccordeonItem landlord={landlord}/>

        </div>
    );
};

export default ProfileAccordeon;