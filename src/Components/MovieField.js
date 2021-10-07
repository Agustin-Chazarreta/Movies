import React from "react";
import { Link } from "react-router-dom";
import IMAGE_BASE_URL from "../Utils/constants";

export default function MovieField({
  movie,
  handleFav,
  handlePrice,
  handleBuy,
}) {
  function funcionesVarias() {
    handleBuy(movie);
    handlePrice(movie);
  }
  return (
    <div className="movieField">
      <img className="imgMovie" src={IMAGE_BASE_URL + movie.poster_path}></img>
      <button className="favButton" onClick={() => handleFav(movie)}>
        ⭐
      </button>
      <button onClick={() => funcionesVarias()}>Buy</button>
      <span>{movie.title}</span> <span>Imdb Rating: {movie.vote_average}</span>
      <Link to={`/movie/${movie.id}`}>More Info</Link>
    </div>
  );
}
