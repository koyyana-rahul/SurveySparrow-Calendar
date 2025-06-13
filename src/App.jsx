import React from "react";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100">
      <header className="py-6 px-4 text-center bg-white shadow-md">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 tracking-tight">
          My Event Calendar
        </h1>
      </header>
      <main className="flex-grow px-4 sm:px-6 lg:px-12 py-6 w-full">
        <Calendar />
      </main>
    </div>
  );
}

export default App;
