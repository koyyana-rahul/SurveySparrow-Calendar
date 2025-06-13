import React from "react";

export default function CalendarHeader({ month, year, onPrev, onNext }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 mb-6 px-4 py-3 bg-white border-b border-gray-200 rounded-t-md shadow-sm">
      <button
        onClick={onPrev}
        className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition"
      >
        ← Prev
      </button>

      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
        {month} {year}
      </h2>

      <button
        onClick={onNext}
        className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition"
      >
        Next →
      </button>
    </div>
  );
}
