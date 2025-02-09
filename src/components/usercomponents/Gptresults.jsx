import React from 'react';
import { useSelector } from 'react-redux';
import Moviecard from './Moviecard';
import useNewTailer from '../../hooks/useNewTailer';

const Gptresults = () => {
  const gptMovieresults = useSelector((store) => store.gptSlice.gptMovies);
  const trailerData = useSelector((store) => store.moviesSlice.gpttrailerData);

  if (!gptMovieresults || gptMovieresults.length === 0) {
    return null;
  }

  const movieId = gptMovieresults[0]?.id;

  
 if(!trailerData){
  useNewTailer(movieId);
 }


  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="relative h-[80vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full scale-150 md:scale-100"
            src={`https://www.youtube.com/embed/${trailerData?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=${trailerData?.key}`}
            title="Featured Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex items-end pb-20 px-4 md:px-12 -mt-56">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
              {gptMovieresults[0]?.original_title}
            </h1>
          </div>
        </div>
      </div>

      <div className="relative z-20 bg-black/10 px-4 md:px-12 py-8 -mt-72">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Recommended Movies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6">
          {gptMovieresults.map((movie) => (
            <div
              key={movie?.id}
              className="transform transition-all duration-300 hover:scale-110 hover:z-30"
            >
              <div className="relative group">
                <Moviecard movie={movie} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Gptresults;
