import { useEffect, useState } from "react";
import "./../index.css";
import Movie from "./Movie";
import useLocalStorage from "use-local-storage";
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext';


const apiKey = "api_key=efb8d52d72f50732f48333d163521021";
const mainURL = "https://api.themoviedb.org/3";
const apiURL = `${mainURL}/discover/movie?sort_by=popularity.desc&${apiKey}`;
const searchURL = `${mainURL}/search/movie?${apiKey + "&query="}`;

function Dashboard() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => alert.warn(err.message));
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      fetch(searchURL + searchTerm)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        });

      setSearchTerm("");
    }
  };
  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }

    return (
      <div data-theme={theme}>
        <header className="header">
          <form onSubmit={handleOnSubmit}>
            <input
              type="search"
              placeholder={<p>User Email: {user && user.email}</p>}
              className="search"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </header>

        <div className="theme-div">
          <button onClick={handleLogout} className="border px-6 py-2 my-4">
            Logout
          </button>
          
          <Link to="/horror">
            <button className="theme-button bg-black px-3 py-2 text-white rounded-lg border-solid border-white border-2">
              Horror Movies
            </button>
          </Link>

          <Link to="/action">
            <button className="theme-button bg-black px-3 py-2 text-white rounded-lg border-solid border-white border-2">
              Action Movies
            </button>
          </Link>

          <Link to="/favorites">
            <button className="theme-button bg-black px-3 py-2 text-white rounded-lg border-solid border-white border-2">
              Favorites
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
}
  export default Dashboard;
