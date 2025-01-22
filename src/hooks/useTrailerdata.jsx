import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../constanants";
import { addTrailerdata } from "../components/utils/moviesSlice";
const useTrailerdata = (movieId) => {
  const dispatch = useDispatch();
  const getMovievideos = async () => {
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
    dispatch(addTrailerdata(trailer));
  };
  useEffect(() => {
    getMovievideos();
  }, []);
};
export default useTrailerdata;
