import React from 'react';
import { movieposterUrl } from '../../constanants';
import { useNavigate } from 'react-router-dom';

const Moviecard = ({ movie }) => {
  const navigate=useNavigate();
  if(!movie){
    return ""
  }
  const handle = (id)=>{
    navigate(`/userhome/moviedetails/${id}`)
  }
  return (
    <div className="px-2 w-40 hover:shadow-lg" onClick={()=>{handle(movie.id)}}> 
      <img src={movieposterUrl + movie?.poster_path} alt="movie" className="w-full" />
    </div>
  );
}

export default Moviecard;
