import React, { useState, useEffect, useContext, createContext } from "react";
import { baseURL, fetchApi } from "../components/utils/fetchApi";

export const MoviesContext = createContext();

export function MoviesProvider(Props) {

    const [MoviesList, setMoviesList] = useState([]);
    

    useEffect(() => {
      fetchApi(baseURL).then((response) => {
        setMoviesList(response);
      });
    }, [])


  return (
    <MoviesContext.Provider value={{ MoviesList, setMoviesList }}>
      {Props.children}
    </MoviesContext.Provider>
  );
}
