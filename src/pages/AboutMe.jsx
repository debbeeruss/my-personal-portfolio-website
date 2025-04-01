import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title Centered Above Content */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">ABOUT ME</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section with Purple Background */}
          <div className="relative flex justify-center">
            <div
              className="absolute top-6 left-6 w-[90%] h-[95%] rounded-lg -z-10"
              style={{ backgroundColor: "#99489D" }} // Purple Background
            ></div>
            <img
              src="src\assets\portfolio.png" 
              alt="Deborah Russell"
              className="relative rounded-lg shadow-lg w-full max-w-sm"
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-gray-700 mb-6 text-lg">
              Be a step ahead of your competitors' websites with the help of an SEO
              Content Writer you can rely on.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              I'm Deborah Russell-A, an SEO Content Writer with three years of
              experience in the writing industry. I developed an interest in writing
              in secondary school but took it as a hobby.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              A few months after graduation, I took a Digital Marketing certification
              course by Side Hustle (now Terra Learning). I learned about SEO and
              decided to give it a try.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Within the past few years, I have successfully written articles that
              ranked on Google’s first page for specific keywords in the SaaS
              industry.
            </p>
            <p className="text-gray-700 mb-8 text-lg">I can help you achieve this too!</p>

            {/* Button with Updated Background Color */}
            <div>
              <a
                href="#"
                className="text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
                style={{ backgroundColor: "#99489D" }} // Button Background Updated
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
