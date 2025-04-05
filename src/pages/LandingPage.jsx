import React, { useState, useEffect } from "react";

const LandingPage = () => {
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
    <div>
      {/* Header Section */}
      <section id="header" className="header-section">
        <nav className="flex justify-between items-center px-12 py-5 bg-white shadow-md">
          <div className="ml-16">
            <h1 className="text-2xl font-bold text-black">Deborah Russell-A</h1>
            <p className="text-black text-lg">SEO Content Writer</p>
          </div>

          <ul className="flex gap-6">
            <li><a href="#timezone" className="text-black hover:text-[#99489D]">Timezone Converter</a></li>
            <li><a href="#about" className="text-black hover:text-[#99489D]">About Me</a></li>
            <li><a href="#previouswork" className="text-black hover:text-[#99489D]">Previous Work</a></li>
            <li>
              <a href="#contact" className="bg-[#99489D] text-white px-4 py-2 rounded-lg hover:bg-[#7A3A7D]">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="relative bg-black text-white flex flex-col md:flex-row items-center justify-start px-12 h-screen">
          {/* Image Section - Left with Gradient */}
          <div className="w-full md:w-1/2 flex justify-start relative h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <img
              src="/assets/portfolio.png"
              alt="Deborah Russell"
              className="absolute bottom-0 left-0 h-full object-cover opacity-75"
            />
          </div>

          {/* Text Content - Aligned to Image */}
          <div className="w-full md:w-1/2 text-left flex flex-col justify-center pl-16">
            <h1 className="text-5xl font-bold">I'm Deborah Russell</h1>
            <h2 className="text-2xl text-[#99489D] mt-4 font-bold">SEO Content Writer</h2>
            <p className="mt-6 text-gray-300 text-lg">
              Tired of getting low website traffic? Failed to make your articles rank for selected keywords on Google’s first page?
            </p>
            <p className="mt-4 text-gray-300 text-lg">
              I have the solution you have been looking for. Based on experience and expertise, I can help your articles rank higher in at least positions 2 and 3.
            </p>

            <div className="mt-8">
              <button className="bg-[#99489D] px-8 py-3 rounded-lg text-white text-lg font-bold hover:bg-[#7A3A7D] transition">
                Let’s Get Started →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
