import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import IsolatedTextArea from "@/components/ui/IsolatedTextArea/IsolatedTextArea";

const ProfileNewPlace = () => {
  return (
    <main>
      <section>
        <h1>Публикация новой креактивной площадки</h1>
        <div>
          <IsolatedInput />
          <IsolatedInput />
          <IsolatedInput />
          <IsolatedTextArea />
        </div>
      </section>
    </main>
  );
};

export default ProfileNewPlace;
