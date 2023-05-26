"use client";
import IsolatedInput from "@/components/ui/IsolatedInput/IsolatedInput";
import IsolatedTextArea from "@/components/ui/IsolatedTextArea/IsolatedTextArea";
import { Select } from "@chakra-ui/react";
import useInput from "@/hooks/useInput";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import { useState } from "react";

const ProfileNewPlace = () => {
  const options = [
    "Киностудия",
    "Галерея",
    "Издательство",
    "Книжный магазин",
    "Дизайн студии",
    "Креативное пространство",
    "Кинотеатр",
    "Звукозаписывающая студия",
    "AR/VR студия",
  ];

  const workingHours = [];

  for (let index = 0; index < 25; index++) {
    workingHours.push({
      hour: index,
      value: index,
    });
  }

  const [name, nameChange] = useInput("");
  const [adress, adressChange] = useInput("");
  const [tag, tagChange] = useInput("");
  const [description, descriptionChange] = useInput("");
  const [workingDays, daysChange] = useState("");

  return (
    <main>
      <form>
        <section className="w-[71%] my-0 mx-auto">
          <h1 className="font-medium text-xl w-full mb-3">
            Публикация новой креактивной площадки
          </h1>
          <div className="flex-center-col gap-5">
            <IsolatedInput
              placeholder="Название новой площадки"
              value={name}
              onChange={nameChange}
            />
            <IsolatedInput
              placeholder="Адрес площадки"
              value={adress}
              onChange={adressChange}
            />
            <Select value={tag} onChange={tagChange}>
              {options.map((option) => {
                return (
                  <option value={option} key={option} className="text-black">
                    {option}
                  </option>
                );
              })}
            </Select>
            <IsolatedTextArea
              placeholder="Описание креативной площадки"
              value={description}
              onChange={descriptionChange}
            />
          </div>
        </section>
        <section className="w-[85%] my-0 mx-auto flex-center-col">
          <h2 className="font-medium">Время работы площадки:</h2>
          <div className="grid grid-cols-2 grid-rows-1">
            <article className="flex-center-col items-start">
              <p>Дни работы:</p>
              <IsolatedButton
                size="sm"
                colorScheme="black"
                variant="outline"
                onClick={() => {
                  daysChange("7");
                }}
              >
                7
              </IsolatedButton>
              <IsolatedButton
                size="sm"
                colorScheme="black"
                variant="outline"
                onClick={() => {
                  daysChange("5/2");
                }}
              >
                5/2
              </IsolatedButton>
              <IsolatedButton
                size="sm"
                colorScheme="black"
                variant="outline"
                onClick={() => {
                  daysChange("6/1");
                }}
              >
                6/1
              </IsolatedButton>
            </article>
            <article className="flex-center-col items-start">
              <Select placeholder="С">
                {workingHours.map((hour) => {
                  return (
                    <option
                      value={hour.value}
                      key={hour.hour}
                      className="text-black"
                    >
                      {hour.hour}
                    </option>
                  );
                })}
              </Select>
              <Select placeholder="По">
                {workingHours.map((hour) => {
                  return (
                    <option
                      value={hour.value}
                      key={hour.hour}
                      className="text-black"
                    >
                      {hour.hour}
                    </option>
                  );
                })}
              </Select>
            </article>
          </div>
          <input type="file" />
        </section>
      </form>
    </main>
  );
};

export default ProfileNewPlace;
