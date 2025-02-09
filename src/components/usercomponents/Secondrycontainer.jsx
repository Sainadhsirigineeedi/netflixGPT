import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondrycontainer = () => {
  const movies = useSelector((store) => store.moviesSlice);
  
  return (
    <div className="bg-black -mt-10">
      <div className="relative z-20  md:px-6 lg:px-10 md:-mt-40 lg:-mt-52">
        <div className="space-y-6 md:space-y-12 pt-3">
          <div className="movie-section">
          
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 md:gap-4">
                <Movielist 
                  title={"Now playing"} 
                  movies={movies?.nowplayingdata} 
                />
              </div>
            </div>
          </div>

          <div className="movie-section">
         
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-1 md:gap-3">
                <Movielist 
                  title={"Popular"} 
                  movies={movies?.populardata} 
                />
              </div>
            </div>
          </div>

          <div className="movie-section">
           
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 md:gap-4">
                <Movielist 
                  title={"Top rated"} 
                  movies={movies?.toprateddata} 
                />
              </div>
            </div>
          </div>

          <div className="movie-section">
            <h2 className="text-white text-lg md:text-2xl font-bold mb-2 md:mb-4">Coming Soon</h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 md:gap-4">
                <Movielist 
                  title={"Up coming"} 
                  movies={movies?.upcomingdata} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .movie-section {
          position: relative;
        }
        .movie-section:hover {
          z-index: 30;
        }
      `}</style>
    </div>
  );
};

export default Secondrycontainer