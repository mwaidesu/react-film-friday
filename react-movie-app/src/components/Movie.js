import React from "react";

const IMG_URL = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, overview, poster_path, vote_average }) => {
  const strArray = title.split(" ");
  for (var i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  }
  title = strArray.join(" ");

  return (
    <div className="movie">
      <img src={IMG_URL + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{vote_average.toFixed(1)}</h3>
      </div>
      <div className="movie-over">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;

//36.00
