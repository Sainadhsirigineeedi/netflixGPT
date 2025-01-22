import React from "react";

const Movietitle = (props) => {
  const { original_title, overview } = props.mainmovie;
  return (
    <div className="px-3 py-3 absolute bg-gradient-to- text-white ">
      <div className="flex flex-col items-start ml-1 mt-20">
        <h1 className="text-2xl font-bold sm:text-lg">{original_title}</h1>
        <p className="w-full sm:w-2/3 text-sm sm:text-xs truncate">{overview}</p>
        <div className="flex flex-row mt-3">
          <button className="m-1 border rounded-lg px-6 py-2 bg-white bg-opacity-40 hover:bg-gray-600 mb-2 sm:mb-0 sm:mr-2">
            Play
          </button>
          <button className="m-1 border rounded-lg px-6 py-2 bg-white bg-opacity-40 hover:bg-gray-600 mb-2 sm:mb-0 sm:mr-2">
            moreinfo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movietitle;
