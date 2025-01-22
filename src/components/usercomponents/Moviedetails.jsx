import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { movieposterUrl, options } from '../../constanants';
import { div, h1 } from 'framer-motion/client';


const Moviedetails = () => {
const {id}=useParams();
const[movieDetails,setMovie]=useState(null);
const[castDetails,setCastDetails]=useState(null)
const [isLoading, setIsLoading] = useState(true);



const getMoviedatails=async()=>{
  try {
    setIsLoading(true);
    const response= await axios.get(`https://api.themoviedb.org/3/movie/${id}`,options);
    const cast=await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`,options);
   
     setMovie(response?.data)
     setCastDetails((cast?.data?.cast).slice(0,20))
  } catch (error) {
    console.log(error)
  } finally {
    setIsLoading(false);
  }

}
useEffect(()=>{
         getMoviedatails()
},[])
return (
    <div className="bg-cover h-screen" 
      style={{ backgroundImage: !isLoading ? `url(${movieposterUrl + movieDetails?.poster_path})` : 'none' }}>
      
      {isLoading ? (
        <div className="bg-gray-900 min-h-screen">
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="animate-pulse">
              <div className="h-10 bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-1/4 mb-6"></div>
              <div className="flex gap-2">
                <div className="h-8 w-20 bg-gray-700 rounded-full"></div>
                <div className="h-8 w-20 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
            <div className="container mx-auto px-4">
              <div className="h-8 bg-gray-700 rounded w-24 mb-4"></div>
              <div className="flex overflow-x-auto pb-6 gap-4">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="flex-none w-32 sm:w-40 md:w-48 bg-gray-800 rounded-lg">
                    <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-700 rounded-t-lg"></div>
                    <div className="p-3">
                      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black min-h-screen opacity-70 mb-20">
          <div className="p-10 sm:p-12 lg:p-16">
            <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl p-2">
              {movieDetails?.original_title}
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl p-1">{movieDetails?.overview}</p>
            <p className="text-white text-sm sm:text-base p-2">
              IMDB: {movieDetails?.vote_average} | {movieDetails?.runtime} min | {movieDetails?.release_date}
            </p>
            <div className="flex flex-wrap gap-3 mt-0">
              {movieDetails?.genres.map((g) => (
                <span key={g.id} className="bg-gray-800 text-white text-sm sm:text-base font-semibold px-3 py-1 rounded-full">
                  {g.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent mt-10">
        <div className=" mx-auto px-5 ">
          <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Cast</h2>
          <div className="flex overflow-x-auto pb-6 gap-4 scrollbar-hide" style={{ marginTop: '20px' }}>
            {castDetails?.map((actor) => (
              <div 
                key={actor.id} 
                className="flex-none w-32 sm:w-40 md:w-48 bg-black/80 rounded-lg shadow-xl 
                         hover:scale-105 transition-transform duration-200 border border-gray-800"
              >
                <img 
                  src={movieposterUrl + actor?.profile_path} 
                  alt={actor?.original_name} 
                  className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-lg"
                />
                <div className="p-3 text-white">
                  <h2 className="text-sm sm:text-base font-semibold truncate">{actor?.character}</h2>
                  <h3 className="text-xs sm:text-sm text-gray-400 truncate">{actor?.original_name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Moviedetails