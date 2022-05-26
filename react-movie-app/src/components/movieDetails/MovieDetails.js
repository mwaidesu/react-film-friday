import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import AddFavorites from "../AddFavorites";
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
// import "./MovieDetails.css";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  // const [favorites,setFavorites] =useState([])

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
      })
      .catch((err) => alert.warn(err.message));
  };

  const notify = () => {
    toast.success(movie.title + " has been added to favorites!");
  };

  return (
    <>
      <div className="details flex py-5 px-10 items-center mt-4 ">
        <div className="details-image">
          <img
            src={IMG_URL + movie.poster_path}
            alt="poster"
            className="border m-4 rounded-lg"
          />
        </div>
        <div class="details-extra m-12 text-xl">
          <h2 className="font-bold text-4xl">{movie.title}</h2>
          <p className="py-2 text-2xl">
            <span className="font-bold">Rating: </span>
            {movie.vote_average}
          </p>
          <p className="py-4 ">
            <span className="font-bold">Plot: </span>
            {movie.overview}
          </p>
          <p className="py-2">
            <span className="font-bold">Release Date: </span>
            {movie.release_date}
          </p>
          <p className="py-2">
            <span className="font-bold">Runtime: </span>
            {movie.runtime} minutes
          </p>
        </div>
      </div>

      <div className=" flex justify-center">
        <button
          onClick={notify}
          className="theme-button bg-black px-3 py-2 text-white rounded-lg border-solid border-white border-2
          flex items-center hover:bg-slate-700 
          "
          id="btn"
        >
          <span className="px-2">Add Movie To Favorites</span>
          <svg
            className="bg-red"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="red"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
        </button>
        <ToastContainer theme="colored"/>

        {/* <AddFavorites /> */}
      </div>
    </>
  );
};
