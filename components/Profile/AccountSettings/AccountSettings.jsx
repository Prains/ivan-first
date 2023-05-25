"use client";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import AccountDetails from "../AccountDetails/AccountDetails";
import AccountInput from "./AccountInput/AccountInput";
import useInput from "@/hooks/useInput";
import { DeleteIcon } from "@chakra-ui/icons";

const AccountSettings = () => {
  const [name, nameChange] = useInput("");
  const [mail, mailChange] = useInput("");
  const [phone, phoneChange] = useInput("");

  return (
    <main>
      <AccountDetails name="Евгений Евгеньевич" role="Арендодатель" />
      <section className="w-[90%] my-0 mx-auto">
        <div>
          <h2 className="mb-3 font-medium">ФИО</h2>
          <AccountInput
            placeholder="Евгений"
            className="mb-7"
            value={name}
            onChange={nameChange}
          />
        </div>
        <div>
          <h3 className="mb-3 font-medium">Контакты</h3>
          <AccountInput
            placeholder={"mail@mail"}
            value={mail}
            onChange={mailChange}
            className="mb-2"
          />
          <AccountInput
            placeholder="88005553535"
            value={phone}
            onChange={phoneChange}
          />
        </div>

        <div className="mb-[78px]">
          <h4 className="mb-3 font-medium">Профиль</h4>
          <IsolatedButton className="w-full flex-center justify-start gap-3 text-[#464646]">
            <DeleteIcon color="black" />
            Удалить
          </IsolatedButton>
        </div>
      </section>
    </main>
  );
};

export default AccountSettings;
