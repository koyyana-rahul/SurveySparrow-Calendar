import React from 'react';

export default function CalendarHeader({ month, year, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-between mb-6 px-4 py-2 bg-white border-b border-gray-200 rounded-t-md shadow-sm">
      <button
        onClick={onPrev}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition"
      >
        ← Prev
      </button>
      <h2 className="text-xl font-semibold text-gray-800">
        {month} {year}
      </h2>
      <button
        onClick={onNext}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition"
      >
        Next →
      </button>
    </div>
  );
}
