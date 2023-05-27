"use client";
import { useState } from "react";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import "@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

const BookPlace = () => {
  const [date, setDate] = useState(new Date(), new Date());

  return (
    <main className="flex-center-col gap-4 my-10 min-h-[70vh]">
      <DateTimeRangePicker
        onChange={setDate}
        value={date}
        className="text-black bg-white"
      />
      <IsolatedButton className="text-black">Забронировать</IsolatedButton>
    </main>
  );
};

export default BookPlace;
