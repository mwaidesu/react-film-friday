import { useEffect, useState } from "react";
import "./../index.css";
import Movie from "./Movie";
import useLocalStorage from "use-local-storage";
import { Link } from "react-router-dom";

const apiKey = "api_key=efb8d52d72f50732f48333d163521021";
const actionUrl = `https://api.themoviedb.org/3/discover/movie?${apiKey}&with_genres=28`;

export function ActionMovies() {
  const [movies, setMovies] = useState([]);

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    fetch(actionUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => alert.warn(err.message));
  }, []);

  return (
    <div data-theme={theme}>
      <header className="header action-header font-semibold text-white text-3xl">
        <h1>Action Movies</h1>
      </header>

      <div className="theme-div">
        <Link to="/dashboard">
          <button className="theme-button bg-black px-3 py-2 text-white rounded-lg border-solid border-white border-2">
            Home
          </button>
        </Link>

        <Link to="/horror">
          <button className="theme-button bg-black px-3 py-2 text-white rounded-lg border-solid border-white border-2">
            Horror Movies
          </button>
        </Link>

        <button
          className="theme-button bg-black px-3 py-2 text-white rounded-lg border-solid border-white border-2"
          id="btn"
          onClick={switchTheme}
        >
          Change Theme
        </button>
      </div>

      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}
