import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [timezone, setTimezone] = useState("UTC");
  const [currentTime, setCurrentTime] = useState(""); // UTC time
  const [selectedTime, setSelectedTime] = useState(""); // Time for selected timezone

  // Function to fetch time based on selected timezone using client-side solution
  const fetchTime = () => {
    const utcDate = new Date(); // Current time in UTC

    // Format UTC time correctly
    const utcFormatted = utcDate.toLocaleString("en-US", { timeZone: "UTC" });

    // Format time for selected timezone
    const selectedFormatted = utcDate.toLocaleString("en-US", { timeZone: timezone });

    setCurrentTime(utcFormatted); // Update UTC time
    setSelectedTime(selectedFormatted); // Update time for selected timezone
  };

  useEffect(() => {
    fetchTime(); // Fetch time on component mount
    const interval = setInterval(fetchTime, 60000); // Update every minute (60000 ms)
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [timezone]); // Re-run whenever the timezone changes

  return (
    <div>
      {/* Header Section (White Background) */}
      <nav className="flex justify-between items-center px-6 py-5 bg-white shadow-md">
        <div className="pl-10">
          <h1 className="text-2xl font-bold text-black">Deborah Russell-A</h1>
          <p className="text-black text-lg">SEO Content Writer</p>
        </div>

        <ul className="flex gap-6">
          <li>
            <a href="#about" className="text-black hover:text-[#99489D]">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="text-black hover:text-[#99489D]">
              Projects
            </a>
          </li>
          <li>
            <a href="#blog" className="text-black hover:text-[#99489D]">
              Blog
            </a>
          </li>
          <li>
            <a href="#timezone" className="text-black hover:text-[#99489D]">
              Timezone Converter
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-[#99489D] text-white px-4 py-2 rounded-lg hover:bg-[#7A3A7D]"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between px-12 py-28">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./assets/portfolio.png"
            alt="Deborah Russell"
            className="rounded-lg w-96 h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold">I'm Deborah Russell</h1>
          <h2 className="text-2xl text-[#99489D] mt-4 font-bold">SEO Content Writer</h2>
          <p className="mt-6 text-gray-300 text-lg">
            Tired of getting low website traffic? Failed to make your articles rank for selected keywords on Google’s first page?
          </p>
          <p className="mt-4 text-gray-300 text-lg">
            I have the solution you have been looking for. Based on experience and expertise, I can help your articles rank higher in at least positions 2 and 3.
          </p>
          <button className="mt-8 bg-[#99489D] px-8 py-3 rounded-lg text-white text-lg font-bold hover:bg-[#7A3A7D] transition">
            Let’s Get Started →
          </button>
        </div>
      </div>

      {/* Timezone Converter Section */}
      <div id="timezone" className="mt-16 bg-black p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center">
          <i className="fas fa-clock text-[#99489D] mr-3"></i> Timezone Converter
        </h2>

        {/* Dropdown to select timezone */}
        <select
          className="p-3 rounded bg-gray-900 text-white text-lg mb-6"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)} // Update timezone state
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

        {/* Two big clocks side by side */}
        <div className="flex justify-between">
          {/* Left clock: Current time (UTC) */}
          <div className="text-center w-full md:w-1/2">
            <i className="fas fa-clock text-[#99489D] text-6xl"></i>
            <p className="mt-4 text-white text-2xl font-semibold">Current Time (UTC)</p>
            <p className="mt-2 text-white text-2xl">{currentTime}</p>
          </div>

          {/* Right clock: Time in selected timezone */}
          <div className="text-center w-full md:w-1/2">
            <i className="fas fa-clock text-[#99489D] text-6xl"></i>
            <p className="mt-4 text-white text-2xl font-semibold">Time in {timezone}</p>
            <p className="mt-2 text-white text-2xl">{selectedTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
