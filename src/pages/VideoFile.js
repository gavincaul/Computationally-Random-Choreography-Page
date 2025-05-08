import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "./VideoFile.css";

export default function VideoPage({ videoFile }) {
  const navigate = useNavigate();
  const handleVid = () => {
    if (videoFile === "TWVTVWZU" && sessionStorage.getItem("start") === "1") {
      navigate("/video_BKD3PXMX");
    } else if (
      videoFile === "BKD3PXMX" &&
      sessionStorage.getItem("start") === "0"
    ) {
      navigate("/video_TWVTVWZU");
    } else {
      navigate("/test");
    }
  };
  return (
    <div className="background">
      <div className="textalign">
        <h1>Watch the video</h1>
        <p>When you are finished, click the button below to continue</p>
        <div className="videopadding"></div>
        <div className="videoWrapper">
          {videoFile && (
            <iframe
              title="YouTube Video"
              allow="autoplay"
              src={`https://www.youtube.com/embed/${
                videoFile === "BKD3PXMX" ? "cttL_ZuuoHM" : "bN0oPzDmLj4"
              }?&autoplay=1&mute=0`}
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="buttonWrapper">
          <button onClick={handleVid}>Next</button>
        </div>
      </div>
    </div>
  );
}
