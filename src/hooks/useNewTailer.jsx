import axios from 'axios';
import React, { useEffect } from 'react'
import { options } from '../constanants';
import { useDispatch, useSelector } from 'react-redux';
import { addgptTailerdata } from '../components/utils/moviesSlice';



const useNewTailer = async(movieId) => {
   const dispatch=useDispatch()
    const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            options
          );
        
          const Videoresponses = response.data.results;
          const filteredVideos = Videoresponses.filter(
            (video) => video.type == "Trailer"
          );
          const trailer =
            filteredVideos.length > 0 ? filteredVideos[0] : Videoresponses[0];
         
         dispatch(addgptTailerdata(trailer))
    
     
      
    
}



export default useNewTailer