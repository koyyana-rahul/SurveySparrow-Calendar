import React from "react";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100">
      <header className="py-6 text-center bg-white shadow-md">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          My Event Calendar
        </h1>
      </header>
      <main className="flex-grow p-4">
        <Calendar />
      </main>
    </div>
  );
}

export default App;
