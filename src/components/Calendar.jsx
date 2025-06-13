import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

import CalendarHeader from "./CalendarHeader";
import DayCell from "./DayCell";
import { getMonthDays } from "../utils/dateUtils";

function Calendar() {
  const [month, setMonth] = useState(dayjs().month());
  const [year, setYear] = useState(dayjs().year());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const newDays = getMonthDays(month, year);
    setDaysInMonth(newDays);
  }, [month, year]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Failed to load events:", err));
  }, []);

  const handlePreviousMonth = () => {
    const prevMonth = dayjs().year(year).month(month).subtract(1, "month");
    setMonth(prevMonth.month());
    setYear(prevMonth.year());
  };

  const handleNextMonth = () => {
    const nextMonth = dayjs().year(year).month(month).add(1, "month");
    setMonth(nextMonth.month());
    setYear(nextMonth.year());
  };

  const getEventsForDay = (date) => {
    if (!date) return [];
    return events.filter((event) => dayjs(event.startTime).isSame(date, "day"));
  };

  return (
    <div className="max-w-7xl w-full mx-auto mt-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
        <CalendarHeader
          month={dayjs().month(month).format("MMMM")}
          year={year}
          onPrev={handlePreviousMonth}
          onNext={handleNextMonth}
        />

        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-7 bg-gray-100 rounded-t-lg">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-gray-700 text-center py-2 text-xs sm:text-sm font-semibold bg-gray-200 border border-gray-300"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 border border-t-0 border-gray-300 rounded-b-lg">
              {daysInMonth.map((date, index) => (
                <DayCell
                  key={index}
                  day={date}
                  events={getEventsForDay(date)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
