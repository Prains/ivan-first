import ProfileActiveItem from "@/components/Profile/ProfileMain/ProfileContainerActiveItem/ProfileActiveItem/ProfileActiveItem";

const ProfileContainerActiveItem = ({landlord, data}) => {
    return (
        <div className='flex flex-col justify-start'>
            <h3 className='mt-[20px] font-medium text-[24px]'>Artplay</h3>
            {
                data.map((item) => <ProfileActiveItem key={item.id} landlord={landlord} {...item}/>)
            }

        </div>
    );
};

export default ProfileContainerActiveItem;