import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import IsolatedTextArea from "@/components/ui/IsolatedTextArea/IsolatedTextArea";

const ProfileNewPlace = () => {
  return (
    <main>
      <section>
        <h1>Публикация новой креактивной площадки</h1>
        <div>
          <IsolatedInput placeholder="Название новой площадки" />
          <IsolatedInput placeholder="Адрес площадки" />
          <IsolatedInput />
          <IsolatedTextArea placeholder="Описание креативной площадки" />
        </div>
      </section>
      <section>
        <h2>Время работы площадки:</h2>
        <div></div>
      </section>
    </main>
  );
};

export default ProfileNewPlace;
