import React from "react";
import dayjs from "dayjs";

export default function DayCell({ day, events }) {
  const isToday = day && day.isSame(dayjs(), "day");

  return (
    <div
      className={`border border-gray-200 h-32 p-2 overflow-y-auto bg-white hover:bg-gray-50 transition ${
        isToday ? "ring-2 ring-red-400 ring-offset-1" : ""
      }`}
    >
      <div className="text-sm font-semibold text-gray-800 mb-1">
        {day ? day.date() : ""}
      </div>

      {events &&
        events.map((event, index) => (
          <div
            key={index}
            className="mb-1 rounded-md px-2 py-1 text-white text-xs font-medium shadow-sm"
            style={{ backgroundColor: event.color }}
          >
            <div>{event.title}</div>
            <div className="text-[10px] font-normal text-white/80">
              {dayjs(event.startTime).format("HH:mm")} -{" "}
              {dayjs(event.endTime).format("HH:mm")}
            </div>
          </div>
        ))}
    </div>
  );
}
