import React from "react";
import dayjs from "dayjs";

export default function DayCell({ day, events }) {
  const isToday = day && day.isSame(dayjs(), "day");

  return (
    <div
      className={`border border-gray-200 p-2 h-28 sm:h-32 md:h-36 overflow-y-auto bg-white hover:bg-gray-50 transition duration-200 ease-in-out
        ${isToday ? "ring-2 ring-red-500 ring-offset-2" : ""}`}
    >
      <div className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
        {day ? day.date() : ""}
      </div>

      {events &&
        events.map((event, index) => (
          <div
            key={index}
            className="mb-1 rounded-md px-2 py-1 text-white text-xs sm:text-sm font-medium shadow-sm"
            style={{ backgroundColor: event.color }}
          >
            <div className="truncate">{event.title}</div>
            <div className="text-[10px] sm:text-xs font-normal text-white/80">
              {dayjs(event.startTime).format("hh:mm A")} -{" "}
              {dayjs(event.endTime).format("hh:mm A")}
            </div>
          </div>
        ))}
    </div>
  );
}
