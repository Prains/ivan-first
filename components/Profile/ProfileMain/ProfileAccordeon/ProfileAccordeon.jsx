import ProfileAccordeonItem from "@/components/Profile/ProfileMain/ProfileAccordeon/ProfileAccordeonItem/ProfileAccordeonItem";

const ProfileAccordeon = ({ title, books, user }) => {
  return (
    <div className="flex flex-col justify-start">
      <h3 className="mt-[20px] font-medium text-[24px]">{title}</h3>
      {books.map((item) => {
        return (
          <ProfileAccordeonItem key={item.id} {...item} user={user} />
        )
      })}
      {/* <ProfileAccordeonItem landlord={user} />
      <ProfileAccordeonItem landlord={user} />
      <ProfileAccordeonItem landlord={user} /> */}
    </div>
  );
};

export default ProfileAccordeon;
