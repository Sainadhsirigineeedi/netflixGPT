import React from 'react';

const Movietitle = ({ mainmovie }) => {
  return (
    <div className="absolute inset-0 z-20 ">
      <div className="w-full h-full flex flex-col justify-end -mt-24">
      
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
        
     
        <div className="relative px-4 md:px-12 lg:px-24 pb-6 md:pb-16 lg:pb-20 space-y-2 md:space-y-4">
         
          <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-6xl font-bold text-white drop-shadow-lg max-w-3xl">
            {mainmovie?.title}
          </h1>

      
          <p className="text-sm sm:text-base md:text-sm text-white w-full md:w-2/3 lg:w-1/2 
                        line-clamp-2 sm:line-clamp-3 md:line-clamp-4 
                        drop-shadow-lg opacity-90">
            {mainmovie?.overview}
          </p>
{/* 
          <div className="flex items-center gap-2 sm:gap-3 pt-2">
            <button className="flex items-center justify-center 
                             bg-white hover:bg-white/90 text-black
                             px-4 sm:px-6 md:px-8 lg:px-12 
                             py-1 sm:py-2 md:py-3 lg:py-4
                             text-sm sm:text-base md:text-lg lg:text-xl 
                             rounded-md md:rounded-lg 
                             transition-all duration-300">
              <span className="mr-2">▶️</span>
              <span className="font-medium">Play</span>
            </button>

            <button className="flex items-center justify-center 
                             bg-gray-500/50 hover:bg-gray-500/70 text-white
                             px-4 sm:px-6 md:px-8 lg:px-12 
                             py-1 sm:py-2 md:py-3 lg:py-4
                             text-sm sm:text-base md:text-lg lg:text-xl 
                             rounded-md md:rounded-lg 
                             transition-all duration-300">
              More Info
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Movietitle;