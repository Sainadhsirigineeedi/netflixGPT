import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../constanants';
import { addUpcomingdata } from '../components/utils/moviesSlice';


const useUpcoming = () => {
    const dispatch = useDispatch();
    const upcoming = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          options
        );
       
        dispatch(addUpcomingdata(response.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      upcoming()
    }, []);
}

export default useUpcoming