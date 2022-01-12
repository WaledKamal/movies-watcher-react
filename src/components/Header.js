import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { MoviesContext } from "../Context/MoviesContext";
import { baseURL, fetchApi } from "./utils/fetchApi";

export default function Header() {
  const filterContext = useContext(MoviesContext);
  const [filterdMovies, setfilterdMovies] = useState([]);
  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    fetchApi(baseURL).then((response) => {
      setfilterdMovies(response);
    });
  });

  function filterMoives(text) {
    setsearchValue(text.target.value)
    let KeyWord = text.target.value;
    filterContext.setMoviesList(
      filterdMovies.filter((item) => item["MovName"].includes(KeyWord))
    );
  }
  /* ()=>filterContext.setMoviesList([])*/

  return (
    <header>
      <a href={"/"} className="logo">
        MovieT-U
      </a>
      <div className="search-area">
        <input
          type="search"
          onChange={(text) => filterMoives(text)}
          placeholder={"serach a movie ... 🔍 "}
          className="search-input"
          value={searchValue}
        ></input>
      </div>
    </header>
  );
}
