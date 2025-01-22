import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../constanants';
import { addToprateddata } from '../components/utils/moviesSlice';


const useToprated = () => {
    const dispatch = useDispatch();
    const popular = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
          options
        );
        dispatch(addToprateddata(response.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      popular()
    }, []);
}

export default useToprated