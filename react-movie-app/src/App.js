import React from "react";
import Dashboard from "./components/Dashboard";
import { ActionMovies } from "./components/ActionMovies";
import { Horror } from "./components/Horror";
import { FourOhFour } from "./components/FourOhFour";
import { MovieDetails } from "./components/movieDetails/MovieDetails";
import { Routes, Route } from "react-router-dom";

import { FavoriteMovies } from "./components/FavoriteMovies";

const App = () => {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>

          <Route path="action" element={<ActionMovies />}></Route>

          <Route path="horror" element={<Horror />}></Route>

          <Route path="favorites" element={<FavoriteMovies/>}></Route>

          <Route exact path="/movie/:id" element={<MovieDetails />}></Route>

          <Route path="*" element={<FourOhFour />}></Route>
        </Routes>
    </div>
  );
};

export default App;
