import React from "react";
import { useSelector } from "react-redux";
import Movietitle from "./Movietitle";
import Moviebackground from "./Moviebackground";

const Maincontainer = () => {
  const Nowpalyingdata = useSelector(
    (store) => store.moviesSlice?.nowplayingdata
  );

  if (Nowpalyingdata.length < 1) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-2xl">Loading...</h1>
      </div>
    );
  }
  
  const Mainmovie = Nowpalyingdata[0];

  return (
    <div className="relative w-full h-[56.25vw] min-h-[400px] max-h-[80vh] bg-black">
      <Moviebackground movieId={Mainmovie.id} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black ">
      <Movietitle mainmovie={Mainmovie} />
      </div>
     
    </div>
  );
};

export default Maincontainer;