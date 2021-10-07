import React from "react";
import IMAGE_BASE_URL from "../Utils/constants";

export default function BuyList({ movie }) {
  return (
    <div className="lista">
      <div>Title: {movie.title}</div>
      <div className="prices">Price: {movie.genre_ids[0]}</div>
      <img className="pelipeque" src={IMAGE_BASE_URL + movie.poster_path}></img>
    </div>
  );
}
