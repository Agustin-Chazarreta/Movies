import "../App.css";
import moviesData from "../Components/moviesData.json";
import FilterTag from "../Components/FilterTag";
import MovieField from "../Components/MovieField";
import React, { useState, useEffect } from "react";
import BuyList from "../Components/BuyList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState(moviesData);
  const [boolean, setBoolean] = useState(true);
  const [booleanAZ, setBooleanAZ] = useState(true);
  const [favoritos, setFavoritos] = useState([]);
  const [price, setPrice] = useState(0);
  const [buyList, setBuyList] = useState([]);
  const orden = [...moviesData].sort(function (a, b) {
    return b.vote_average - a.vote_average;
  });
  const ordenAZ = [...moviesData].sort(function (a, b) {
    if (b.title < a.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  function handleFav(movie) {
    if (favoritos.find((m) => m.id == movie.id)) {
      setFavoritos(favoritos.filter((el) => el.id !== movie.id));
      setMovies(movies.concat(movie));
    } else {
      setMovies(movies.filter((el) => el.id !== movie.id));
      setFavoritos(favoritos.concat(movie));
    }
  }
  function handlePrice(movie) {
    return setPrice(movie.genre_ids[0] + price);
  }
  function handleBuy(movie) {
    return setBuyList(buyList.concat(movie));
  }

  useEffect(() => {
    setMovies(
      moviesData.filter((movie) =>
        movie.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue]);
  return (
    <div className="App">
      <header>
        <div className="form">
          <input
            placeholder="Busca tu pelicula"
            onChange={(e) => setInputValue(e.target.value)}
          />

          <FilterTag
            setMovies={setMovies}
            setBoolean={setBoolean}
            boolean={boolean}
            orden={orden}
            moviesData={moviesData}
            text="Order by Rating"
          />
          <FilterTag
            setMovies={setMovies}
            setBoolean={setBooleanAZ}
            boolean={booleanAZ}
            orden={ordenAZ}
            moviesData={moviesData}
            text="Order by A-Z"
          />
        </div>
        <div>Agregar al carrito</div>
        <div className="container">
          {buyList.map((movie) => {
            return <BuyList movie={movie} />;
          })}
        </div>
        <div className="total">TOTAL: {price}</div>
      </header>
      <div className="container">
        {movies.map((movie) => {
          return (
            <MovieField
              handleFav={handleFav}
              movie={movie}
              handlePrice={handlePrice}
              handleBuy={handleBuy}
            />
          );
        })}
      </div>

      <div className="container">
        {movies.map((movie) => {
          return <MovieField handleFav={handleFav} movie={movie} />;
        })}
      </div>
      <div>Favoritos</div>
      <div className="container">
        {favoritos.map((movie) => {
          return <MovieField handleFav={handleFav} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
