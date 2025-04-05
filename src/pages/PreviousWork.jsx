import React from "react";
const articles = [
  {
    title: "Idoma Tribe In Benue State",
    description: "One of the main ethnic groups in Benue State is the Idoma tribe, which has a fascinating and rich history characterised by migration. This article delves into various aspects of …",
    image: "/assets/idoma.jpg",
    link: "https://docs.google.com/document/d/1jX8-Th5S2iy9aGqKEUIOrLXNQkPg997VhFbfGCJ5NtI/edit?usp=sharing",
  },
  {
    title: "Monetizing Music Streams in 2025",
    description: "Explore modern tactics for independent musicians to make real income from Spotify and Apple Music.",
    image: "/assets/idoma.jpg",
    link: "https://yourwebsite.com/music-streams-monetization",
  },
  {
    title: "Mastering Digital Marketing for Creators",
    description: "Learn how content creators and musicians can leverage online marketing to scale their brand.",
    image: "/assets/idoma.jpg",
    link: "https://yourwebsite.com/digital-marketing",
  },
];

const PreviousWork = () => {
  return (
    <section
      id="previouswork"
      className="bg-gradient-to-b from-[#99489D] to-purple-700 py-14 px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-10">Previous Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Image with Gradient Overlay */}
              <div className="relative">
                <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{article.title}</h3>
                <p className="text-gray-300 mt-2">{article.description}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2 bg-white text-[#99489D] font-medium rounded-full hover:bg-gray-200 transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousWork;
