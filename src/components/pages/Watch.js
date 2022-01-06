import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Player from "../Player";

export default function Watch() {

  let VideoURL = useParams()["VideoURL"];
  
  return (
    <section className="video-page">
       <h2 style={{marginTop:"12px",color:"#fff",textAlign:"center"}}>{VideoURL} <i class="fas fa-film"></i></h2>
       <Player VideoURL={VideoURL} />
    </section>
  );
}
