"use client"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {useState} from "react";
import {ru} from "date-fns/locale";
const BookingCalendar = () => {
    const css = `
        
    `
    const [selected, setSelected] = useState();
    const disabledDays = [
        // это если хотим заблокировать определенные дни, индексация месяцев идет с 0 - то есть Январь - это 0
        new Date(2023, 4, 26),
        new Date(2023, 4, 14),
        new Date(2023, 4, 23),
        // это если несколько чисел заблокировать
        { from: new Date(2022, 4, 18), to: new Date(2022, 4, 29) }
    ];
    return (
        <DayPicker
            mode='single'
            selected={selected}
            onSelect={setSelected}
            locale={ru}
            disabled={disabledDays}
        />
    );
};

export default BookingCalendar;