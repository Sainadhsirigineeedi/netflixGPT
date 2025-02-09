import React from "react";
import useTrailerdata from "../../hooks/useTrailerdata";
import { useSelector } from "react-redux";

const Moviebackground = ({ movieId }) => {
  const trailerdata = useSelector((store) => store.moviesSlice.trailerData);
  useTrailerdata(movieId);

  return (
    <div className="absolute inset-0 overflow-hidden ">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerdata?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${trailerdata?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Moviebackground