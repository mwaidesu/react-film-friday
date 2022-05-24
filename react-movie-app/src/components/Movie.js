import React from "react";
import {Link} from 'react-router-dom'

const IMG_URL = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, overview, poster_path, vote_average,id }) => {
  const strArray = title.split(" ");
  for (var i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  }
  title = strArray.join(" ");

  return (
    <Link to={`/movie/${id}`} key={id}>
      <div className="movie">
        <img src={IMG_URL + poster_path} alt={title} />
        <div className="movie-info">
          <h3 className="text-lg font-bold">{vote_average.toFixed(1)}</h3>
        </div>
        <div className="movie-over">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default Movie;

//36.00
