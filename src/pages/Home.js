import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    const num = parseInt(number);
    if (isNaN(num)) return;
    sessionStorage.clear();
    let vid = (Date.now() % num) % 2;
    sessionStorage.setItem("start", vid);
    navigate(vid === 0 ? "/video_BKD3PXMX" : "/video_TWVTVWZU"); // hash date.now w/ inputted number
  };

  return (
    <div className="background">
      <div className="textalign">
        <h1>Computationally Random Computing</h1>
        <p>
          You will see two videos. When you have finished watching a video,
          continue onto the next.
        </p>
        <p>
          This project consists of two videos: an original video and a
          computationally shuffled one. Through a pseudo-random process, several
          parts of the original were rearranged.
        </p>
        <p>Your job is to decide which one was the original.</p>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a random number"
        />
        <p>This number will determine the order of the videos.</p>
        <button onClick={handleStart}>Start</button>
      </div>
    </div>
  );
}
