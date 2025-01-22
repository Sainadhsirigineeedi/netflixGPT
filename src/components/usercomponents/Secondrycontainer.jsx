import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

const Secondrycontainer = () => {
  const movies = useSelector((store) => store.moviesSlice);
  
  return (
  <div className="bg-black w-full h-full">
      <div className="mt-0 md:-mt-56 pl-0 relative z-20 flex flex-col md:flex-row md:flex-wrap">
        <div className="overflow-x-auto h-60 md:h-80">
          <Movielist title={"Now playing"} movies={movies?.nowplayingdata} className="w-full"></Movielist>
        </div>
        <div className="overflow-x-auto h-60 md:h-80">
          <Movielist title={"Popular"} movies={movies?.populardata} className="w-full"></Movielist>
        </div>
        <div className="overflow-x-auto h-64 md:h-80">
          <Movielist title={"Top rated"} movies={movies?.toprateddata} className="w-full"></Movielist>
        </div>
        <div className="overflow-x-auto h-64 md:h-80">
          <Movielist title={"Up coming"} movies={movies?.upcomingdata} className="w-full"></Movielist>
        </div>
      </div>
  </div>
  )
};

export default Secondrycontainer;
