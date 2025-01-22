import { h1 } from "framer-motion/client";
import React from "react";
import { useSelector } from "react-redux";
import Movietitle from "./Movietitle";
import Moviebackground from "./Moviebackground";
import Header from "../Header";


const Maincontainer = () => {
  const Nowpalyingdata = useSelector(
    (store) => store.moviesSlice?.nowplayingdata
  );

  if (Nowpalyingdata.length < 1) {
    return <h1>no data</h1>;
  }
  const Mainmovie = Nowpalyingdata[0];

  return (
    <div>
      
      <Movietitle mainmovie={Mainmovie}></Movietitle>
      <Moviebackground movieId={Mainmovie.id}></Moviebackground>
    </div>
  );
};

export default Maincontainer;
