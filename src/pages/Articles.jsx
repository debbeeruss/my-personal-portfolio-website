import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Idoma Tribe In Benue State",
    description:
      "One of the main ethnic groups in Benue State is the Idoma tribe, which has a fascinating and rich history characterised by migration. This article delves into various aspects of …",
    image: "/assets/idoma.jpg",
    link: "https://docs.google.com/document/d/1jX8-Th5S2iy9aGqKEUIOrLXNQkPg997VhFbfGCJ5NtI/edit?usp=sharing",
  },
  {
    title: "Tiv Tribe In Benue State",
    description:
      "The Tiv tribe is located between 6° 30′ and 8° 10′ north latitude and 8° and 10° east longitude, sharing boundaries with Chamba, Jukun, Igede, Iyala, Gakem, Obudu, Idoma, Mada, and Kolo in Taraba State, and Idoma, Mada, and Kolo in Nassarawa State...",
    image: "/assets/tivv.jpg",
    link: "https://docs.google.com/document/d/18KZ-Zi7xZPZvgZPyWVB17-UtGFZkNj_rqObn_lkuMwk/edit?usp=sharing",
  },
  {
    title: "Igala Tribe In Kogi State",
    description:
      "Location of the Igala tribe The Igala tribe is a major ethnic group in Kogi State, Nigeria, located on the eastern side of the Niger and Benue confluence, covering an …",
    image: "/assets/igala.jpg",
    link: "https://docs.google.com/document/d/12DjmGiHwBc48B49LGB3dzpCJC5DnO-RoEYXkjGTR2nA/edit?usp=sharing",
  },
  // Add more articles here as needed
];

const Articles = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Header with Back Link */}
      <div className="bg-[#99489D] py-6 px-6 md:px-12 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">All Articles</h1>
        <Link
          to="/"
          className="text-white hover:text-gray-200 bg-white/20 px-4 py-2 rounded-lg transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Articles Grid */}
      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-50 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {article.description}
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 bg-[#99489D] text-white font-medium rounded-full hover:bg-[#7A347D] transition"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;