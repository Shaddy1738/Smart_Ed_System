import React, { useState, useEffect } from "react";
import Sider from "./Sider";

const Routine = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Sample routine data (you'll likely fetch this from an API or database)
  const dailyRoutine = [
    { time: "8:00 AM", event: "Morning Workout" },
    { time: "9:00 AM", event: "Breakfast" },
    { time: "10:00 AM", event: "Work Meeting" },
    { time: "12:00 PM", event: "Lunch" },
    { time: "2:00 PM", event: "Project Work" },
    { time: "5:00 PM", event: "Gym" },
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen flex">
      {/* Sidebar */}
      <Sider isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`transition-margin-left duration-300 ease-in-out ${
          isOpen ? "ml-64" : "ml-0"
        } p-4 w-full`} // Adjusted width to w-full
      >
        {!isOpen && (
          <button
            onClick={toggleSidebar}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-1 rounded"
            style={{ width: "30px", height: "30px" }}
          >
            <img
              src="src/icons/menu-icon.gif"
              alt="Menu"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        )}

        {/* Main Content Area */}
        <main className="flex flex-col p-8">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Daily Routine</h1>
            <div className="flex items-center">
              <button
                onClick={() => handleDateChange(-1)}
                className="bg-purple-700 rounded-md p-2 mr-2 m-3"
              >
                &lt;
              </button>
              <span className="mr-2">{formatDate(selectedDate)}</span>
              <button
                onClick={() => handleDateChange(1)}
                className="bg-purple-700 rounded-md p-2 mr-4"
              >
                &gt;
              </button>
              <button className="bg-purple-700 rounded-md p-2 ">
                + Add Event
              </button>
            </div>
          </header>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Calendar view */}
            <div className="bg-gray-900 rounded-md p-4 flex-grow">
              <h2 className="text-lg font-semibold mb-4">Calendar</h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Time</th>
                    <th className="text-left">Event</th>
                  </tr>
                </thead>
                <tbody>
                  {dailyRoutine.map((item, index) => (
                    <tr key={index}>
                      <td>{item.time}</td>
                      <td>{item.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Event List */}
            <div className="bg-gray-900 rounded-md p-4 w-full md:w-1/3">
              <h2 className="text-lg font-semibold mb-4">Event List</h2>
              <ul>
                {dailyRoutine.map((item, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-semibold">{item.time}</span> -{" "}
                    {item.event}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Routine;