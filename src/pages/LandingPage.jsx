import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [timezone, setTimezone] = useState("UTC");
  const [currentTime, setCurrentTime] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Header Section */}
      <section id="header" className="header-section">
        <nav className="flex justify-between items-center px-6 md:px-12 py-5 bg-white shadow-md relative">
          <div className="ml-4 md:ml-16">
            <h1 className="text-2xl font-bold text-black">Deborah Russell-A</h1>
            <p className="text-black text-lg">SEO Content Writer</p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            <li><a href="#timezone" className="text-black hover:text-[#99489D]">Timezone Converter</a></li>
            <li><a href="#about" className="text-black hover:text-[#99489D]">About Me</a></li>
            <li><a href="#previouswork" className="text-black hover:text-[#99489D]">Previous Work</a></li>
            <li>
              <a href="#contact" className="bg-[#99489D] text-white px-4 py-2 rounded-lg hover:bg-[#7A3A7D]">
                Contact Me
              </a>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl text-black">
              {menuOpen ? "✖️" : "☰"}
            </button>
          </div>

          {/* Side Menu */}
          {menuOpen && (
            <div className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-md transform transition-transform duration-300 ease-in-out z-50">
              <div className="flex justify-end p-6">
                <button onClick={toggleMenu} className="text-black text-3xl">
                  &times;
                </button>
              </div>
              <ul className="flex flex-col gap-6 px-6 py-8">
                <li>
                  <a href="#timezone" onClick={toggleMenu} className="text-black hover:text-[#99489D]">
                    Timezone Converter
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={toggleMenu} className="text-black hover:text-[#99489D]">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#previouswork" onClick={toggleMenu} className="text-black hover:text-[#99489D]">
                    Previous Work
                  </a>
                </li>
                {/* Add some margin-top to space out the button */}
                <li className="mt-4">
                  <a href="#contact" onClick={toggleMenu} className="bg-[#99489D] text-white px-4 py-2 rounded-lg hover:bg-[#7A3A7D]">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </section>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="relative bg-black text-white flex flex-col md:flex-row items-center justify-start px-6 md:px-12 h-screen pb-20 md:pb-0">
          {/* Image Section - Left with Gradient */}
          <div className="w-full md:w-1/2 flex justify-start relative h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <img
              src="/assets/portfolio.png"
              alt="Deborah Russell"
              className="absolute inset-0 w-full h-full object-contain opacity-75"
            />
          </div>

          {/* Text Content - Aligned to Image */}
          <div className="w-full md:w-1/2 text-left flex flex-col justify-center pl-0 md:pl-16 pt-8 md:pt-0">
            <h1 className="text-5xl font-bold">I'm Deborah Russell</h1>
            <h2 className="text-2xl text-[#99489D] mt-4 font-bold">SEO Content Writer</h2>
            <p className="mt-6 text-gray-300 text-lg">
              Tired of getting low website traffic? Failed to make your articles rank for selected keywords on Google’s first page?
            </p>
            <p className="mt-4 text-gray-300 text-lg">
              I have the solution you have been looking for. Based on experience and expertise, I can help your articles rank higher in at least positions 2 and 3.
            </p>

            <div className="mt-8">
            <a href="#contact" className="inline-block">
    <button className="bg-[#99489D] px-8 py-3 rounded-lg text-white text-lg font-bold hover:bg-[#7A347D] transition">
      Let’s Get Started →
    </button>
  </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
