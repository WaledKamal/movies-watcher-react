import VideoPlayer from "react-video-js-player";

export default function Player(props) {
  let VideoURL = props.VideoURL;
  let PlayingURL = `https://raw.githubusercontent.com/WaledKamal/testing-video-trailers/main/${VideoURL}.mp4`
  return (
    <VideoPlayer className={"Player"}
      controls={true}
      src={PlayingURL}
      width={"100vh"}
      height={"360px"}
    />
  );
}
