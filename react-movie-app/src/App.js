import React from "react";
import Dashboard from "./components/Dashboard";
import { ActionMovies } from "./components/ActionMovies";
import { Horror } from "./components/Horror";
import { FourOhFour } from "./components/FourOhFour";
import { MovieDetails } from "./components/movieDetails/MovieDetails";
import { Routes, Route } from "react-router-dom";

import { FavoriteMovies } from "./components/FavoriteMovies";
import Signin from "./components/SignIn";
import Signup from "./components/SignUp";
import { AuthContextProvider } from "./components/context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route exact path="/" element={<Signin />}></Route>

        <Route path="/signup" element={<Signup />}></Route>

        <Route
          path="/action"
          element={
            <ProtectedRoute>
              <ActionMovies />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/action" element={<ActionMovies />}></Route>

        <Route path="/horror" element={<Horror />}></Route>

        <Route path="favorites" element={<FavoriteMovies />}></Route>

        <Route exact path="/movie/:id" element={<MovieDetails />}></Route>

        <Route path="*" element={<FourOhFour />}></Route>
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
