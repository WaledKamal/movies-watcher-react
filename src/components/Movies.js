import React, { useState, useEffect, useContext } from "react";
import Movie from "./Movie";
import { baseURL, fetchApi } from "./utils/fetchApi";
import { MoviesContext } from "../Context/MoviesContext";


export default function Movies() {

  const [MoviesData, setMoviesData] = useState([]);

  const Mcontext = useContext(MoviesContext)

  useEffect(() => {
    setMoviesData(Mcontext.MoviesList)
    console.log(MoviesData)
  });
   
  return (
    <section className="Movies">
      <div className="slide">
        <h3>
          <span>See</span> what's next
        </h3>
        <h4>What is Lastest !?</h4>
      </div>
      <div className="Movies-box">
      {MoviesData.length <= 0 ? <h3 style={{marginTop:"10px",color:"#fff"}}>Not Found</h3> : <div></div> }
        {MoviesData.map((movie, index) =>(
        <Movie key={index} data={movie} />
        ))}
      </div>
    </section>
  );
}
