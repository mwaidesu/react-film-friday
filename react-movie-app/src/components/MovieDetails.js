import React from 'react'


const MovieDetails = ({ title, overview, poster_path, vote_average }) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w1280";


  return (
    <div>
      <img src={IMG_URL + poster_path} alt={title} />
      <h1>{title}</h1>
      <p>{overview}</p>
      <p>{vote_average}</p>
    </div>
  );
};

export default MovieDetails
