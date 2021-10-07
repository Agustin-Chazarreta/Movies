import React from "react";
import { useParams } from "react-router-dom";
import moviesData from "../Components/moviesData.json";
import IMAGE_BASE_URL from "../Utils/constants";
export default function Movie() {
  const { movieId } = useParams();

  return (
    <div>
      <div>
        {moviesData.map((movie) => {
          if (movieId == movie.id) {
            return (
              <div className="movieField">
                <h2>{movie.title}</h2>
                <img
                  className="imgMovie"
                  src={IMAGE_BASE_URL + movie.poster_path}
                />
                <span>Imdb Rating: {movie.vote_average}</span>
                <span>Original language: {movie.original_language}</span>
                <p>Overview: {movie.overview}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
