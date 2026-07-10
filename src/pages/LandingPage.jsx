import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [timezone, setTimezone] = useState("UTC");
  const [currentTime, setCurrentTime] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [isDark, setIsDark] = useState(false);

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

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setAnimationCompleted(true);
    }, 500);
    return () => clearTimeout(typingTimeout);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDark = () => setIsDark(!isDark);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <section id="header" className="header-section">
        <nav className="flex justify-between items-center px-6 md:px-12 py-5 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 relative transition-colors duration-300">
          <div className="ml-4 md:ml-16">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Deborah Russell-A
            </h1>
            <p className="text-black dark:text-gray-300 text-lg">
              SEO Content Writer
            </p>
          </div>

          <ul className="hidden md:flex gap-6 items-center">
            <li><a href="#timezone" className="text-black dark:text-gray-200 hover:text-[#99489D] dark:hover:text-[#99489D] transition-colors">Timezone Converter</a></li>
            <li><a href="#about" className="text-black dark:text-gray-200 hover:text-[#99489D] dark:hover:text-[#99489D] transition-colors">About Me</a></li>
            <li><a href="#previouswork" className="text-black dark:text-gray-200 hover:text-[#99489D] dark:hover:text-[#99489D] transition-colors">Previous Work</a></li>
            <li><a href="#contact" className="bg-[#99489D] text-white px-4 py-2 rounded-lg hover:bg-[#7A3A7D] transition-colors">Contact Me</a></li>
            <li>
              <button onClick={toggleDark} className="text-2xl text-black dark:text-white hover:text-[#99489D] dark:hover:text-[#99489D] transition">
                {isDark ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>

          {/* Mobile: ONLY the small X (hamburger) before the dark mode icon */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Small X that stays (changes from ☰ to ✖️ when open) */}
            <button onClick={toggleMenu} className="text-3xl text-black dark:text-white">
              {menuOpen ? "✖️" : "☰"}
            </button>
            {/* Dark mode icon */}
            <button onClick={toggleDark} className="text-2xl text-black dark:text-white hover:text-[#99489D] transition">
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>

          {menuOpen && (
            <>
              <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={toggleMenu} />
              <div className="fixed top-0 left-0 w-2/3 h-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 ease-in-out z-50">
                {/* NO X inside the menu - only the hamburger X closes it */}
                <ul className="flex flex-col gap-6 px-6 py-12 mt-4">
                  <li><a href="#timezone" onClick={toggleMenu} className="text-black dark:text-white hover:text-[#99489D] transition-colors text-lg">Timezone Converter</a></li>
                  <li><a href="#about" onClick={toggleMenu} className="text-black dark:text-white hover:text-[#99489D] transition-colors text-lg">About Me</a></li>
                  <li><a href="#previouswork" onClick={toggleMenu} className="text-black dark:text-white hover:text-[#99489D] transition-colors text-lg">Previous Work</a></li>
                  <li className="mt-4">
                    <a href="#contact" onClick={toggleMenu} className="bg-[#99489D] text-white px-6 py-3 rounded-lg hover:bg-[#7A347D] transition-colors inline-block">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </nav>
      </section>

      <section id="hero" className="hero-section">
        <div className="relative bg-black dark:bg-gray-950 text-white flex flex-col md:flex-row items-center justify-start px-6 md:px-12 min-h-[100svh] overflow-hidden transition-colors duration-300">
          <div className="w-full md:w-1/2 relative flex items-center justify-center h-[300px] md:h-full overflow-hidden">
            <img src="/assets/portfolio.png" alt="Deborah Russell" className="w-full h-full object-cover opacity-75 object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black dark:from-gray-950 via-transparent to-transparent z-10" />
          </div>
          <div className={`w-full md:w-1/2 text-left flex flex-col justify-center pl-0 md:pl-16 pt-8 md:pt-0 ${animationCompleted ? "slide-in" : ""}`}>
            <h1 className="text-5xl font-bold text-white">I'm Deborah Russell</h1>
            <h2 className="text-2xl text-[#99489D] mt-4 font-bold">SEO Content Writer</h2>
            <p className="mt-6 text-gray-300 dark:text-gray-400 text-lg">
              Tired of getting low website traffic? Failed to make your articles rank for selected keywords on Google's first page?
            </p>
            <p className="mt-4 text-gray-300 dark:text-gray-400 text-lg">
              I have the solution you have been looking for. Based on experience and expertise, I can help your articles rank higher in at least positions 2 and 3.
            </p>
            <div className="mt-8 mb-7">
              <a href="#contact" className="inline-block">
                <button className="bg-[#99489D] px-8 py-3 rounded-lg text-white text-lg font-bold hover:bg-[#7A347D] transition-colors">
                  Let's Get Started →
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes slide-in {
            0% { transform: translateX(100%); }
            100% { transform: translateX(0); }
          }
          .slide-in {
            animation: slide-in 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;