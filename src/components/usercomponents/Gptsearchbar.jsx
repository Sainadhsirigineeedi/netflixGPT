import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import React, { useState } from "react";
import { options } from "../../constanants";
import { useDispatch } from "react-redux";
import { addGptMoviedata } from "../utils/gptSlice";

const Gptsearchbar = () => {
  const secretKey = process.env.SECRET_KEY;
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchTmdbMovieDetails = async (moviename) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(moviename)}&include_adult=false&language=en-US&page=1`,
        options
      );
      return response?.data?.results[0];
    } catch (error) {
      console.error(`Error fetching details for ${moviename}:`, error);
      return null;
    }
  };

  const handleSearch = async () => {
    if (!searchText.trim()) {
      setError("Please enter a search term");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const genAI = new GoogleGenerativeAI(secretKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt =
        "Act as a movie recommendation system suggest some movies for the query: " +
        searchText +
        " only give me names of 20 movies comma separated. Focus on highly rated and popular movies that match the query.";

      const result = await model.generateContent(prompt);
      const movies = result.response.text().split(",").map(movie => movie.trim());

      const tmdbMoviesPromises = movies.map(movie => searchTmdbMovieDetails(movie));
      const tmdbMoviesData = await Promise.all(tmdbMoviesPromises);
      
      // Filter out null results and dispatch
      const validMovies = tmdbMoviesData.filter(movie => movie !== null);
      
      if (validMovies.length > 0) {
        dispatch(addGptMoviedata(validMovies));
        setSearchText(""); // Clear search after successful search
      } else {
        setError("No movies found. Please try a different search.");
      }
    } catch (error) {
      console.error("Search error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full p-2">
      <div className="relative flex flex-col gap-2">
        {/* Search Input and Button */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <div className="relative flex-grow">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyPress={handleKeyPress}
              type="text"
              className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 border-2 border-transparent focus:border-red-600 focus:outline-none transition-colors"
              placeholder="What would you like to watch today?"
              disabled={isLoading}
            />
            {searchText && (
              <button
                onClick={() => setSearchText("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
          <button
            className={`px-6 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 ${
              isLoading
                ? 'bg-red-800 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700 active:scale-95'
            }`}
            onClick={handleSearch}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Searching...</span>
              </div>
            ) : (
              'Search'
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 text-sm mt-2 text-center bg-red-500/10 p-2 rounded-lg">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gptsearchbar;