import React from 'react';
import Moviecard from './Moviecard';

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="movie-row px-2 md:px-3 mt-8">
      <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">{title}</h2>
      <div className="relative group">
        <div className="overflow-x-scroll scrollbar-hide">
          <div className="flex gap-2 md:gap-4 transition-transform duration-300 ease-out">
            {movies.map((movie) => (
              <div 
                key={movie.id} 
                className="flex-none w-[160px] md:w-[200px] lg:w-[240px] transform transition-transform duration-300 hover:scale-105 hover:z-10"
              >
                <Moviecard movie={movie} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient Shadows */}
        <div className="absolute top-0 bottom-0 left-0 w-[40px] bg-gradient-to-r from-black to-transparent z-[1] pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-[40px] bg-gradient-to-l from-black to-transparent z-[1] pointer-events-none"></div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .movie-row:hover .movie-card {
          transform: translateX(-25%);
        }
        .movie-row .movie-card:hover ~ .movie-card {
          transform: translateX(25%);
        }
      `}</style>
    </div>
  );
};

export default MovieList;