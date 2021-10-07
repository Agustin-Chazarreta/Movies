import React from "react";

export default function FilterTag({
  setMovies,
  setBoolean,
  orden,
  moviesData,
  boolean,
  text,
}) {
  return (
    <div>
      <label className="check-fliters">
        <span className="text-check-filter">{text}</span>
        <input
          type="checkbox"
          onChange={(e) => {
            if (boolean) {
              setMovies(orden);
              setBoolean(!boolean);
            }
            if (boolean == false) {
              setMovies(moviesData);
              setBoolean(!boolean);
            }
          }}
        ></input>
      </label>
    </div>
  );
}
