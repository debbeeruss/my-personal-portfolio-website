import React, { useState } from "react";

const KeywordRanker = () => {
  const [keyword, setKeyword] = useState("");
  const [website, setWebsite] = useState("");
  const [rankingData, setRankingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle the API request for keyword ranking
  const handleCheckRank = async () => {
    if (!keyword || !website) {
      setError("Please enter both keyword and website.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const countries = [
        { code: "US", name: "United States" },
        { code: "IN", name: "India" },
        { code: "GB", name: "United Kingdom" },
        { code: "CA", name: "Canada" },
        { code: "AU", name: "Australia" },
        { code: "DE", name: "Germany" },
      ];

      const ranks = [];

      for (const country of countries) {
        const response = await fetch(
          `https://serpapi.com/search?engine=google&q=${keyword}&location=${country.name}&google_domain=google.com&gl=${country.code}&hl=en&api_key=YOUR_REAL_API_KEY`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from SerpApi");
        }

        const data = await response.json();

        const rank = data.organic_results.findIndex(
          (result) => result.link === website
        ) + 1;

        ranks.push({
          country: country.name,
          rank: rank > 0 ? rank : "Not Ranked",
        });
      }

      setRankingData(ranks);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching the keyword rank. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="mt-16 p-12 bg-black text-white text-center relative overflow-hidden">
      {/* Background Colorful Icons */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 z-0">
        <i className="fas fa-globe-americas absolute top-20 left-10 text-[#99489D] text-6xl animate-pulse opacity-40" />
        <i className="fas fa-search absolute top-40 left-1/4 text-[#99489D] text-6xl animate-pulse opacity-40" />
        <i className="fas fa-clock absolute top-60 left-1/2 text-[#99489D] text-6xl animate-pulse opacity-40" />
        <i className="fas fa-cogs absolute top-40 right-10 text-[#99489D] text-6xl animate-pulse opacity-40" />
        <i className="fas fa-chart-line absolute top-10 right-10 text-[#99489D] text-6xl animate-pulse opacity-40" />
      </div>

      <h2 className="text-3xl font-bold mb-6 z-10 relative">Keyword Ranker</h2>

      {/* Input Fields */}
      <div className="mb-6 z-10 relative">
        <div className="relative flex items-center">
          <i className="fas fa-search absolute left-4 text-[#99489D] text-xl" />
          <input
            type="text"
            placeholder="Enter keyword"
            className="p-4 pl-12 rounded bg-gray-900 text-white text-lg w-80 mx-auto mb-4 focus:outline-none focus:ring-2 focus:ring-[#99489D]"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6 z-10 relative">
        <div className="relative flex items-center">
          <i className="fas fa-link absolute left-4 text-[#99489D] text-xl" />
          <input
            type="text"
            placeholder="Enter website URL"
            className="p-4 pl-12 rounded bg-gray-900 text-white text-lg w-80 mx-auto mb-4 focus:outline-none focus:ring-2 focus:ring-[#99489D]"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
      </div>

      {/* Button to check rank */}
      <button
        onClick={handleCheckRank}
        className="mt-4 bg-[#99489D] px-8 py-3 rounded-lg text-white text-lg font-bold hover:bg-[#7A3A7D] transition-all duration-300 z-10 relative"
      >
        <i className="fas fa-search inline-block mr-2" />
        Check Keyword Rank
      </button>

      {/* Loading and Error Messages */}
      {loading && <p className="mt-4 text-white">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Display Results */}
      {rankingData && (
        <div className="mt-6 text-left w-full max-w-2xl mx-auto z-10 relative">
          <h3 className="text-2xl font-semibold mb-4">Keyword Rankings by Country:</h3>
          <div className="space-y-4">
            {rankingData.map((rank, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h4 className="text-xl font-bold">{rank.country}</h4>
                <p className="text-lg">{rank.rank}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default KeywordRanker;
