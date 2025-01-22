import React from "react";
import useTrailerdata from "../../hooks/useTrailerdata";
import { useSelector } from "react-redux";
import Header from "../Header";

const Moviebackground = ({ movieId }) => {
  const trailerdata = useSelector((store) => store.moviesSlice.trailerData);
  useTrailerdata(movieId);

  return (
    <div className="-mt-2">
      {/* Fixed the src URL with proper template literal syntax */}
      <iframe
        className="w-screen aspect-video bg-gradient-to-r from-black"
        src={`https://www.youtube.com/embed/${trailerdata?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Moviebackground;
