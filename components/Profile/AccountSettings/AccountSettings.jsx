import AccountDetails from "../AccountDetails/AccountDetails";
import AccountSettingsInputs from "./AccountSettingsInputs/AccountSettingsInputs";

const AccountSettings = () => {
  return (
    <main className="lg:flex gap-8 items-start justify-center mt-[60px]">
      <AccountDetails name="Евгений Евгеньевич" role="Арендодатель" />
      <section className="w-[90%] lg:max-w-[654px] lg:w-full my-0 mx-auto lg:mx-0">
        <AccountSettingsInputs />
      </section>
    </main>
  );
};

export default AccountSettings;
