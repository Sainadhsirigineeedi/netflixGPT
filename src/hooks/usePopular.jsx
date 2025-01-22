import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../constanants';
import { addPopulardata } from '../components/utils/moviesSlice';


const usePopular = () => {
    const dispatch = useDispatch();
    const popular = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2'",
          options
        );
        dispatch(addPopulardata(response.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      popular()
    }, []);
}

export default usePopular