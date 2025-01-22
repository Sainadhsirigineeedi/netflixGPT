import React from 'react';
import Moviecard from './Moviecard'; 

const MovieList = ({ title, movies }) => {
  return (
    <div className='ml-2'>
      <h1 className='font-bold text-xl p-2 text-white'>{title}</h1>
      <div className="flex overflow-x-auto max-w-full">
        <div className="flex flex-nowrap space-x-4">
          {movies.map((movie) => (
            <Moviecard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
