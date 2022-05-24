import React from 'react'
import Dashboard from './components/Dashboard'
import {ActionMovies} from './components/ActionMovies'
import { Horror } from "./components/Horror";
import {Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>

        <Route path="action" element={<ActionMovies />}></Route>

        <Route path="horror" element ={<Horror/>}></Route>
      </Routes>
    </div>
  );
}

export default App
