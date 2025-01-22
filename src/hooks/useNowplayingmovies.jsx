import { options } from "../constanants";
import { useDispatch, useSelector } from "react-redux";
import { addNowplaying } from "../components/utils/moviesSlice";
import { useEffect } from "react";
import axios from "axios";

const useNowplayingmovies = () => {
  const dispatch = useDispatch();
  const Nowpalying = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      dispatch(addNowplaying(response.data.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Nowpalying();
  }, []);
};

export default useNowplayingmovies;
