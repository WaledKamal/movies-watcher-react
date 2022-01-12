import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Player from "../Player";
import { baseURL, fetchApi } from "../utils/fetchApi";

export default function Watch() {
  const [Moives, setMoives] = useState([]);
  const [CurrentMoive, setCurrentMoive] = useState([]);
  
  let VideoURL = useParams()["VideoURL"];

  useEffect(() => {
    fetchApi(baseURL).then((data) => {
      setMoives(data);
    });
  }, []);

  useEffect(() => {
    for (let index = 0; index < Moives.length; index++) {
      if (Moives[index]["MovName"] === VideoURL) {
        setCurrentMoive(Moives[index]);
      }
    }
  },)


  return (
    <section className="video-page">
      <h2 style={{ marginTop: "12px", color: "#fff", textAlign: "center" }}>
        {VideoURL} <i className="fas fa-film"></i>
      </h2>
      <Player VideoURL={VideoURL} />
      {CurrentMoive.length <= 0 ? <h3 style={{marginTop:"10px",color:"#fff",textAlign:"center"}}>Loading ...</h3> : <div className="movie-info">
      <img className="moive-info-img" src={CurrentMoive["PosterURL"]}></img>
        <div className="moive-info-name">{CurrentMoive["MovName"]}</div>
        <div className="moive-dec">{CurrentMoive["MovDec"]}</div>
      </div> }
      
    </section>
  );
}


