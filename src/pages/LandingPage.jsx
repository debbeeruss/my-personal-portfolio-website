import React from "react";
import "../index.css";

const LandingPage = () => {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col px-6">
      {/* Navigation */}
      <nav className="w-full flex justify-between items-center py-6 px-10">
        <h1 className="text-2xl font-bold">Deborah Russell-A</h1>
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-primary">About Me</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#blog" className="hover:text-primary">Blog</a>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg">Contact Me</button>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-between flex-1 px-10">
        {/* Left Side - Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src="/assets/portfolio.png"
            alt="Deborah Russell"
            className="w-[400px] h-auto rounded-full shadow-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-1/2 text-right">
          <h2 className="text-5xl font-bold">I’m Deborah Russell</h2>
          <h3 className="text-3xl text-primary font-semibold">SEO Content Writer</h3>
          <p className="max-w-lg mt-4">
            Struggling with website traffic? I can help your articles rank higher with my expertise in SEO.
          </p>
          <button className="mt-6 bg-primary text-white px-6 py-3 rounded-lg text-lg">
            Let’s Get Started →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
