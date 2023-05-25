"use client";
import AccountInput from "../AccountInput/AccountInput";
import useInput from "@/hooks/useInput";
import { ArrowForwardIcon, DeleteIcon } from "@chakra-ui/icons";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";

const AccountSettingsInputs = () => {
  const [name, nameChange] = useInput("");
  const [mail, mailChange] = useInput("");
  const [phone, phoneChange] = useInput("");
  const [organization, organizationChange] = useInput("");
  const [post, postChange] = useInput("");
  const [inn, innChange] = useInput("");

  return (
    <>
      <div className="mb-7">
        <h2 className="mb-3 font-medium">ФИО</h2>
        <AccountInput
          placeholder="Евгений"
          value={name}
          onChange={nameChange}
        />
      </div>
      <div className="mb-7 flex-center-col gap-3">
        <h2 className="font-medium self-start">Юридичекая информация</h2>
        <AccountInput
          placeholder="ООО"
          value={organization}
          onChange={organizationChange}
        />
        <AccountInput
          placeholder="Директор"
          value={post}
          onChange={postChange}
        />
        <AccountInput
          placeholder="123123123123132"
          value={inn}
          onChange={innChange}
        />
      </div>
      <div className="mb-7">
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
        <IsolatedButton className="w-full flex-center justify-start gap-3 text-[#464646] mb-3">
          <DeleteIcon color="black" />
          Удалить
        </IsolatedButton>
        <IsolatedButton className="w-full flex-center justify-start gap-3 text-[#464646]">
          <ArrowForwardIcon color="black" />
          Выйти
        </IsolatedButton>
      </div>
    </>
  );
};

export default AccountSettingsInputs;
