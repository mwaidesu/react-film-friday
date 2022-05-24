import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "use-local-storage";
// import "../../index.css";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    getMovie();
  });

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=efb8d52d72f50732f48333d163521021&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        // const newMovie = data.find((item) => item.id === parseInt(id))
        // console.log(newMovie)
      })
      .catch((err) => alert.warn(err.message));
  };

  return (
    <>
      <div className="theme-div">
        <button
          className="theme-button bg-black px-3 py-2 text-white rounded-lg border-solid border-white border-2"
          id="btn"
          onClick={switchTheme}
        >
          Change Theme
        </button>
      </div>

      <div
        className="details flex py-5 px-10 items-center mt-4 "
        data-theme={theme}
      >
        <div className="details-image">
          <img
            src={IMG_URL + movie.poster_path}
            alt="poster"
            className="border m-4 rounded-lg"
          />

          {/* <img src={IMG_URL + movie.backdrop_path} alt="backdrop image" /> */}
        </div>
        <div class="details-extra m-12 text-xl">
          <h2 className="font-bold text-4xl">{movie.title}</h2>
          <p className="py-2 text-2xl">Rating: {movie.vote_average}</p>
          <p className="py-4 ">{movie.overview}</p>
          <p className="py-2">Release Date: {movie.release_date}</p>
          <p className="py-2">Runtime: {movie.runtime} minutes</p>
        </div>
      </div>
    </>
  );
};
