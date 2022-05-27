import React from "react";
import { Link } from "react-router-dom";

export const FourOhFour = () => {
  return (
    <div className="bg-black text-white h-screen sm:text-center">
      <h1 className="text-9xl font-medium py-9">
        {" "}
        Try a valid link. Bad Request.
      </h1>
      <Link to="/dashboard">
        <button className="theme-button bg-black px-3 py-2 text-white rounded-lg border-solid border-white border-2">
          Home
        </button>
      </Link>
    </div>
  );
};
