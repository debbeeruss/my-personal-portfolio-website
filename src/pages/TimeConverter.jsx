import React, { useState, useEffect } from "react";

const TimeConverter = () => {
  const [timezone, setTimezone] = useState("UTC");
  const [currentTime, setCurrentTime] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const fetchTime = () => {
    const utcDate = new Date();
    const utcFormatted = utcDate.toLocaleString("en-US", { timeZone: "UTC" });
    const selectedFormatted = utcDate.toLocaleString("en-US", { timeZone: timezone });

    setCurrentTime(utcFormatted);
    setSelectedTime(selectedFormatted);
  };

  useEffect(() => {
    fetchTime();
    const interval = setInterval(fetchTime, 60000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div id="timezone" className="mt-16 bg-white p-12 text-center shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-black mb-6 flex items-center justify-center">
        <i className="fas fa-clock text-[#99489D] mr-1"></i> {/* Reduced margin-right */}
        Timezone Converter
      </h2>

      <select
        className="p-3 rounded border border-gray-300 text-black text-lg mb-8"
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
      >
        <option value="UTC">UTC</option>
        <option value="America/New_York">New York (EST)</option>
        <option value="America/Los_Angeles">Los Angeles (PST)</option>
        <option value="Europe/London">London (GMT)</option>
        <option value="Europe/Paris">Paris (CET)</option>
        <option value="Europe/Berlin">Berlin (CET)</option>
        <option value="Africa/Cairo">Cairo (EET)</option>
        <option value="Africa/Nairobi">Nairobi (EAT)</option>
        <option value="Africa/Johannesburg">Johannesburg (SAST)</option>
        <option value="Africa/Lagos">Lagos (WAT - Nigeria)</option>
        <option value="Asia/Tokyo">Tokyo (JST)</option>
        <option value="Asia/Shanghai">Shanghai (CST)</option>
        <option value="Asia/Kolkata">Mumbai (IST)</option>
        <option value="Australia/Sydney">Sydney (AEST)</option>
      </select>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="text-center w-full md:w-1/2 mb-10 md:mb-0">
          <i className="fas fa-clock text-[#99489D] text-6xl"></i>
          <p className="mt-4 text-gray-800 text-2xl font-semibold">Current Time (UTC)</p>
          <p className="mt-2 text-gray-700 text-2xl">{currentTime}</p>
        </div>

        <div className="text-center w-full md:w-1/2 mb-10 md:mb-0">
          <i className="fas fa-clock text-[#99489D] text-6xl"></i>
          <p className="mt-4 text-gray-800 text-2xl font-semibold">Time in {timezone}</p>
          <p className="mt-2 text-gray-700 text-2xl">{selectedTime}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeConverter;
