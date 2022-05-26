import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import Movie  from "../components/Movie";
import { Link } from "react-router-dom";

export const FavoriteMovies = () => {
  const { favorites } = useContext(GlobalContext);

  return (
    <>
      <header className="header action-header font-semibold text-white text-3xl">
        <h1 className="count-pill">
          {favorites.length}{" "}
          {favorites.length === 1 ? "Favorite Movie" : "Favorite Movies"}
        </h1>
      </header>

      <div className="theme-div">
        <Link to="/">
          <button className="theme-button bg-black px-3 py-2 text-white rounded-lg border-solid border-white border-2">
            Home
          </button>
        </Link>
      </div>

      {favorites.length > 0 ? (
        <div className="movie-container">
          {favorites.map((movie) => (
            <Movie movie={movie} key={movie.id} {...movie} type="favorites" />
          ))}
        </div>
      ) : (
        <h2 className="no-movies">No movies in your list! Add some!</h2>
      )}
    </>
  );
};
